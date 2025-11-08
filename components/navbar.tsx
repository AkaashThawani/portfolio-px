// Floating Pill Navbar with Integrated Theme Switcher

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "./background-switcher"

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
]

const Navbar = () => {
  const { currentTheme, setCurrentTheme } = useTheme()
  console.log('Navbar currentTheme:', currentTheme)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [hoveredSection, setHoveredSection] = useState("")

  // Get seasonal navbar colors
  const getSeasonalColors = () => {
    switch (currentTheme) {
      case 'rain':
        return {
          background: 'var(--nav-rain-bg)',
          border: 'var(--nav-rain-border)',
          color: 'var(--nav-rain-text)'
        }
      case 'sunlight':
        return {
          background: 'var(--nav-sunlight-bg)',
          border: 'var(--nav-sunlight-border)',
          color: 'var(--nav-sunlight-text)'
        }
      case 'flowerfall':
        return {
          background: 'var(--nav-autumn-bg)',
          border: 'var(--nav-autumn-border)',
          color: 'var(--nav-autumn-text)'
        }
      default:
        return {
          background: 'var(--nav-snowfall-bg)',
          border: 'var(--nav-snowfall-border)',
          color: 'var(--nav-snowfall-text)'
        }
    }
  }

  const colors = getSeasonalColors()

  // Special frosty effect for snowfall theme
  const getFrostyStyles = () => {
    if (currentTheme === 'snowfall') {
      return {
        background: 'transparent !important',
        backdropFilter: 'blur(0px) brightness(1.1) contrast(1.1)',
        border: '1px solid rgba(173, 216, 230, 0.15)',
        boxShadow: `
          0 4px 16px rgba(31, 38, 135, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.05),
          0 0 10px rgba(173, 216, 230, 0.05)
        `,
        WebkitBackdropFilter: 'blur(2px) brightness(1.1) contrast(1.1)'
      }
    }
    return {}
  }

  const frostyStyles = getFrostyStyles()

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Floating pill-shaped container */}
      <motion.div
        className="rounded-full px-16 py-5 mx-6"
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
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <div className="flex items-center justify-center gap-6">
          {/* Logo */}
          <motion.div
            className="font-bold text-xl px-4 py-2 rounded-full text-primary cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Akaash
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById(link.href.substring(1))
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className={`relative z-10 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${activeSection === link.href.substring(1)
                    ? "text-primary bg-gray-100"
                    : "text-text-light hover:text-primary hover:bg-gray-50"
                    }`}
                >
                  {link.name}
                </Link>

                {/* Hover shadow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0"
                  whileHover={{
                    opacity: 1,
                    boxShadow: "0 6px 20px rgba(71, 85, 105, 0.12)",
                    y: 1
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Time indicator */}
          <motion.div
            className="hidden md:flex items-center gap-3 px-6 border-x border-gray-200"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-3 h-3 rounded-full bg-primary"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-sm font-mono text-text-light">
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </motion.div>

          {/* Theme Switcher */}
          <div className="flex gap-2 bg-white/20 backdrop-blur-md rounded-full p-2 border border-white/30 shadow-lg">
            {Object.entries({
              snowfall: '❄️',
              rain: '🌧️',
              sunlight: '☀️',
              flowerfall: '🍂'
            }).map(([key, emoji]) => (
              <motion.button
                key={key}
                onClick={() => {
                  console.log('Switching to:', key)
                  setCurrentTheme(key as any)
                }}
                className={`px-4 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-110 ${currentTheme === key
                  ? 'bg-white/30 text-blue-600 shadow-md scale-110'
                  : 'text-white/80 hover:text-white hover:bg-white/20'
                  }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {emoji}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              className="p-3 rounded-full hover:bg-gray-50 text-text transition-colors"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden mt-4 bg-white/95 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl px-6 py-4"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${activeSection === link.href.substring(1)
                    ? "text-white bg-primary shadow-md"
                    : "text-text hover:text-primary hover:bg-gray-50"
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
