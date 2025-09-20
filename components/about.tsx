// Redesigned About section with personal touch and modern layout

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl font-extrabold text-accent mb-12 text-center">About Me</h2>
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-white">A</span>
            </div>
            <div>
              <h3 className="font-bold hero-title ">Akaash Thawani</h3>
              <p className="text-gray-300">Full Stack Engineer</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-200">
            <p className="text-lg leading-relaxed">
              👋 I'm a passionate Front-End Engineer with over 2 years of experience building modern, responsive web applications.
              Currently pursuing a Master's in Computer Science at NJIT.
            </p>
            <p className="leading-relaxed">
              🚀 My expertise spans JavaScript, TypeScript, React, Next.js, and Python. I specialize in creating scalable solutions
              that prioritize user experience and performance.
            </p>
            <p className="leading-relaxed">
              🎯 I thrive on solving complex problems and turning ideas into beautiful, functional applications.
              I'm always eager to learn emerging technologies and contribute to meaningful projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl">
              <h4 className="font-bold text-indigo-400 mb-2">Experience</h4>
              <p className="text-gray-300">2+ Years</p>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl">
              <h4 className="font-bold text-pink-400 mb-2">Education</h4>
              <p className="text-gray-300">MS Computer Science</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-4">Interests</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-200">
                    <span className="text-2xl">💻</span>
                    <span>Open Source</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <span className="text-2xl">🎨</span>
                    <span>UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <span className="text-2xl">🚀</span>
                    <span>Tech Innovation</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <span className="text-2xl">📚</span>
                    <span>Continuous Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
