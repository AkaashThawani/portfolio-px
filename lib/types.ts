// GitHub API Response Types
export interface GitHubRepository {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  clone_url: string
  git_url: string
  ssh_url: string
  language: string | null
  languages_url: string
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string | null
  size: number
  stargazers_count: number
  watchers_count: number
  forks_count: number
  open_issues_count: number
  fork: boolean
  archived: boolean
  disabled: boolean
  private: boolean
  has_issues: boolean
  has_projects: boolean
  has_downloads: boolean
  has_wiki: boolean
  has_pages: boolean
  has_discussions: boolean
  homepage: string | null
  license: {
    key: string
    name: string
    spdx_id: string
    url: string | null
    node_id: string
  } | null
  owner: {
    login: string
    id: number
    avatar_url: string
    html_url: string
    type: string
  }
}

export interface GitHubLanguages {
  [language: string]: number
}

export interface ProjectData {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
  highlights: string[]
  stars: number
  forks: number
  language: string | null
  topics: string[]
  created_at: string
  updated_at: string
}

export interface GitHubApiError {
  message: string
  documentation_url?: string
  errors?: Array<{
    resource: string
    code: string
    field: string
  }>
}
