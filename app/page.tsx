import Hero from "@/components/hero"
import Skills from "@/components/skills"
// import About from "@/components/about"
// import Experience from "@/components/experience"
// import Education from "@/components/education"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <Skills />
      {/* Experience and Education sections commented out as requested */}
      {/* <Experience /> */}
      {/* <Education /> */}
      <Projects />
      <Contact />
    </div>
  )
}
