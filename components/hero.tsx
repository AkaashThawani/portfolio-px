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
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Akaash Thawani
          </h1>

          <h2
            className={`text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Software Development Engineer
          </h2>

          <p
            className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Front-End Engineer with expertise in Angular, React, and Next.js. Currently pursuing a Master's in Computer
            Science at NJIT.
          </p>

          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button asChild size="lg" className="animate-pulse">
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>

          <div
            className={`flex justify-center space-x-6 mb-12 transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transform hover:scale-110 transition-all"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/akaash-thawani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transform hover:scale-110 transition-all"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:akaashthawani13@yahoo.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transform hover:scale-110 transition-all"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        {/* About Me section merged into Hero */}
        <div
          className={`max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">About Me</h2>
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
        </div>

        <div
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="animate-bounce">
            <Link href="#skills">
              <ArrowDown className="h-8 w-8 text-gray-600 dark:text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
