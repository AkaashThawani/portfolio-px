import ThreeColumnProjects from "@/components/three-column-projects"
import { BackgroundSwitcher } from "@/components/background-switcher"

export default function ProjectsPage() {
  return (
    <main className="relative">
      <BackgroundSwitcher />
      <ThreeColumnProjects />
    </main>
  )
}
