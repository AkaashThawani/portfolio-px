// Enhanced Projects Section with Timeline and Carousel

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ProjectData {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo?: string
  highlights: string[]
  stars?: number
  forks?: number
  language?: string
  created_at: string
  updated_at: string
}

const Projects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const [viewMode, setViewMode] = useState<'timeline' | 'grid' | 'carousel'>('timeline');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/github?username=AkaashThawani')
        if (!response.ok) {
          throw new Error(`API Error: ${response.status} - ${response.statusText}`)
        }
        const data = await response.json()
        console.log('GitHub API Response:', data) // Debug log
        setProjects(data.projects || []) // Get All projects
      } catch (err) {
        console.error('Error fetching projects:', err)
        setError(`Failed to load projects: ${err instanceof Error ? err.message : 'Unknown error'}`)
        // Fallback projects with detailed data (shows immediately)
        setProjects([
          {
            title: "Modern Portfolio Website",
            description: "A sleek, responsive portfolio built with Next.js featuring dark mode, GitHub integration, and smooth animations. Built with modern web technologies for optimal performance and user experience.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
            github: "https://github.com/AkaashThawani/portfolio",
            demo: "https://portfolio-demo.vercel.app",
            highlights: ["Dark Mode Toggle", "GitHub API Integration", "Responsive Design", "Smooth Animations"],
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            stars: 12,
            forks: 5,
            language: "TypeScript",
            created_at: "2024-01-15T10:00:00Z",
            updated_at: "2024-09-19T20:00:00Z"
          },
          {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with secure payments, inventory management, and modern UI. Features admin dashboard, customer portal, and mobile-responsive design.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
            github: "https://github.com/AkaashThawani/ecommerce",
            demo: "https://ecommerce-demo.vercel.app",
            highlights: ["Secure Payments", "Admin Dashboard", "Inventory Management", "Mobile-First"],
            technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
            stars: 8,
            forks: 3,
            language: "JavaScript",
            created_at: "2023-03-20T08:00:00Z",
            updated_at: "2024-08-10T14:00:00Z"
          },
          {
            title: "Task Management App",
            description: "A comprehensive task management application with real-time collaboration, Drag & drop functionality, and advanced filtering options for productivity.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
            github: "https://github.com/AkaashThawani/taskmanager",
            demo: "https://taskmanager-demo.vercel.app",
            highlights: ["Real-time Collaboration", "Drag & Drop", "Advanced Filtering", "Offline Support"],
            technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
            stars: 15,
            forks: 7,
            language: "TypeScript",
            created_at: "2023-05-10T08:00:00Z",
            updated_at: "2024-07-20T15:00:00Z"
          },
          {
            title: "Weather Dashboard",
            description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics using multiple weather APIs.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
            github: "https://github.com/AkaashThawani/weather-app",
            demo: "https://weather-app-demo.vercel.app",
            highlights: ["Interactive Maps", "Multiple APIs", "Location Services", "Weather Analytics"],
            technologies: ["Next.js", "OpenWeather API", "Mapbox", "Chart.js"],
            stars: 10,
            forks: 4,
            language: "JavaScript",
            created_at: "2023-08-15T12:00:00Z",
            updated_at: "2024-06-05T10:00:00Z"
          },
          {
            title: "Chat Application",
            description: "Real-time chat application with private messaging, group chats, file sharing, and end-to-end encryption for secure communication.",
            image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
            github: "https://github.com/AkaashThawani/chat-app",
            demo: "https://chat-app-demo.vercel.app",
            highlights: ["Real-time Messaging", "End-to-End Encryption", "File Sharing", "Group Chats"],
            technologies: ["Next.js", "Socket.io", "WebRTC", "PostgreSQL"],
            stars: 18,
            forks: 9,
            language: "TypeScript",
            created_at: "2023-02-01T09:00:00Z",
            updated_at: "2024-09-01T11:00:00Z"
          },
          {
            title: "Data Visualization Tool",
            description: "Powerful data visualization dashboard with interactive charts, data import/export capabilities, and real-time data updates for business analytics.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
            github: "https://github.com/AkaashThawani/data-viz",
            demo: "https://data-viz-demo.vercel.app",
            highlights: ["Interactive Charts", "Data Import/Export", "Real-time Updates", "Business Analytics"],
            technologies: ["D3.js", "React", "Python", "FastAPI"],
            stars: 22,
            forks: 11,
            language: "Python",
            created_at: "2022-11-15T14:00:00Z",
            updated_at: "2024-08-25T13:00:00Z"
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const getFilterCategory = (tech: string) => {
    const techLower = tech.toLowerCase()
    if (['react', 'next.js', 'angular', 'vue', 'svelte', 'javascript', 'typescript'].some(t => techLower.includes(t))) return 'frontend'
    if (['node.js', 'python', 'django', 'flask', 'express', 'java', 'php', 'ruby', 'go', 'c#'].some(t => techLower.includes(t))) return 'backend'
    if (['postgresql', 'mysql', 'mongodb', 'redis', 'sqlite', 'firebase', 'prisma'].some(t => techLower.includes(t))) return 'database'
    if (['html', 'css', 'tailwind', 'sass', 'styled-components', 'bootstrap'].some(t => techLower.includes(t))) return 'styling'
    if (['git', 'docker', 'kubernetes', 'aws', 'vercel', 'netlify', 'heroku'].some(t => techLower.includes(t))) return 'deployment'
    return 'other'
  }

  const filteredProjects = projects.filter(project => {
    if (filter === "all") return true

    if (filter === "fullstack") {
      const categories = project.technologies.map(tech => getFilterCategory(tech))
      return categories.includes('frontend') && categories.includes('backend')
    }

    if (filter === "frontend" || filter === "backend" || filter === "database" || filter === "styling" || filter === "deployment") {
      return project.technologies.some(tech => getFilterCategory(tech) === filter)
    }

    // Handle specific technology matches (e.g., "react", "node")
    if (filter !== "all") {
      return project.technologies.some(tech =>
        tech.toLowerCase().includes(filter.toLowerCase())
      ) || project.language?.toLowerCase() === filter.toLowerCase()
    }

    return true
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    })
  }

  if (loading) {
    return (
      <section className="min-h-screen flex flex-col justify-center px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-accent mb-16 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="project-card h-96 bg-gray-800 animate-pulse rounded-xl"></div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="min-h-screen flex flex-col justify-center px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-accent mb-16 text-center">Projects</h2>
          <p className="text-center text-gray-400">{error}</p>
        </div>
      </section>
    )
  }

  const ProjectCard = ({ project, index }: { project: ProjectData; index: number }) => (
    <div className="project-card group block hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 hover:scale-105">
      <div className="relative">
        <div className="aspect-video rounded-2xl overflow-hidden bg-gray-700 mb-6">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-4 left-4">
          {project.stars && (
            <div className="bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm flex items-center gap-1 font-medium">
              <span>⭐</span>
              <span>{project.stars}</span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-gray-300 text-base leading-relaxed line-clamp-4">{project.description}</p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Key Features</h4>
            <div className="flex flex-wrap gap-2">
              {project.highlights.slice(0, 3).map((highlight, i) => (
                <span key={i} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs font-medium">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="bg-indigo-600/30 text-indigo-300 px-4 py-2 rounded-full text-sm font-semibold border border-indigo-600/40">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-gray-400 text-sm font-medium self-center">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="text-sm text-gray-400">
            <span className="block">Last updated</span>
            <span className="font-medium">{formatDate(project.updated_at)}</span>
          </div>
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors p-2 hover:bg-gray-700 rounded-xl"
              title="View on GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors p-2 hover:bg-gray-700 rounded-xl"
                title="Live Demo"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 mb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-accent mb-4 animate-slide-up">Featured Projects</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-slide-left">
            A collection of my recent work showcasing modern web development skills and problem-solving abilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-slide-right">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all animate-bounce-in ${
              filter === "all"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            style={{ animationDelay: '0s' }}
          >
            All
          </button>
          <button
            onClick={() => setFilter("frontend")}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
              filter === "frontend"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("backend")}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
              filter === "backend"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Backend
          </button>

          <button
            onClick={() => setFilter("database")}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
              filter === "database"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Database
          </button>
          <button
            onClick={() => setFilter("styling")}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
              filter === "styling"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Styling
          </button>
          <button
            onClick={() => setFilter("deployment")}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
              filter === "deployment"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Deployment
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No projects found matching your filter. Try selecting a different technology or view all projects.
            </p>
          </div>
        )}


      </div>
    </section>
  )
}

export default Projects
