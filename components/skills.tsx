"use client"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Server, Layout, Terminal } from "lucide-react"
import TechIcon from "./tech-icon"
import { useEffect, useState } from "react"

const Skills = () => {
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
    <section id="skills" className="w-full py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gray-800 dark:bg-gray-200 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex justify-center">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">{category.title}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center group">
                        <div className="transform transition-transform duration-300 group-hover:scale-110">
                          <TechIcon name={skill.name} className="mb-2" />
                        </div>
                        <span className="text-sm text-gray-800 dark:text-gray-200">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
