import { NextRequest, NextResponse } from 'next/server'
import { GitHubRepository, GitHubLanguages, ProjectData, GitHubApiError } from '@/lib/types'

// Function to extract description from README content
function extractDescriptionFromReadme(readmeContent: string, repoName: string = ''): string | null {
  if (!readmeContent) return null

  // Split into lines and clean up
  const lines = readmeContent.split('\n').map(line => line.trim())

  // Look for "# Description" section (simple approach)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]?.toLowerCase()?.trim()

    if (line === '# description' || line === '# Description') {
      // Found the description section, find the next non-empty line
      for (let j = i + 1; j < lines.length; j++) {
        const nextLine = lines[j]?.trim()
        if (nextLine && nextLine.length > 0 && !nextLine.startsWith('#')) {
          return nextLine
        }
        // Stop if we hit another heading
        if (nextLine.startsWith('#')) {
          break
        }
      }
    }
  }

  return null
}

// Process README fetching with optimizations
async function fetchRepoDescription(repo: GitHubRepository, token: string | undefined): Promise<string | null> {
  const possibleReadmeNames = ['README.md', 'Readme.md', 'readme.md']

  for (const readmeName of possibleReadmeNames) {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${repo.full_name}/contents/${readmeName}`,
        {
          headers: {
            'Authorization': token ? `Bearer ${token}` : '',
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Portfolio-NextJS-App'
          }
        }
      )

      if (response.ok) {
        const data = await response.json()
        if (data.content) {
          const content = Buffer.from(data.content, 'base64').toString('utf-8')
          const description = extractDescriptionFromReadme(content, repo.name)
          if (description) {
            return description
          }
        }
      }
    } catch (error) {
      // Continue to next README variant
    }

    // Small delay to respect rate limits
    await new Promise(resolve => setTimeout(resolve, 100))
  }

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
      return NextResponse.json(
        { error: 'Failed to fetch repositories' },
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

    // Process all repos with optimized parallel README fetching
    const results = await Promise.allSettled(
      filteredRepos.map(async (repo, index) => {
        return new Promise<ProjectData>(async (resolve) => {
          // Stagger requests to avoid hitting rate limits
          setTimeout(async () => {
            // Priority: GitHub description > README parsing
            let description = repo.description

            if (!description) {
              description = await fetchRepoDescription(repo, token)
            }

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
                const languagesData = await languagesResponse.json()
                technologies = Object.keys(languagesData || {})
              }
            } catch (error) {
              console.error(`Failed to fetch languages for ${repo.name}`)
            }

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

            resolve({
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
            })
          }, index * 200) // Stagger by 200ms per repo
        })
      })
    )

    // Extract successful results and sort by most recently updated
    const projects = results
      .filter(result => result.status === 'fulfilled')
      .map(result => (result as PromiseFulfilledResult<ProjectData>).value)
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())

    console.log(`✅ Processed ${projects.length} projects with optimized parallel README fetching`)

    return NextResponse.json({ projects })

  } catch (error) {
    console.error('GitHub API route error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
