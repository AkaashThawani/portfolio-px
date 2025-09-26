// Redesigned Navbar for minimal, elegant portfolio

"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="font-bold text-2xl hero-title" style={{fontSize: '1.5rem'}}>
          Akaash
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-semibold text-gray-400 dark:text-gray-200 hover:text-accent dark:hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center gap-3">
          <button
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-accent dark:hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
