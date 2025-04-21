import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Akaash Thawani</h2>
            <p className="text-gray-400 mt-2">Software Development Engineer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/akaash-thawani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:akaashthawani13@yahoo.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-gray-400 text-sm">&copy; {currentYear} Akaash Thawani. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
