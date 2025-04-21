"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Server, Layout, Terminal } from "lucide-react"
import TechIcon from "./tech-icon"

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const techSkills = [
    {
      name: "JavaScript",
      category: "frontend",
    },
    {
      name: "TypeScript",
      category: "frontend",
    },
    {
      name: "React",
      category: "frontend",
    },
    {
      name: "Angular",
      category: "frontend",
    },
    {
      name: "Next.js",
      category: "frontend",
    },
    {
      name: "HTML",
      category: "frontend",
    },
    {
      name: "CSS",
      category: "frontend",
    },
    {
      name: "Tailwind",
      category: "frontend",
    },
    {
      name: "Node.js",
      category: "backend",
    },
    {
      name: "Django",
      category: "backend",
    },
    {
      name: "Python",
      category: "backend",
    },
    {
      name: "Java",
      category: "backend",
    },
    {
      name: "MySQL",
      category: "database",
    },
    {
      name: "PostgreSQL",
      category: "database",
    },
    {
      name: "Git",
      category: "tools",
    },
    {
      name: "GitHub",
      category: "tools",
    },
  ]

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="h-8 w-8 mb-4 text-gray-800 dark:text-gray-200" />,
      skills: techSkills.filter((skill) => skill.category === "frontend"),
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8 mb-4 text-gray-800 dark:text-gray-200" />,
      skills: techSkills.filter((skill) => skill.category === "backend"),
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 mb-4 text-gray-800 dark:text-gray-200" />,
      skills: techSkills.filter((skill) => skill.category === "database"),
    },
    {
      title: "Tools",
      icon: <Terminal className="h-8 w-8 mb-4 text-gray-800 dark:text-gray-200" />,
      skills: techSkills.filter((skill) => skill.category === "tools"),
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gray-800 dark:bg-gray-200 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">{category.title}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center">
                        <TechIcon name={skill.name} className="mb-2" />
                        <span className="text-sm text-gray-800 dark:text-gray-200">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
