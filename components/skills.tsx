// Redesigned Skills section with original tech icons
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useTheme } from "./background-switcher"



const Skills = () => {
  const { currentTheme } = useTheme()

  // Get seasonal gradient colors for section background (using CSS variables with proper rgba syntax)
  const getGradientColors = () => {
    switch (currentTheme) {
      case 'rain':
        return {
          primary: 'rgba(var(--hero-rain-primary-rgb), 0.2)',
          secondary: 'rgba(var(--hero-rain-secondary-rgb), 0.15)'
        }
      case 'sunlight':
        return {
          primary: 'rgba(var(--hero-sunlight-primary-rgb), 0.2)',
          secondary: 'rgba(var(--hero-sunlight-secondary-rgb), 0.15)'
        }
      case 'flowerfall':
        return {
          primary: 'rgba(var(--hero-autumn-primary-rgb), 0.2)',
          secondary: 'rgba(var(--hero-autumn-secondary-rgb), 0.15)'
        }
      default: // snowfall
        return {
          primary: 'rgba(var(--hero-snowfall-primary-rgb), 0.2)',
          secondary: 'rgba(var(--hero-snowfall-secondary-rgb), 0.15)'
        }
    }
  }

  const gradientColors = getGradientColors()

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'from-green-400 to-green-600'
      case 'Advanced':
        return 'from-blue-400 to-blue-600'
      case 'Intermediate':
        return 'from-yellow-400 to-yellow-600'
      default:
        return 'from-gray-400 to-gray-600'
    }
  }

  return (
    <section id="skills" className="relative min-h-screen flex flex-col justify-center px-4 overflow-hidden">
      {/* Subtle Background Overlay for Text Contrast */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(135deg, ${gradientColors.primary}, ${gradientColors.secondary})`,
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
          {/* <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6"
              style={{ color: `#1e293b` }}>
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
             style={{ color: `#1e293b` }}>
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p> */}
        </motion.div>

        {/* Skills & Experience Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Skills */}
            <div className="space-y-6">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold" style={{ color: `#1e293b` }}>Skills & Technologies</h3>
              </motion.div>

              {/* Category Grid */}
              <div className="grid grid-cols-1 gap-4">
            {/* Frontend Category */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="p-6 rounded-2xl"
                style={{
                  background: 'white',
                  backdropFilter: 'blur(12px) brightness(0.9) contrast(1.3)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 white',
                  color: `#1e293b`,
                  transition: 'all 0.5s ease'
                }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">💻</span>
                  <h4 className="font-bold text-xl">Frontend Development</h4>
                </div>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: "JavaScript", icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
                    { name: "TypeScript", icon: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" },
                    { name: "React", icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
                    { name: "Next.js", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
                    { name: "Angular", icon: "https://www.vectorlogo.zone/logos/angular/angular-icon.svg" },
                    { name: "HTML5", icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" },
                    { name: "CSS", icon: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" },
                    { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" }
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill.icon ? (
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain filter brightness-110"
                        />
                      ) : (
                        <div className="text-lg">🌐</div>
                      )}
                      <span className="text-xs font-medium text-center" style={{ color: `#1e293b` }}>
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Backend Category */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="p-6 rounded-2xl"
                style={{
                  background: 'white',
                  backdropFilter: 'blur(12px) brightness(0.9) contrast(1.3)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 white',
                  color: `#1e293b`,
                  transition: 'all 0.5s ease'
                }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">⚙️</span>
                  <h4 className="font-bold text-xl">Backend Development</h4>
                </div>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: "Node.js", icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
                    { name: "Python", icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
                    { name: "Django", icon: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" },
                    { name: "PostgreSQL", icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
                    { name: "MySQL", icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" }
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill.icon ? (
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain filter brightness-110"
                        />
                      ) : (
                        <div className="text-lg">🌐</div>
                      )}
                      <span className="text-xs font-medium text-center" style={{ color: `#1e293b` }}>
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Tools & Technologies Category */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="p-6 rounded-2xl"
                style={{
                  background: 'white',
                  backdropFilter: 'blur(12px) brightness(0.9) contrast(1.3)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 white',
                  color: `#1e293b`,
                  transition: 'all 0.5s ease'
                }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🛠️</span>
                  <h4 className="font-bold text-xl">Tools & Technologies</h4>
                </div>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
                    { name: "REST APIs", icon: "" }
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill.icon ? (
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain filter brightness-110"
                        />
                      ) : (
                        <div className="text-lg">🌐</div>
                      )}
                      <span className="text-xs font-medium text-center" style={{ color: `#1e293b` }}>
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
              </div>
            </div>

            {/* Right Column - Experience & Education */}
            <div className="space-y-8">
              {/* Experience Section */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-3xl font-bold" style={{ color: `#1e293b` }}>Experience</h3>
                <motion.div
                  className="p-6 rounded-2xl"
                  style={{
                    background: 'white',
                    backdropFilter: 'blur(12px) brightness(0.9) contrast(1.3)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 white',
                    color: `#1e293b`,
                    transition: 'all 0.5s ease'
                  }}
                  whileHover={{
                    scale: 1.01,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <h4 className="font-bold text-lg">Software Development Engineer</h4>
                      <p className="text-sm" style={{ color: `#1e293b` }}>Reliance Jio • Jul 2021 - Aug 2023</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm" style={{ color: `#1e293b` }}>
                    <li>• Created scalable Angular applications for 10,000+ daily active users</li>
                    <li>• Improved application loading times by 20%</li>
                    <li>• Integrated multiple REST APIs, boosting real-time information by 40%</li>
                    <li>• Documented UI components with Storybook, reducing onboarding time by 50%</li>
                  </ul>
                </motion.div>
              </motion.div>

              {/* Education Section */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-3xl font-bold" style={{ color: `#1e293b` }}>Education</h3>

                {/* MS Degree */}
                <motion.div
                  className="p-6 rounded-2xl mb-4"
                  style={{
                    background: 'white',
                    backdropFilter: 'blur(12px) brightness(0.9) contrast(1.3)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 white',
                    color: `#1e293b`,
                    transition: 'all 0.5s ease'
                  }}
                  whileHover={{
                    scale: 1.01,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <h4 className="font-bold text-lg">Masters in Computer Science</h4>
                      <p className="text-sm" style={{ color: `#1e293b` }}>New Jersey Institute of Technology • Jan 2023 - May 2025</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3" style={{ color: `#1e293b` }}>Focus: Machine Learning & Web Development</p>
                  <div className="flex flex-wrap gap-2">
                    {["Machine Learning", "AI", "Data Structures", "Web Dev", "Databases"].map((course, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                        {course}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* BS Degree */}
                <motion.div
                  className="p-6 rounded-2xl"
                  style={{
                    background: 'white',
                    backdropFilter: 'blur(12px) brightness(0.9) contrast(1.3)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 white',
                    color: `#1e293b`,
                    transition: 'all 0.5s ease'
                  }}
                  whileHover={{
                    scale: 1.01,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <h4 className="font-bold text-lg">Bachelor's in Computer Science</h4>
                      <p className="text-sm" style={{ color: `#1e293b` }}>Vellore Institute of Technology • Jun 2017 - Jun 2021</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3" style={{ color: `#1e293b` }}>Focus: Software Development & Computer Architecture</p>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures", "Cryptography", "Software Dev", "Architecture", "HCI"].map((course, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                        {course}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
