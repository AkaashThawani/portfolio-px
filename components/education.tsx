"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, GraduationCap } from "lucide-react"

const Education = () => {
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

  const education = [
    {
      degree: "Masters in Computer Science",
      institution: "New Jersey Institute of Technology",
      location: "Newark, NJ",
      period: "Jan 2023 - May 2025",
      focus: "Machine Learning & Web Development",
      courses: [
        "Machine Learning",
        "Artificial Intelligence",
        "Advanced Data Structures",
        "Web Development",
        "Database Management Systems",
        "Data Visualization",
      ],
    },
    {
      degree: "Bachelor's in Computer Science and Engineering",
      institution: "Vellore Institute of Technology",
      location: "Vellore, India",
      period: "Jun 2017 - Jun 2021",
      focus: "Software Development & Computer Architecture",
      courses: [
        "Data Structures",
        "Cryptography",
        "Software Development",
        "Computer Architecture",
        "Image Processing",
        "Human Computer Interaction",
      ],
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-opacity duration-700 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-gray-800 dark:bg-gray-200 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-in-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="overflow-hidden border-l-4 border-gray-800 dark:border-gray-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div className="flex items-start">
                      <div className="hidden sm:block mr-4">
                        <div className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <GraduationCap className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300">{edu.institution}</p>
                        <p className="text-gray-600 dark:text-gray-400">{edu.location}</p>
                        <p className="text-gray-700 dark:text-gray-300 mt-2 font-medium">Focus: {edu.focus}</p>
                      </div>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <Calendar className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">{edu.period}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
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

export default Education
