import Hero from "@/components/hero"
import Skills from "@/components/skills"
import ThreeColumnProjects from "@/components/three-column-projects"
import { BackgroundSwitcher } from "@/components/background-switcher"

export default function Home() {
  return (
    <main className="relative">
      <BackgroundSwitcher />
      <Hero />
      <Skills />
      <ThreeColumnProjects />
    </main>
  )
}
