"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Software Development Engineer",
      company: "Reliance Jio",
      location: "Navi Mumbai, India",
      period: "Jul 2021 - Aug 2023",
      responsibilities: [
        "Created scalable Angular applications, integrating pipes, routing, data binding, and services; ensured consistent performance for 10,000+ daily active users; accelerated application loading times by 20%",
        "Maximized user engagement by ensuring cross-platform compatibility and responsive design across 5+ screen sizes, incorporating technologies like HTML/CSS, JavaScript, and Angular to cater to a diverse range of 3+ screen sizes",
        "Integrated data sources through seamless integration of multiple REST APIs, resulting in a 40% boost in real-time information availability across applications",
        "Documented reusable components, including UI components, with Storybook to streamline onboarding processes, reducing new developer contribution time by up to 50%",
        "Maintained a 95% accuracy and reliability rate for all functionalities through comprehensive testing procedures",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gray-800 dark:bg-gray-200 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="overflow-hidden border-l-4 border-gray-800 dark:border-gray-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300">{exp.company}</p>
                      <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0">
                      <Calendar className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                      <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mt-4">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex">
                        <span className="mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
