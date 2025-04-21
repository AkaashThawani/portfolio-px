"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsLoaded(true)
    }
  }, [inView])

  const projects = [
    {
      title: "Campus Navigation Website",
      description: "Interactive campus navigation system for NJIT with customizable user profiles and analytics.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Angular", "Django", "Analytics", "User Profiles"],
      github: "#",
      demo: "#",
      highlights: ["Customizable user profiles", "Building & facility filters", "User behavior analytics"],
    },
    {
      title: "HackerNews UI",
      description: "Redesigned HackerNews interface with improved UX and responsive design.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Angular", "Material Design", "Tailwind CSS"],
      github: "#",
      demo: "#",
      highlights: ["35% increase in user engagement", "Responsive mobile design", "State management with Angular 14"],
    },
    {
      title: "UniTrade",
      description: "Full-stack commodity trading platform with microservices architecture.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "PostgreSQL", "Microservices"],
      github: "#",
      demo: "#",
      highlights: ["Live market data integration", "Responsive Tailwind UI", "RESTful API architecture"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-opacity duration-700 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gray-800 dark:bg-gray-200 mx-auto"></div>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ease-in-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative h-64 sm:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                          <span className="mr-2 text-gray-500 dark:text-gray-400">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" asChild>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
