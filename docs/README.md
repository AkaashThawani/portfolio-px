# Portfolio Project Documentation

This is a comprehensive documentation for the Portfolio project - a modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Components](#components)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
- [Scripts](#scripts)

## 🎯 Project Overview

This is a personal portfolio website showcasing projects, skills, experience, and contact information. The project is built with modern web technologies and follows best practices for performance, accessibility, and maintainability.

**Key Features:**
- Responsive design that works on all devices
- Dark/Light theme support
- Modern UI components using Radix UI
- Smooth animations with Framer Motion
- **Dynamic GitHub API integration** - Projects automatically fetched from GitHub repositories
- Skills visualization
- SEO optimized
- Real-time project data with stars, forks, and language statistics

## 🛠 Tech Stack

### Core Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

### Form Handling
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation resolvers

### Additional Libraries
- **next-themes** - Theme switching
- **date-fns** - Date utilities
- **recharts** - Data visualization
- **sonner** - Toast notifications
- **embla-carousel-react** - Carousel component

## 📁 Project Structure

```
portfolio-px/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── github/        # GitHub API integration
│   │       └── route.ts   # GitHub repositories endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── about.tsx         # About section (available)
│   ├── contact.tsx       # Contact form (available)
│   ├── education.tsx     # Education section (available)
│   ├── experience.tsx    # Experience section (available)
│   ├── footer.tsx        # Footer component
│   ├── hero.tsx          # Hero section
│   ├── navbar.tsx        # Navigation bar
│   ├── projects.tsx      # Projects showcase (GitHub API integrated)
│   ├── skills.tsx        # Skills section
│   └── theme-provider.tsx # Theme context
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and types
│   └── types.ts          # TypeScript interfaces for GitHub API
├── public/               # Static assets
│   ├── logos/           # Technology logos
│   └── placeholder-*    # Placeholder images
├── styles/               # Additional stylesheets
├── .env.local            # Environment variables (GitHub API config)
└── docs/                # This documentation folder
```

## 🧩 Components

### Main Components

| Component | Description | Location |
|-----------|-------------|----------|
| **Hero** | Main landing section with introduction | `components/hero.tsx` |
| **Skills** | Technical skills showcase | `components/skills.tsx` |
| **Projects** | Portfolio projects display | `components/projects.tsx` |
| **Navbar** | Navigation menu | `components/navbar.tsx` |
| **Footer** | Site footer | `components/footer.tsx` |

### Available Components (Not Currently Used)

| Component | Description | Location |
|-----------|-------------|----------|
| **About** | Personal information and bio | `components/about.tsx` |
| **Experience** | Work experience timeline | `components/experience.tsx` |
| **Education** | Educational background | `components/education.tsx` |
| **Contact** | Contact form and information | `components/contact.tsx` |

### UI Components

The project includes a comprehensive set of reusable UI components built with Radix UI:

- **Form Components**: Button, Input, Textarea, Checkbox, Radio Group, Select, Switch
- **Layout Components**: Card, Separator, Aspect Ratio, Scroll Area
- **Navigation Components**: Navigation Menu, Menubar, Breadcrumb, Pagination
- **Feedback Components**: Alert, Toast, Progress, Skeleton
- **Overlay Components**: Dialog, Sheet, Popover, Tooltip, Hover Card

### Custom Hooks

- **use-mobile.tsx** - Mobile device detection
- **use-toast.ts** - Toast notification management

## ⚙️ Configuration

### Next.js Configuration
- **next.config.mjs** - Next.js configuration
- **tsconfig.json** - TypeScript configuration
- **tailwind.config.ts** - Tailwind CSS configuration
- **postcss.config.mjs** - PostCSS configuration

### Package Configuration
- **package.json** - Dependencies and scripts
- **components.json** - UI component configuration
- **.gitignore** - Git ignore patterns

## 🚀 Development

### Prerequisites
- Node.js 18+
- npm or pnpm

### Setup
```bash
# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Development Workflow
1. Make changes to components in the `components/` directory
2. Test changes in development mode (`npm run dev`)
3. Build and test production build (`npm run build`)
4. Deploy to Vercel

## 🌐 Deployment

### Vercel Deployment
The project is configured for automatic deployment on Vercel:

- **Production URL**: [https://vercel.com/akaashthawanis-projects/v0-protfolio](https://vercel.com/akaashthawanis-projects/v0-protfolio)
- **Repository**: [https://github.com/AkaashThawani/portfolio-px.git](https://github.com/AkaashThawani/portfolio-px.git)

### Deployment Files
- **vercel-deployment.tsx** - Deployment configuration
- **vercel-domain-setup.tsx** - Domain setup utilities

### Environment Variables

The project now supports GitHub API integration for dynamic project fetching. The following environment variables are available:

#### Required for GitHub API Integration
- `GITHUB_TOKEN` - GitHub Personal Access Token (optional but recommended for higher rate limits)
- `NEXT_PUBLIC_GITHUB_USERNAME` - Your GitHub username (optional, defaults to 'AkaashThawani')

#### Setting up GitHub API Integration

1. **Create a GitHub Personal Access Token:**
   - Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
   - Click "Generate new token (classic)"
   - Select scopes: `public_repo` (for public repositories only)
   - Copy the generated token

2. **Add Environment Variables:**
   - Create a `.env.local` file in the project root
   - Add your GitHub token and username:
     ```
     GITHUB_TOKEN=your_github_token_here
     NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
     ```

3. **Benefits of Using a Token:**
   - Higher API rate limits (5000 requests/hour vs 60/hour)
   - Access to private repositories (if needed)
   - More reliable API access

#### API Endpoints
- `GET /api/github?username={username}` - Fetch GitHub repositories for a user

## 📊 Performance & SEO

### Performance Optimizations
- Next.js Image optimization
- Static generation where possible
- Optimized bundle sizes
- Lazy loading for components

### SEO Features
- Meta tags and descriptions
- Open Graph tags
- Structured data
- Semantic HTML

## 🎨 Styling

### Theme System
- Dark/Light mode support via `next-themes`
- Consistent design system
- Responsive breakpoints
- Custom CSS variables

### Design Tokens
Colors, spacing, typography, and other design tokens are managed through Tailwind CSS configuration.

## 🔧 Customization

### Adding New Components
1. Create component in `components/` directory
2. Add to main page layout in `app/page.tsx`
3. Style with Tailwind classes
4. Add any necessary UI components to `components/ui/`

### Modifying Styles
- Global styles: `app/globals.css`
- Component-specific styles: Use Tailwind utilities
- Custom styles: Add to `styles/globals.css`

## 📝 Contributing

### Code Style
- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Implement proper error boundaries

### Testing
- Test responsive design on multiple devices
- Verify accessibility features
- Test form validation
- Check theme switching functionality

## 📄 License

This project is private and not licensed for public use.

---

*For more information about specific components or features, see the individual documentation files in this directory.*
