"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Layout, Terminal, GitBranch } from "lucide-react"

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="h-8 w-8 mb-4 text-gray-800 dark:text-gray-200" />,
      skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Angular", "React", "Next.js", "Tailwind"],
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8 mb-4 text-gray-800 dark:text-gray-200" />,
      skills: ["Node.js", "Django", "REST API", "Java", "Python"],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 mb-4 text-gray-800 dark:text-gray-200" />,
      skills: ["SQL", "MySQL", "PostgreSQL", "Database Management Systems"],
    },
    {
      title: "Programming",
      icon: <Code className="h-8 w-8 mb-4 text-gray-800 dark:text-gray-200" />,
      skills: ["Machine Learning", "Predictive Modeling", "Unit & Integration Testing", "Agile Methods"],
    },
    {
      title: "Tools",
      icon: <Terminal className="h-8 w-8 mb-4 text-gray-800 dark:text-gray-200" />,
      skills: ["Git", "Postman", "VS Code", "Eclipse", "PyCharm", "Visual Studio"],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-8 w-8 mb-4 text-gray-800 dark:text-gray-200" />,
      skills: ["Git", "GitHub", "Version Control"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
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
