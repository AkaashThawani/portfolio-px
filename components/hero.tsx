"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Mail, Github } from "lucide-react"
import { useTheme } from "./background-switcher"

const Hero = () => {
  const { currentTheme } = useTheme()

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

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Subtle Background Overlay for Text Contrast */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          backdropFilter: 'blur(0.5px)'
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-1 gap-16 items-center min-h-[60vh]">
          {/* Left Column - Name */}
          <motion.div
            className="text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text3xl md:text-5xl font-black tracking-tight"
             
            >
              Akaash Thawani
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl max-w-2lg leading-relaxed"
             
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              Full-Stack Software Engineer with 2+ years of experience delivering production-grade backend APIs, scalable web applications, and AI-driven automation. Experienced in building reusable modules, Node.js/React apps, containerized deployments, and CI/CD pipelines. Passionate about optimizing real-world workflows, mentoring peers, and owning end-to-end feature delivery.
            </motion.p>
          </motion.div>

         
        </div>





      </div>
    </section>
  )
}

export default Hero
