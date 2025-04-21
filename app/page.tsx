import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  )
}
