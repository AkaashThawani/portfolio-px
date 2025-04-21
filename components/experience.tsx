"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

const Experience = () => {
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

  const experiences = [
    {
      title: "Software Development Engineer",
      company: "Reliance Jio",
      location: "Navi Mumbai, India",
      period: "Jul 2021 - Aug 2023",
      achievements: [
        "Created scalable Angular applications for 10,000+ daily active users",
        "Improved application loading times by 20%",
        "Ensured cross-platform compatibility across 5+ screen sizes",
        "Integrated multiple REST APIs, boosting real-time information by 40%",
        "Documented UI components with Storybook, reducing onboarding time by 50%",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-opacity duration-700 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gray-800 dark:bg-gray-200 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-in-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="overflow-hidden border-l-4 border-gray-800 dark:border-gray-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-xl text-gray-700 dark:text-gray-300">{exp.company}</p>
                      <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <Calendar className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">{exp.period}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gray-500 dark:text-gray-400 mr-2 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
