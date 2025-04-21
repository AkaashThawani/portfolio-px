"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Delay setting isLoaded to true to ensure smooth animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            Akaash Thawani
          </h1>

          <h2
            className={`text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6 transition-opacity duration-700 delay-100 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            Software Development Engineer
          </h2>

          <p
            className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 transition-opacity duration-700 delay-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            Front-End Engineer with expertise in Angular, React, and Next.js. Currently pursuing a Master's in Computer
            Science at NJIT.
          </p>

          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-opacity duration-700 delay-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <Button asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>

          <div
            className={`flex justify-center space-x-6 mb-12 transition-opacity duration-700 delay-400 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/akaash-thawani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:akaashthawani13@yahoo.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-700 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="animate-bounce">
          <Link href="#about">
            <ArrowDown className="h-8 w-8 text-gray-600 dark:text-gray-400" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
