import { NextRequest, NextResponse } from 'next/server'
import { GitHubRepository, GitHubLanguages, ProjectData, GitHubApiError } from '@/lib/types'

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

        return {
          title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: repo.description || 'No description available',
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
