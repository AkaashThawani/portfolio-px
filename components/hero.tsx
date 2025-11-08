"use client"

import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { Linkedin, Mail, Github } from "lucide-react"
import { useTheme } from "./background-switcher"
import { useEffect, useRef, useState } from "react"

const Hero = () => {
  const { currentTheme } = useTheme()

  // Simple state for basic functionality
  const [displayedName] = useState("Akaash Thawani")
  const [displayedTitle] = useState("Full-Stack Software Engineer")

  // Get seasonal colors for the hero section - using CSS variables with proper rgba syntax
  const getSeasonalColors = () => {
    switch (currentTheme) {
      case 'rain':
        return {
          primary: 'rgba(var(--hero-rain-primary-rgb), 0.2)',
          secondary: 'rgba(var(--hero-rain-secondary-rgb), 0.15)',
          text: 'var(--nav-rain-text)',
          textLight: 'var(--nav-rain-text)'
        }
      case 'sunlight':
        return {
          primary: 'rgba(var(--hero-sunlight-primary-rgb), 0.2)',
          secondary: 'rgba(var(--hero-sunlight-secondary-rgb), 0.15)',
          text: 'var(--nav-sunlight-text)',
          textLight: 'var(--nav-sunlight-text-light)'
        }
      case 'flowerfall':
        return {
          primary: 'rgba(var(--hero-autumn-primary-rgb), 0.2)',
          secondary: 'rgba(var(--hero-autumn-secondary-rgb), 0.15)',
          text: 'var(--nav-autumn-text)',
          textLight: 'var(--nav-autumn-text-light)'
        }
      default: // snowfall
        return {
          primary: 'rgba(var(--hero-snowfall-primary-rgb), 0.2)',
          secondary: 'rgba(var(--hero-snowfall-secondary-rgb), 0.15)',
          text: 'var(--nav-snowfall-text)',
          textLight: 'var(--nav-snowfall-text-light)'
        }
    }
  }

  const colors = getSeasonalColors()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const greetingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: index * 0.2 + 1.5,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 20% 50%, ${colors.primary} 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${colors.secondary} 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, ${colors.primary} 0%, transparent 50%)`,
          backdropFilter: 'blur(0.5px)'
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[60vh]">
          {/* Left Column - Name and Description */}
          <motion.div
            className="text-left space-y-8"
            variants={itemVariants}
          >
            {/* Greeting */}
            <motion.div
              className="space-y-2"
              variants={itemVariants}
            >
              <motion.p
                className="text-lg md:text-xl font-medium"
                style={{ color: colors.textLight }}
                variants={greetingVariants}
              >
                Hello, I'm
              </motion.p>

              {/* Name with Typing Effect */}
              <motion.h1
                className="text-3xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight"
                style={{ color: colors.text }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {displayedName}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="ml-2"
                >
                  |
                </motion.span>
              </motion.h1>

              {/* Title with Typing Effect */}
              <motion.h2
                className="text-xl md:text-2xl lg:text-3xl font-semibold"
                style={{ color: colors.textLight }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {displayedTitle}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </motion.h2>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl max-w-2xl leading-relaxed"
              style={{ color: colors.textLight }}
              variants={itemVariants}
            >
              Full-Stack Software Engineer with 2+ years of experience delivering production-grade backend APIs, scalable web applications, and AI-driven automation. Experienced in building reusable modules, Node.js/React apps, containerized deployments, and CI/CD pipelines. Passionate about optimizing real-world workflows, mentoring peers, and owning end-to-end feature delivery.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('projects')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View My Work
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Social Links and Visual Elements */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-8"
            variants={itemVariants}
          >
            {/* Social Links */}
            <motion.div
              className="flex space-x-6"
              variants={containerVariants}
            >
              {[
                { Icon: Github, href: "https://github.com/AkaashThawani", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/in/akaash-thawani", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:akaash.thawani@gmail.com", label: "Email" }
              ].map(({ Icon, href, label }, index) => (
                <motion.div
                  key={label}
                  custom={index}
                  variants={socialVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated Profile Visual */}
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <motion.div
                className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 40px rgba(147, 51, 234, 0.4)",
                    "0 0 20px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div
                  className="text-6xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👨‍💻
                </motion.div>
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⚛️
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                animate={{
                  x: [0, -5, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🤖
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="flex flex-col items-center space-y-2"
              variants={itemVariants}
            >
              <motion.p
                className="text-sm font-medium"
                style={{ color: colors.textLight }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Scroll to explore
              </motion.p>
              <motion.div
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
