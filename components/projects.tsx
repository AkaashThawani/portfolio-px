"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Campus Navigation Website",
      description:
        "Developed a robust campus navigation system for NJIT students and visitors using Angular and Django, incorporating customizable user profiles for streamlined navigation. Integrated filter functionalities that allow users to efficiently locate buildings, departments, and facilities across the campus. Designed an analytics system to track user interactions, uncover behavior patterns, and optimize services using insights from analytics tools.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Angular", "Django", "Analytics", "User Profiles"],
      github: "#",
      demo: "#",
    },
    {
      title: "HackerNews UI",
      description:
        "Redesigned the HackerNews interface using Angular components, directives, and services, applying Material Design principles to improve user engagement by 35%. Optimized the platform's responsiveness for mobile and desktop by implementing CSS frameworks like Tailwind. Enhanced interactivity and overall user experience by leveraging Angular 14's state management features.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Angular", "Material Design", "Tailwind CSS", "State Management"],
      github: "#",
      demo: "#",
    },
    {
      title: "UniTrade",
      description:
        "Developed a full-stack commodity trading platform with a microservices architecture for managing live and historic market data. Built a responsive React frontend styled with Tailwind CSS. Engineered a scalable backend using Node.js and Express.js, integrating PostgreSQL to manage product categories and attributes. Created REST APIs for seamless communication between frontend and backend.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Microservices"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gray-800 dark:bg-gray-200 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
