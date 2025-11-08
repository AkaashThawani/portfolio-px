// Redesigned Skills section with original tech icons
"use client"

import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { useTheme } from "./background-switcher"
import { useEffect, useRef, useState } from "react"



const Skills = () => {
  const { currentTheme } = useTheme()

  // Animation refs and controls
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const controls = useAnimation()

  // Typing effect state
  const [displayedTitle, setDisplayedTitle] = useState("")
  const fullTitle = "Skills & Technologies"

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")

      // Typing effect for title
      let i = 0
      const typingInterval = setInterval(() => {
        if (i < fullTitle.length) {
          setDisplayedTitle(fullTitle.slice(0, i + 1))
          i++
        } else {
          clearInterval(typingInterval)
        }
      }, 100)
    }
  }, [isInView, controls])

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  return (
    <section ref={sectionRef} id="skills" className="relative h-min-screen flex flex-col justify-center px-4 overflow-hidden">
      {/* Subtle Background Overlay for Text Contrast */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(135deg, ${gradientColors.primary}, ${gradientColors.secondary})`,
          backdropFilter: 'blur(0.5px)'
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-8xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
       
        {/* Skills & Experience Layout */}
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* Left Column - Skills */}
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <motion.div
                className="text-center mb-5"
                variants={itemVariants}
              >
                <motion.h3
                  className="text-xl font-bold"
                  style={{ color: `#1e293b` }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Skills & Technologies
                </motion.h3>
              </motion.div>

              {/* Single Skills Card */}
              <motion.div
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px) brightness(0.9) contrast(1.3)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  color: `#1e293b`,
                  transition: 'all 0.5s ease'
                }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
                }}
              >
                {/* Languages & Frameworks Category */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">💻</span>
                    <h5 className="font-bold text-xl">Languages & Frameworks</h5>
                  </div>
                  <div className="flex flex-wrap ">
                    {[
                      { name: "Python", icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
                      { name: "TypeScript", icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
                      { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" },
                      { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
                      { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
                      { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
                      { name: "Angular", icon: "https://cdn.worldvectorlogo.com/logos/angular-3.svg" },
                      { name: "Flask", icon: "https://cdn.worldvectorlogo.com/logos/flask.svg" },
                      { name: "REST API", icon: "" },
                      { name: "Tailwind", icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" }
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        title={skill.name}
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
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* AI & Backend Tools Category */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🤖</span>
                    <h5 className="font-bold text-xl">AI & Backend Tools</h5>
                  </div>
                  <div className="flex flex-wrap ">
                    {[
                      { name: "LLM APIs", icon: "https://cdn.worldvectorlogo.com/logos/gemini-ai.svg" },
                      // { name: "RAG", icon: "/logos/rag.svg" },
                      { name: "llamaindex", icon: "/logos/llamaindex.svg" },
                      { name: "langchain", icon: "/logos/langchain.svg" },
                      { name: "langraph", icon: "/logos/langraph.svg" },
                      // { name: "fine tuning", icon: "/logos/fine-tuning.svg" },
                      { name: "PostgreSQL", icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
                      { name: "SQL", icon: "https://cdn.worldvectorlogo.com/logos/mysql-2.svg" },
                      { name: "nsjail", icon: "/logos/nsjail.svg" },
                      { name: "FastAPI", icon: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" },
                      { name: "WebSocket", icon: "https://cdn.worldvectorlogo.com/logos/websocket.svg" },
                      { name: "Supabase", icon: "/logos/supabase-logo-icon.svg" },
                      { name: "OAuth", icon: "https://cdn.worldvectorlogo.com/logos/oauth.svg" }
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        title={skill.name}
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
                          <div className="text-lg">⚙️</div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* DevOps & Deployment Category */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🚀</span>
                    <h5 className="font-bold text-xl">DevOps & Deployment</h5>
                  </div>
                  <div className="flex flex-wrap ">
                    {[
                      { name: "Docker", icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
                      { name: "Google Cloud Run", icon: "" },
                      { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
                      { name: "CI/CD", icon: "" },
                      { name: "AWS", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
                      { name: "Azure", icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
                      { name: "Terraform", icon: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" },
                      { name: "Kubernetes", icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" }
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        title={skill.name}
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
                          <div className="text-lg">🛠️</div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Testing & Collaboration Category */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🧪</span>
                    <h5 className="font-bold text-xl">Testing & Collaboration</h5>
                  </div>
                  <div className="flex flex-wrap ">
                    {[
                      // { name: "Unit & Integration Testing", icon: "" },
                      { name: "Git", icon: "https://cdn.worldvectorlogo.com/logos/git.svg" },
                      { name: "Postman", icon: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
                      { name: "Jira", icon: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },
                      { name: "VS Code", icon: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
                      { name: "PyCharm", icon: "https://cdn.worldvectorlogo.com/logos/pycharm.svg" },
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        title={skill.name}
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
                          <div className="text-lg">🔧</div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Experience & Education */}
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <motion.div
                className="text-center mb-5"
                variants={itemVariants}
              >
                <motion.h3
                  className="text-xl font-bold"
                  style={{ color: `#1e293b` }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Experience & Education
                </motion.h3>
              </motion.div>

              {/* Single Experience & Education Card */}
              <motion.div
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px) brightness(0.9) contrast(1.3)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  color: `#1e293b`,
                  transition: 'all 0.5s ease'
                }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
                }}
              >
                {/* Experience Section */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">⚡</span>
                    <h5 className="font-bold text-xl">Experience</h5>
                  </div>
                  <div className="ml-11">
                    <div className="mb-4">
                      <h5 className="font-bold text-lg">Software Development Engineer</h5>
                      <p className="text-sm mb-3" style={{ color: `#1e293b` }}>Reliance Jio • Jul 2021 - Aug 2023</p>
                      <ul className="space-y-2 text-sm" style={{ color: `#1e293b` }}>
                        <li>• Created scalable Angular applications for 10,000+ daily active users</li>
                        <li>• Improved application loading times by 20%</li>
                        <li>• Integrated multiple REST APIs, boosting real-time information by 40%</li>
                        <li>• Documented UI components with Storybook, reducing onboarding time by 50%</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🎓</span>
                    <h5 className="font-bold text-xl">Education</h5>
                  </div>

                  {/* MS Degree */}
                  <div className="ml-11 mb-6">
                    <h5 className="font-bold text-lg mb-2">Masters in Computer Science</h5>
                    <p className="text-sm mb-3" style={{ color: `#1e293b` }}>New Jersey Institute of Technology • Jan 2023 - May 2025</p>
                    <p className="text-sm mb-3" style={{ color: `#1e293b` }}>Focus: Machine Learning & Web Development</p>
                    <div className="flex flex-wrap gap-2">
                      {["Machine Learning", "AI", "Data Structures", "Web Dev", "Databases"].map((course, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BS Degree */}
                  <div className="ml-11">
                    <h5 className="font-bold text-lg mb-2">Bachelor's in Computer Science</h5>
                    <p className="text-sm mb-3" style={{ color: `#1e293b` }}>Vellore Institute of Technology • Jun 2017 - Jun 2021</p>
                    <p className="text-sm mb-3" style={{ color: `#1e293b` }}>Focus: Software Development & Computer Architecture</p>
                    <div className="flex flex-wrap gap-2">
                      {["Data Structures", "Cryptography", "Software Dev", "Architecture", "HCI"].map((course, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
