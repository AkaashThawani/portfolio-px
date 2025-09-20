import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <Skills />
      <Projects />
    </div>
  )
}
