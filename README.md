# Portfolio-PX

A modern, responsive personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features dynamic GitHub integration, dark/light theme support, and showcase sections for skills, projects, and experience.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/akaashthawanis-projects/v0-protfolio)
[![Built with TypeScript](https://img.shields.io/badge/Built%20with-TypeScript-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)

## ✨ Features

- **Responsive Design**: Works seamlessly across all devices
- **Dynamic GitHub Integration**: Automatically fetches and displays projects from GitHub repositories
- **Theme Support**: Dark/Light mode toggle
- **Modern UI**: Built with Radix UI components and Framer Motion animations
- ** SEO Optimized**: Meta tags, Open Graph, and structured data
- **Type-Safe**: Fully typed with TypeScript
- **Performance**: Optimized with Next.js image optimization and lazy loading

## 🛠 Tech Stack

### Core Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety and developer experience

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Accessible headless components
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations and transitions

### Form Handling & Validation
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema declaration and validation

### Additional Libraries
- **next-themes** - Theme switching functionality
- **date-fns** - Modern JavaScript date utility library
- **recharts** - Composable charting library built on React components
- **sonner** - Toast notifications

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AkaashThawani/portfolio-px.git
cd portfolio-px
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Create a `.env.local` file for GitHub API integration (optional but recommended):
```bash
GITHUB_TOKEN=your_github_personal_access_token
NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio-px/
├── app/                    # Next.js App Router
│   ├── api/github/         # GitHub API endpoint
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout with navbar/footer
│   └── page.tsx            # Homepage (Hero, Skills, Projects)
├── components/             # React components
│   ├── ui/                 # Reusable UI components (40+ components)
│   ├── about.tsx           # About section component
│   ├── contact.tsx         # Contact form component
│   ├── education.tsx       # Education section
│   ├── experience.tsx      # Work experience timeline
│   ├── footer.tsx          # Site footer
│   ├── hero.tsx            # Hero/landing section
│   ├── navbar.tsx          # Navigation bar
│   ├── projects.tsx        # Projects showcase with GitHub data
│   ├── skills.tsx          # Skills visualization
│   ├── tech-icon.tsx       # Technology icon component
│   └── theme-provider.tsx  # Theme context provider
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and types
│   ├── types.ts            # TypeScript interfaces
│   └── utils.ts            # Helper functions
├── public/                 # Static assets
│   ├── logos/              # Technology logos (SVG icons)
│   └── placeholder-*       # Placeholder images
├── docs/                   # Comprehensive documentation
├── scripts/                # Build scripts (if any)
└── styles/                 # Additional stylesheets
```

## 📊 Portfolio Sections

The main page (`app/page.tsx`) renders the following sections:

- **Hero**: Introductory section with greetings and call-to-action
- **Skills**: Technical skills with icon visualizations
- **Projects**: Dynamic project showcase fetched from GitHub API

Additional components available (can be easily added to the layout):
- **About**: Personal information and bio
- **Experience**: Work experience timeline
- **Education**: Educational background
- **Contact**: Contact form with validation

## 🌐 GitHub API Integration

### Configuration
For enhanced features like higher API limits and private repositories:

1. Create a [GitHub Personal Access Token](https://github.com/settings/tokens)
2. Add to `.env.local`:
   ```
   GITHUB_TOKEN=your_token_here
   NEXT_PUBLIC_GITHUB_USERNAME=your_username
   ```
3. Benefits: 5000 API calls/hour (vs 60 without token), access to private repos

### API Endpoint
- `GET /api/github?username={username}` - Fetches user's repositories with stats (stars, forks, language, topics)

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint for code quality
```

## 🌐 Deployment

### Vercel (Recommended)
This project is optimized for Vercel deployment:

- **Live Demo**: [https://vercel.com/akaashthawanis-projects/v0-protfolio](https://vercel.com/akaashthawanis-projects/v0-protfolio)
- Automatic deployments on push to main branch
- Environment variables configured for GitHub API

### Other Platforms
Compatible with any Node.js hosting provider (Netlify, Railway, etc.).

## 📖 Documentation

For detailed documentation, see the `docs/` folder:

- **[Development Guide](docs/development.md)** - Setup, workflows, and best practices
- **[Configuration Guide](docs/configuration.md)** - Environment setup and customization
- **[Deployment Guide](docs/deployment.md)** - Deployment instructions for different platforms

## 🎨 Customization

### Adding Sections
1. Create a new component in `components/`
2. Import and add to `app/page.tsx` or `app/layout.tsx`
3. Style with Tailwind CSS classes

### Modifying Content
- Update personal information in component files
- Replace placeholder images in `public/`
- Customize colors and theme in `tailwind.config.ts`

### Environment Variables
- `GITHUB_TOKEN`: GitHub API token for higher rate limits
- `NEXT_PUBLIC_GITHUB_USERNAME`: Your GitHub username (default: AkaashThawani)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/awesome-feature`
3. Commit changes: `git commit -m 'Add awesome feature'`
4. Push to branch: `git push origin feature/awesome-feature`
5. Open a Pull Request

### Development Guidelines
- Use TypeScript for type safety
- Follow React and Next.js best practices
- Test responsive design on multiple devices
- Ensure accessibility compliance
- Write meaningful commit messages

## 📄 License

This project is private and not licensed for public use.

## 👏 Acknowledgments

- Built with modern web technologies
- UI components inspired by Radix UI
- Icons from Lucide React
- Deployed on Vercel for optimal performance

---

*Built with ❤️ by Akaash Thawani.*
