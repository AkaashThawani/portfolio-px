// Redesigned Skills section with original tech icons

import Image from "next/image"

const skills = [
  {
    name: "JavaScript",
    level: "Expert",
    icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
  },
  {
    name: "TypeScript",
    level: "Advanced",
    icon: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
  },
  {
    name: "React",
    level: "Expert",
    icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
  },
  {
    name: "Next.js",
    level: "Advanced",
    icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg"
  },
  {
    name: "Angular",
    level: "Advanced",
    icon: "https://www.vectorlogo.zone/logos/angular/angular-icon.svg"
  },
  {
    name: "Node.js",
    level: "Intermediate",
    icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
  },
  {
    name: "Python",
    level: "Intermediate",
    icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg"
  },
  {
    name: "Django",
    level: "Intermediate",
    icon: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg"
  },
  {
    name: "HTML5",
    level: "Expert",
    icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
  },
  {
    name: "CSS",
    level: "Expert",
    icon: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
    icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
  },
  {
    name: "MySQL",
    level: "Intermediate",
    icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg"
  },
  {
    name: "Git",
    level: "Expert",
    icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
  },
  { name: "REST APIs", level: "Advanced", icon: "" },
]

const Skills = () => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'from-green-400 to-green-600'
      case 'Advanced':
        return 'from-blue-400 to-blue-600'
      case 'Intermediate':
        return 'from-yellow-400 to-yellow-600'
      default:
        return 'from-gray-400 to-gray-600'
    }
  }

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl font-extrabold text-accent mb-16 text-center">Skills & Technologies</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              {skill.icon ? (
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="text-2xl">🌐</div>
              )}
              <h3 className="font-bold text-white text-sm">{skill.name}</h3>
              <div className={`w-full h-1 bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full`}></div>
              <div className="text-xs text-gray-400 font-medium">{skill.level}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-8 px-6 py-3 bg-gray-800 rounded-full shadow-sm border border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
            <span className="text-sm text-gray-200 font-semibold">Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            <span className="text-sm text-gray-200 font-semibold">Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
            <span className="text-sm text-gray-200 font-semibold">Intermediate</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
