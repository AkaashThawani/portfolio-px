"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, Star, GitFork, Calendar, Code, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useTheme } from "./background-switcher"

// Tech icons mapping from skills section
const techIcons: { [key: string]: string } = {
  "JavaScript": "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  "TypeScript": "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  "React": "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  "Next.js": "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
  "Angular": "https://www.vectorlogo.zone/logos/angular/angular-icon.svg",
  "Node.js": "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  "Python": "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  "Django": "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
  "HTML5": "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  "CSS": "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
  "Tailwind CSS": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  "PostgreSQL": "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  "MySQL": "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  "Git": "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  "REST APIs": "",
  "Firebase": "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  "Material-UI": "https://www.vectorlogo.zone/logos/materializecss/materializecss-icon.svg",
  "Stripe": "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
  "Framer Motion": "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
}

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
  topics?: string[]
  created_at: string
  updated_at: string
}

const ThreeColumnProjects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)
  const [loading, setLoading] = useState(true)
  const { currentTheme } = useTheme()

  // Cache key for GitHub API results
  const CACHE_KEY = 'github-projects-cache'
  const CACHE_DURATION = 1000 * 60 * 60 // 1 hour in milliseconds

  // Get seasonal colors for gradient background (using CSS variables with proper rgba syntax)
  const getSeasonalColors = () => {
    switch (currentTheme) {
      case 'rain':
        return {
          primary: 'rgba(var(--hero-rain-primary-rgb), 0.2)',
          secondary: 'rgba(var(--hero-rain-secondary-rgb), 0.15)',
          text: 'var(--nav-rain-text)',
          textLight: 'var(--nav-rain-text)'
        }
      case 'sunlight':
        return {
          primary: 'rgba(var(--hero-sunlight-primary-rgb), 0.2)',
          secondary: 'rgba(var(--hero-sunlight-secondary-rgb), 0.15)',
          text: '#1e293b',
          textLight: '#334155'
        }
      case 'flowerfall':
        return {
          primary: 'rgba(var(--hero-autumn-primary-rgb), 0.2)',
          secondary: 'rgba(var(--hero-autumn-secondary-rgb), 0.15)',
          text: 'var(--nav-autumn-text)',
          textLight: 'var(--nav-autumn-text-light)'
        }
      default: // snowfall
        return {
          primary: 'rgba(var(--hero-snowfall-primary-rgb), 0.2)',
          secondary: 'rgba(var(--hero-snowfall-secondary-rgb), 0.15)',
          text: 'var(--nav-snowfall-text)',
          textLight: 'var(--nav-snowfall-text-light)'
        }
    }
  }

  const colors = getSeasonalColors()

  // Cached project fetching with localStorage
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Check for cached data first
        const cachedData = localStorage.getItem(CACHE_KEY)
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData)
          const isExpired = Date.now() - timestamp > CACHE_DURATION

          if (!isExpired && data.projects && data.projects.length > 0) {
            console.log('Using cached GitHub projects data')
            setProjects(data.projects)
            setSelectedProject(data.projects[0])
            setLoading(false)
            return
          }
        }

        // Fetch fresh data if no cache or expired
        console.log('Fetching fresh GitHub projects data')
        const response = await fetch('/api/github?username=AkaashThawani')
        if (!response.ok) {
          throw new Error(`API Error: ${response.status} - ${response.statusText}`)
        }
        const data = await response.json()
        const fetchedProjects = data.projects || []

        // Cache the successful response
        if (fetchedProjects.length > 0) {
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            data,
            timestamp: Date.now()
          }))
        }

        setProjects(fetchedProjects)
        if (fetchedProjects.length > 0) {
          setSelectedProject(fetchedProjects[0])
        }
      } catch (err) {
        console.error('Error fetching projects:', err)

        // Try to use cached data even if expired as fallback
        const cachedData = localStorage.getItem(CACHE_KEY)
        if (cachedData) {
          try {
            const { data } = JSON.parse(cachedData)
            if (data.projects && data.projects.length > 0) {
              console.log('Using expired cached data as fallback')
              setProjects(data.projects)
              setSelectedProject(data.projects[0])
              setLoading(false)
              return
            }
          } catch (cacheErr) {
            console.error('Error parsing cached data:', cacheErr)
          }
        }

        // Use fallback projects if no cache available
        const fallbackProjects: ProjectData[] = [
          {
            title: "Modern Portfolio Website",
            description: "A sleek, responsive portfolio built with Next.js featuring dark mode, GitHub integration, and smooth animations.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
            github: "https://github.com/AkaashThawani/portfolio",
            demo: "https://portfolio-demo.vercel.app",
            highlights: ["Dark Mode Toggle", "GitHub API Integration", "Responsive Design"],
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            stars: 12,
            forks: 5,
            language: "TypeScript",
            topics: ["portfolio", "nextjs", "react"],
            created_at: "2024-01-15T10:00:00Z",
            updated_at: "2024-09-19T20:00:00Z"
          },
          {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with secure payments, inventory management, and modern UI.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
            github: "https://github.com/AkaashThawani/ecommerce",
            demo: "https://ecommerce-demo.vercel.app",
            highlights: ["Secure Payments", "Admin Dashboard", "Inventory Management"],
            technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
            stars: 8,
            forks: 3,
            language: "JavaScript",
            topics: ["ecommerce", "payments", "fullstack"],
            created_at: "2023-03-20T08:00:00Z",
            updated_at: "2024-08-10T14:00:00Z"
          },
          {
            title: "Task Management App",
            description: "A comprehensive task management application with real-time collaboration and drag & drop functionality.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
            github: "https://github.com/AkaashThawani/taskmanager",
            demo: "https://taskmanager-demo.vercel.app",
            highlights: ["Real-time Collaboration", "Drag & Drop", "Advanced Filtering"],
            technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
            stars: 15,
            forks: 7,
            language: "TypeScript",
            topics: ["productivity", "collaboration", "firebase"],
            created_at: "2023-05-10T08:00:00Z",
            updated_at: "2024-07-20T15:00:00Z"
          }
        ]
        setProjects(fallbackProjects)
        setSelectedProject(fallbackProjects[0])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    })
  }

  const getRelatedProjects = (currentProject: ProjectData) => {
    return projects
      .filter(p => p.title !== currentProject.title)
      .filter(p => p.technologies.some(tech => currentProject.technologies.includes(tech)))
      .slice(0, 3)
  }

  const getTechStats = () => {
    const techCount: { [key: string]: number } = {}
    projects.forEach(project => {
      project.technologies.forEach(tech => {
        techCount[tech] = (techCount[tech] || 0) + 1
      })
    })
    return Object.entries(techCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
  }

  if (loading) {
  return (
    <section id="projects" className="relative min-h-screen flex flex-col justify-center px-4 overflow-hidden">
      {/* Subtle Background Overlay for Text Contrast */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle at 20% 50%, ${colors.primary} 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${colors.secondary} 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, ${colors.primary} 0%, transparent 50%)`,
          backdropFilter: 'blur(0.5px)'
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-accent mb-4">Projects</h2>
            <p className="text-gray-300 text-lg">Loading 3-column project layout...</p>
          </div>
          <div className="h-96 bg-gray-800 animate-pulse rounded-2xl"></div>
        </div>
      </section>
    )
  }

  if (!selectedProject) {
  return (
    <section id="projects" className="relative min-h-screen flex flex-col justify-center px-4 overflow-hidden">
      {/* Subtle Background Overlay for Text Contrast */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle at 20% 50%, ${colors.primary} 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${colors.secondary} 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, ${colors.primary} 0%, transparent 50%)`,
          backdropFilter: 'blur(0.5px)'
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-accent mb-4">Projects</h2>
            <p className="text-gray-400">No projects available</p>
        </div>
      </div>
    </section>
  )
}

  return (
    <section id="projects" className="relative min-h-screen flex flex-col justify-center px-4 overflow-hidden">
      {/* Subtle Background Overlay for Text Contrast */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle at 20% 50%, ${colors.primary} 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${colors.secondary} 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, ${colors.primary} 0%, transparent 50%)`,
          backdropFilter: 'blur(0.5px)'
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-accent mb-4">Featured Projects</h2>
            {/* <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore my projects in this interactive 3-column layout. Select from the list, view details, and discover related work.
            </p> */}
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Column 1: Project List (No Heading) */}
          <motion.div
            className="lg:col-span-3 flex flex-col h-full max-h-[600px]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-3 overflow-y-auto p-3 flex-1">
              {projects.map((project, index) => (
                <motion.button
                  key={project.title}
                  onClick={() => setSelectedProject(project)}
                  className={`w-full text-left p-4 rounded-full transition-all duration-300 ${selectedProject.title === project.title
                      ? 'bg-white/30 border-4 border-white/50 shadow-inner scale-[0.95]'
                      : 'bg-white/10 border-2 border-white/20 hover:bg-white/15 hover:border-white/25'
                    }`}
                  style={{
                    backdropFilter: 'blur(12px) brightness(0.9) contrast(1.3)',
                    boxShadow: selectedProject.title === project.title
                      ? 'inset 0 3px 6px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 1px 4px rgba(0, 0, 0, 0.08)'
                      : '0 4px 16px rgba(0, 0, 0, 0.08)',
                    color: '#1e293b', // dark text
                    background: selectedProject.title === project.title
                      ? 'rgba(255, 255, 255, 0.35)' // even more opaque glassy background for selected
                      : 'rgba(255, 255, 255, 0.1)' // glassy background for normal
                  }}
                  whileHover={{ scale: selectedProject.title === project.title ? 0.97 : 1.02 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm truncate">{project.title}</h4>
                      <div className="flex items-center mt-1">
                        <span className="text-xs opacity-70">
                          {formatDate(project.updated_at)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Project Details (Merged Image + Info) */}
          <motion.div
            className="lg:col-span-6 flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Merged Project Image + Info Card */}
            <motion.div
              className="relative rounded-2xl overflow-hidden flex-1 flex flex-col"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px) brightness(0.9) contrast(1.3)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                color: '#1e293b' // dark text
              }}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
              }}
            >
              {/* Project Image (Top Half) */}
              <div className="relative h-48">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-200">
                    {selectedProject.stars && (
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        <span>{selectedProject.stars} stars</span>
                      </div>
                    )}
                    {selectedProject.forks && (
                      <div className="flex items-center gap-1">
                        <GitFork size={14} />
                        <span>{selectedProject.forks} forks</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(selectedProject.updated_at)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info (Bottom Half) */}
              <div className="p-6">
                <h4 className="text-lg font-bold mb-3">About This Project</h4>
                <p className=" leading-relaxed mb-4">{selectedProject.description}</p>

                {/* Highlights */}
                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">Key Features</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.highlights.slice(0, 4).map((highlight, i) => (
                        <span
                          key={i}
                          className="bg-indigo-600/30 text-indigo-300 px-3 py-1 rounded-full text-sm font-medium border border-indigo-600/40"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-4">
                  <h5 className="font-semibold mb-2">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="bg-gray-700/50 px-3 py-2 rounded-full border border-gray-600/50 flex items-center gap-2 hover:bg-gray-600/50 transition-colors"
                        title={tech}
                      >
                        {techIcons[tech] ? (
                          <Image
                            src={techIcons[tech]}
                            alt={tech}
                            width={16}
                            height={16}
                            className="w-4 h-4 object-contain"
                          />
                        ) : (
                          <div className="w-4 h-4 bg-gray-500 rounded-full flex items-center justify-center text-xs">⚡</div>
                        )}
                        <span className="text-gray-200 text-sm font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800/80 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700/80 transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-600/80 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-500/80 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Column 3: Suggestions & Stats */}
          <motion.div
            className="lg:col-span-3 flex flex-col h-full gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Tech Stats */}
            <motion.div
              className="p-6 rounded-2xl flex-1 flex flex-col"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px) brightness(0.9) contrast(1.3)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                color: '#1e293b' // dark text
              }}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
              }}
            >
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <TrendingUp size={18} />
                Tech Stack
              </h4>
              <div className="space-y-3">
                {getTechStats().map(([tech, count]) => (
                  <div key={tech} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{tech}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-500 rounded-full"
                          style={{ width: `${(count / projects.length) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>



            {/* Project Stats */}
            <motion.div
              className="p-6 rounded-2xl flex-1 flex flex-col"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px) brightness(0.9) contrast(1.3)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                color: '#1e293b' // dark text
              }}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
              }}
            >
              <h4 className="text-lg font-bold mb-4">Project Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Projects</span>
                  <span className="font-bold text-indigo-400">{projects.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Stars</span>
                  <span className="font-bold text-yellow-400">
                    {projects.reduce((sum, p) => sum + (p.stars || 0), 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Languages</span>
                  <span className="font-bold text-green-400">
                    {new Set(projects.map(p => p.language).filter(Boolean)).size}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Last Updated</span>
                  <span className="font-bold text-blue-400 text-xs">
                    {formatDate(selectedProject.updated_at)}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ThreeColumnProjects
