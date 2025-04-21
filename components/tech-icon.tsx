import Image from "next/image"

type TechIconProps = {
  name: string
  className?: string
}

export default function TechIcon({ name, className = "" }: TechIconProps) {
  // Map of technology names to their icon URLs from simpleicons.org
  const iconMap: Record<string, string> = {
    JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
    TypeScript: "https://cdn.simpleicons.org/typescript/3178C6",
    React: "https://cdn.simpleicons.org/react/61DAFB",
    Angular: "https://cdn.simpleicons.org/angular/DD0031",
    "Next.js": "https://cdn.simpleicons.org/nextdotjs/000000/FFFFFF", // Light background for dark mode
    HTML: "https://cdn.simpleicons.org/html5/E34F26",
    CSS: "https://cdn.simpleicons.org/css3/1572B6",
    Tailwind: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
    Django: "https://cdn.simpleicons.org/django/092E20/FFFFFF", // Light background for dark mode
    Python: "https://cdn.simpleicons.org/python/3776AB",
    Java: "https://cdn.simpleicons.org/java/007396",
    MySQL: "https://cdn.simpleicons.org/mysql/4479A1",
    PostgreSQL: "https://cdn.simpleicons.org/postgresql/4169E1",
    Git: "https://cdn.simpleicons.org/git/F05032",
    GitHub: "https://cdn.simpleicons.org/github/181717/FFFFFF", // Light background for dark mode
  }

  const iconUrl = iconMap[name] || "/placeholder.svg"

  return (
    <div className={`relative w-12 h-12 ${className}`}>
      <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-700 opacity-20"></div>
      <Image src={iconUrl || "/placeholder.svg"} alt={name} fill className="object-contain p-1" />
    </div>
  )
}
