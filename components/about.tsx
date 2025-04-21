"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gray-800 dark:bg-gray-200 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          <p className="mb-6">
            Front-End Engineer with over two years of experience developing responsive web applications. Currently
            pursuing a Master's in Computer Science at NJIT, with a B.Tech in Computer Science and Engineering.
          </p>
          <p className="mb-6">
            Proficient in Python, JavaScript, Angular, and Django, with a focus on building scalable and efficient web
            solutions. Skilled in front-end architecture, UI/UX optimization, and integrating APIs to enhance
            application performance.
          </p>
          <p>
            Seeking opportunities to apply my expertise in developing high-quality software and contributing to
            innovative projects that make a positive impact.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
