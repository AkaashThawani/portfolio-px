# Configuration Documentation

This document details all configuration files and their settings for the Portfolio project.

## 📋 Configuration Files Overview

| File | Purpose | Location |
|------|---------|----------|
| **next.config.mjs** | Next.js configuration | Root |
| **tsconfig.json** | TypeScript configuration | Root |
| **tailwind.config.ts** | Tailwind CSS configuration | Root |
| **postcss.config.mjs** | PostCSS configuration | Root |
| **components.json** | UI components configuration | Root |
| **package.json** | Dependencies and scripts | Root |

## ⚙️ Next.js Configuration

### File: `next.config.mjs`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

### Configuration Details

#### ESLint Configuration
- **ignoreDuringBuilds: true** - Skips ESLint checks during build process
- Useful for rapid development and deployment
- Should be set to `false` in production for code quality

#### TypeScript Configuration
- **ignoreBuildErrors: true** - Ignores TypeScript errors during build
- Allows deployment even with type errors
- Should be set to `false` in production environments

#### Images Configuration
- **unoptimized: true** - Disables Next.js image optimization
- Images are served as-is without processing
- Useful for static hosting or when optimization isn't needed

## 🔷 TypeScript Configuration

### File: `tsconfig.json`

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Compiler Options Explained

#### Language and Environment
- **lib**: Includes DOM types and ESNext features
- **target**: Compiles to ES6
- **allowJs**: Allows JavaScript files in TypeScript project
- **jsx**: Preserves JSX syntax for Next.js

#### Module Resolution
- **module**: Uses ESNext module system
- **moduleResolution**: Uses bundler resolution strategy
- **esModuleInterop**: Enables better interoperability with CommonJS
- **resolveJsonModule**: Allows importing JSON files

#### Type Checking
- **strict**: Enables all strict type checking options
- **skipLibCheck**: Skips type checking of declaration files
- **isolatedModules**: Ensures each file can be transpiled independently
- **noEmit**: Does not emit output files (handled by Next.js)

#### Build Optimization
- **incremental**: Enables incremental compilation for faster builds
- **plugins**: Includes Next.js specific TypeScript features

#### Path Mapping
- **paths**: Maps `@/*` to the project root for cleaner imports

## 🎨 Tailwind CSS Configuration

### File: `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
```

### Configuration Details

#### Dark Mode
- **darkMode: ["class"]** - Enables class-based dark mode
- Uses `class` strategy for manual theme switching
- Requires `dark` class on html/body element

#### Content Paths
- Scans all TypeScript/TSX files in pages, components, and app directories
- Includes MDX files for content processing
- Ensures Tailwind only includes used classes

#### Color System
- Uses CSS custom properties for theming
- Supports light/dark mode variants
- Includes semantic color names (primary, secondary, muted, etc.)
- Chart colors for data visualization
- Sidebar-specific colors

#### Design Tokens
- **borderRadius**: Uses CSS custom properties for consistent rounding
- **keyframes**: Custom animations for accordion components
- **animation**: Named animations with duration and easing

#### Plugins
- **tailwindcss-animate**: Adds animation utilities
- Enables smooth transitions and animations

## 📦 PostCSS Configuration

### File: `postcss.config.mjs`

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
```

### Configuration Details

#### Plugin Setup
- **tailwindcss**: Processes Tailwind CSS
- No additional configuration needed
- Uses default Tailwind processing

## 🧩 UI Components Configuration

### File: `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

### Configuration Details

#### Project Setup
- **$schema**: JSON schema for validation
- **style**: Uses default shadcn/ui styling
- **rsc**: Enables React Server Components
- **tsx**: Uses TypeScript with JSX

#### Tailwind Integration
- **config**: Points to Tailwind config file
- **css**: Global CSS file location
- **baseColor**: Uses neutral color palette
- **cssVariables**: Enables CSS custom properties
- **prefix**: No prefix for utility classes

#### Path Aliases
- **components**: Maps to components directory
- **utils**: Maps to utility functions
- **ui**: Maps to UI components
- **lib**: Maps to library code
- **hooks**: Maps to custom hooks

#### Icon Configuration
- **iconLibrary**: Uses Lucide React icons
- Consistent icon system across components

## 📦 Package Configuration

### File: `package.json`

Key configuration details:

#### Scripts
- **dev**: Starts development server
- **build**: Builds for production
- **start**: Starts production server
- **lint**: Runs ESLint

#### Dependencies
- **Next.js 15.2.4**: React framework
- **React 19**: UI library
- **TypeScript 5**: Type safety
- **Tailwind CSS 3.4.17**: Styling
- **Radix UI**: Component primitives
- **Framer Motion**: Animations
- **React Hook Form**: Form handling
- **Zod**: Validation

## 🔧 Environment Setup

### Required Environment Variables
Currently, no environment variables are required for this project.

### Development Environment
- **Node.js**: Version 18 or higher
- **Package Manager**: npm or pnpm
- **Git**: For version control

## ⚠️ Important Notes

### Build Optimizations
- ESLint and TypeScript errors are ignored during builds
- Consider enabling these for production deployments
- Image optimization is disabled for faster builds

### Performance Considerations
- Consider enabling image optimization for production
- Review bundle size with unused dependencies
- Monitor build times with current configuration

### Security Considerations
- TypeScript strict mode is enabled
- Consider adding additional security headers
- Review dependency vulnerabilities regularly

## 🔄 Configuration Updates

### When to Update
- **Next.js**: Update for new features and security patches
- **TypeScript**: Update for better type checking
- **Tailwind**: Update for new utility classes
- **Dependencies**: Regular security updates

### Update Process
1. Test updates in development environment
2. Check for breaking changes
3. Update configuration if needed
4. Test build process
5. Deploy to staging before production
