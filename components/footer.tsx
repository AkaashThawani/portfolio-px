// Redesigned Footer with Premium Glassmorphism Styling

"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { useTheme } from "./background-switcher"

const Footer = () => {
  const { currentTheme } = useTheme()
  const currentYear = new Date().getFullYear()

  // Get gradient colors for section background (using CSS variables)
  const getGradientColors = () => {
    switch (currentTheme) {
      case 'rain':
        return {
          primary: 'var(--hero-rain-primary)',
          secondary: 'var(--hero-rain-secondary)'
        }
      case 'sunlight':
        return {
          primary: 'var(--hero-sunlight-primary)',
          secondary: 'var(--hero-sunlight-secondary)'
        }
      case 'flowerfall':
        return {
          primary: 'var(--hero-autumn-primary)',
          secondary: 'var(--hero-autumn-secondary)'
        }
      default: // snowfall
        return {
          primary: 'var(--hero-snowfall-primary)',
          secondary: 'var(--hero-snowfall-secondary)'
        }
    }
  }

  const gradientColors = getGradientColors()

  // Footer uses gradient backgrounds like other sections
  const getSeasonalColors = () => {
    switch (currentTheme) {
      case 'rain':
        return {
          background: `linear-gradient(135deg, ${gradientColors.primary}10, ${gradientColors.secondary}08)`,
          border: 'var(--nav-rain-border)',
          color: 'var(--nav-rain-text)'
        }
      case 'sunlight':
        return {
          background: `linear-gradient(135deg, ${gradientColors.primary}10, ${gradientColors.secondary}08)`,
          border: 'var(--nav-sunlight-border)',
          color: 'var(--nav-sunlight-text)'
        }
      case 'flowerfall':
        return {
          background: `linear-gradient(135deg, ${gradientColors.primary}10, ${gradientColors.secondary}08)`,
          border: 'var(--nav-autumn-border)',
          color: 'var(--nav-autumn-text)'
        }
      default:
        return {
          background: `linear-gradient(135deg, ${gradientColors.primary}10, ${gradientColors.secondary}08)`,
          border: 'var(--nav-snowfall-border)',
          color: 'var(--nav-snowfall-text)'
        }
    }
  }

  const colors = getSeasonalColors()

  // Frosty/glassy effect for all themes - enhanced glassmorphism
  const getFrostyStyles = () => {
    const baseFrosty = {
      backdropFilter: 'blur(12px) brightness(1.1) contrast(1.1) saturate(1.2)',
      WebkitBackdropFilter: 'blur(12px) brightness(1.1) contrast(1.1) saturate(1.2)',
      boxShadow: `
        0 8px 32px rgba(0, 0, 0, 0.12),
        0 4px 16px rgba(0, 0, 0, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.15),
        0 0 20px rgba(255, 255, 255, 0.05)
      `
    }

    // Special enhanced frosty effect for snowfall theme
    if (currentTheme === 'snowfall') {
      return {
        ...baseFrosty,
        background: 'rgba(255, 255, 255, 0.08) !important',
        border: '1px solid rgba(173, 216, 230, 0.25)',
        boxShadow: `
          0 8px 32px rgba(31, 38, 135, 0.15),
          0 4px 16px rgba(31, 38, 135, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.1),
          0 0 25px rgba(173, 216, 230, 0.1)
        `
      }
    }

    return baseFrosty
  }

  const frostyStyles = getFrostyStyles()

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 pb-6 pt-2">
      {/* Floating pill-shaped container - Gradient background */}
      <motion.div
        className="max-w-4xl mx-auto rounded-full px-8 py-4 mx-6"
        style={{
          ...colors,
          ...frostyStyles,
          backdropFilter: 'blur(12px) brightness(0.9) contrast(1.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          transition: 'all 0.5s ease'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
        }}
      >
        <div className="flex items-center justify-center gap-8">
          {/* Social Links - Same as hero section */}
          <motion.div
            className="flex gap-2 bg-white/20 backdrop-blur-md rounded-full p-2 border border-white/30 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={() => window.open('https://github.com/AkaashThawani', '_blank')}
              className="px-4 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-110 text-white/80 hover:text-gray-800 hover:bg-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.button>

            <motion.button
              onClick={() => window.open('https://linkedin.com/in/akaash-thawani', '_blank')}
              className="px-4 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-110 text-white/80 hover:text-gray-800 hover:bg-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
            </motion.button>

            <motion.button
              onClick={() => window.open('mailto:akaashthawani13@yahoo.com', '_blank')}
              className="px-4 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-110 text-white/80 hover:text-gray-800 hover:bg-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
            </motion.button>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-sm font-medium"
            style={{ color: `var(--nav-${currentTheme}-text)` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            &copy; {currentYear} Akaash Thawani. All rights reserved.
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
