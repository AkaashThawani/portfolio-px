import { NextRequest, NextResponse } from 'next/server'
import { GitHubRepository, GitHubLanguages, ProjectData, GitHubApiError } from '@/lib/types'

// Function to extract description from README content
function extractDescriptionFromReadme(readmeContent: string, repoName: string = ''): string | null {
  if (!readmeContent) return null

  // Split into lines and clean up
  const lines = readmeContent.split('\n').map(line => line.trim())
  console.log(lines)
  // Look for "# Description" section (simple approach)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]?.toLowerCase()?.trim()
    
    if (line === '# description') {
      // Found the description section, take the next line if it exists
      const nextLine = lines[i + 1]?.trim()
      if (nextLine && nextLine.length > 0) {
        console.log(`✅ ${repoName}: Found description: "${nextLine.substring(0, 60)}..."`)
        return nextLine
      }
    }
  }

  console.log(`❌ ${repoName}: No "# Description" section found`)
  return null
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('username')

    if (!username) {
      return NextResponse.json(
        { error: 'Username parameter is required' },
        { status: 400 }
      )
    }

    const token = process.env.GITHUB_TOKEN

    // Fetch repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-NextJS-App'
        }
      }
    )

    if (!reposResponse.ok) {
      const errorData: GitHubApiError = await reposResponse.json()
      console.error('GitHub API Error:', errorData)

      if (reposResponse.status === 404) {
        return NextResponse.json(
          { error: 'GitHub user not found' },
          { status: 404 }
        )
      }

      if (reposResponse.status === 403) {
        return NextResponse.json(
          { error: 'GitHub API rate limit exceeded. Please add a GitHub token.' },
          { status: 403 }
        )
      }

      return NextResponse.json(
        { error: errorData.message || 'Failed to fetch repositories' },
        { status: reposResponse.status }
      )
    }

    const repositories: GitHubRepository[] = await reposResponse.json()

    // Filter out forked repositories and private repositories
    const filteredRepos = repositories.filter(repo =>
      !repo.fork &&
      !repo.private &&
      !repo.archived &&
      !repo.disabled
    )

    // Get languages for each repository
    const projects: ProjectData[] = await Promise.all(
      filteredRepos.map(async (repo) => {
        let languages: GitHubLanguages = {}
        let technologies: string[] = []

        try {
          const languagesResponse = await fetch(repo.languages_url, {
            headers: {
              'Authorization': token ? `Bearer ${token}` : '',
              'Accept': 'application/vnd.github.v3+json',
              'User-Agent': 'Portfolio-NextJS-App'
            }
          })

          if (languagesResponse.ok) {
            languages = await languagesResponse.json()
            technologies = Object.keys(languages)
          }
        } catch (error) {
          console.error(`Failed to fetch languages for ${repo.name}:`, error)
        }

        // Create highlights based on repository data
        const highlights = []
        if (repo.stargazers_count > 0) {
          highlights.push(`${repo.stargazers_count} GitHub ${repo.stargazers_count === 1 ? 'star' : 'stars'}`)
        }
        if (repo.forks_count > 0) {
          highlights.push(`${repo.forks_count} ${repo.forks_count === 1 ? 'fork' : 'forks'}`)
        }
        if (repo.has_pages && repo.homepage) {
          highlights.push('GitHub Pages deployed')
        }
        if (repo.topics.length > 0) {
          highlights.push(`Topics: ${repo.topics.slice(0, 3).join(', ')}`)
        }

        // Get description from README if repository description is missing
        let description = repo.description

        if (!description) {
          console.log(`📖 ${repo.name}: No GitHub description, fetching README...`)

          try {
            const readmeResponse = await fetch(
              `https://api.github.com/repos/${repo.full_name}/contents/README.md`,
              {
                headers: {
                  'Authorization': token ? `Bearer ${token}` : '',
                  'Accept': 'application/vnd.github.v3+json',
                  'User-Agent': 'Portfolio-NextJS-App'
                }
              }
            )

            if (readmeResponse.ok) {
              const readmeData = await readmeResponse.json()
              if (readmeData.content) {
                // Decode base64 content
                const readmeContent = Buffer.from(readmeData.content, 'base64').toString('utf-8')
                console.log(`📄 ${repo.name}: README fetched (${readmeContent.length} chars)`)

                // Extract description from README
                const extractedDescription = extractDescriptionFromReadme(readmeContent, repo.name)
                console.log(`📝 ${repo.name}: Extracted description: "${extractedDescription}"`)

                description = extractedDescription
              }
            } else {
              console.log(`❌ ${repo.name}: README fetch failed: ${readmeResponse.status}`)
            }
          } catch (error) {
            console.error(`💥 ${repo.name}: README fetch error:`, error)
          }
        }

        console.log(`📝 ${repo.name}: Using ${description ? 'extracted README' : 'repository'} description: "${description || 'No description available'}"`)

        return {
          title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: description || 'No description available',
          image: `https://opengraph.githubassets.com/1/${repo.full_name}`,
          technologies: technologies.length > 0 ? technologies : [repo.language || 'Other'],
          github: repo.html_url,
          demo: repo.homepage || repo.html_url,
          highlights: highlights.length > 0 ? highlights : ['Open source project'],
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language,
          topics: repo.topics,
          created_at: repo.created_at,
          updated_at: repo.updated_at
        }
      })
    )

    // Sort by most recently updated
    projects.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())

    return NextResponse.json({ projects })

  } catch (error) {
    console.error('GitHub API route error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
