# Components Documentation

This document provides detailed information about all the components used in the Portfolio project.

## 📦 Main Components

### Hero Component (`components/hero.tsx`)
**Purpose**: Main landing section that introduces the portfolio owner.

**Features**:
- Animated text and elements
- Call-to-action buttons
- Responsive design
- Social media links

**Dependencies**:
- Framer Motion for animations
- Lucide React for icons

### About Component (`components/about.tsx`)
**Purpose**: Personal information and bio section.

**Features**:
- Personal description
- Key highlights
- Professional summary
- Responsive layout

**Dependencies**:
- Standard React components

### Skills Component (`components/skills.tsx`)
**Purpose**: Showcase technical skills and expertise.

**Features**:
- Skills categorization
- Technology icons
- Skill level indicators
- Interactive elements

**Dependencies**:
- Technology logos from `public/logos/`
- Custom styling for skill levels

### Projects Component (`components/projects.tsx`)
**Purpose**: Display portfolio projects with filtering and details.

**Features**:
- Project cards with images
- Technology tags
- Project filtering
- Links to live demos and repositories
- Project descriptions

**Dependencies**:
- Project images from `public/`
- Technology icons

### Experience Component (`components/experience.tsx`)
**Purpose**: Display work experience and career history.

**Features**:
- Timeline layout
- Company information
- Role descriptions
- Achievement highlights
- Date ranges

**Dependencies**:
- Date formatting utilities

### Education Component (`components/education.tsx`)
**Purpose**: Showcase educational background and qualifications.

**Features**:
- Institution information
- Degree details
- Graduation dates
- Relevant coursework
- Achievements

**Dependencies**:
- Date utilities

### Contact Component (`components/contact.tsx`)
**Purpose**: Contact form and contact information.

**Features**:
- Contact form with validation
- Social media links
- Contact information
- Form submission handling
- Success/error states

**Dependencies**:
- React Hook Form
- Zod for validation
- Toast notifications

### Navbar Component (`components/navbar.tsx`)
**Purpose**: Navigation menu for the website.

**Features**:
- Responsive navigation
- Mobile menu
- Theme toggle
- Smooth scrolling
- Active section highlighting

**Dependencies**:
- Theme provider
- Mobile detection hook

### Footer Component (`components/footer.tsx`)
**Purpose**: Site footer with additional information.

**Features**:
- Copyright information
- Social media links
- Additional navigation
- Contact information

**Dependencies**:
- Social media icons

## 🎨 UI Components Library

The project uses a comprehensive set of reusable UI components built with Radix UI primitives.

### Form Components

#### Button (`components/ui/button.tsx`)
**Purpose**: Reusable button component with variants.

**Variants**:
- Default, destructive, outline, secondary, ghost, link
- Different sizes: default, sm, lg, icon
- Loading states

#### Input (`components/ui/input.tsx`)
**Purpose**: Form input component with consistent styling.

**Features**:
- Focus states
- Error states
- Disabled states
- Placeholder support

#### Textarea (`components/ui/textarea.tsx`)
**Purpose**: Multi-line text input component.

**Features**:
- Auto-resize
- Character limits
- Validation states

#### Checkbox (`components/ui/checkbox.tsx`)
**Purpose**: Checkbox input component.

**Features**:
- Checked/unchecked states
- Indeterminate state
- Keyboard navigation

#### Radio Group (`components/ui/radio-group.tsx`)
**Purpose**: Group of radio button options.

**Features**:
- Single selection
- Keyboard navigation
- Form integration

#### Select (`components/ui/select.tsx`)
**Purpose**: Dropdown selection component.

**Features**:
- Search functionality
- Multiple selection
- Custom triggers

#### Switch (`components/ui/switch.tsx`)
**Purpose**: Toggle switch component.

**Features**:
- On/off states
- Smooth transitions
- Accessibility support

### Layout Components

#### Card (`components/ui/card.tsx`)
**Purpose**: Container component for grouping content.

**Features**:
- Header, content, footer sections
- Hover effects
- Different variants

#### Separator (`components/ui/separator.tsx`)
**Purpose**: Visual divider component.

**Features**:
- Horizontal/vertical orientation
- Custom spacing

#### Aspect Ratio (`components/ui/aspect-ratio.tsx`)
**Purpose**: Maintain consistent aspect ratios for media.

**Features**:
- Responsive images
- Video embeds
- Custom ratios

#### Scroll Area (`components/ui/scroll-area.tsx`)
**Purpose**: Custom scrollbar component.

**Features**:
- Custom styling
- Smooth scrolling
- Mobile support

### Navigation Components

#### Navigation Menu (`components/ui/navigation-menu.tsx`)
**Purpose**: Complex navigation with submenus.

**Features**:
- Dropdown menus
- Sub-navigation
- Mobile responsive

#### Menubar (`components/ui/menubar.tsx`)
**Purpose**: Desktop-style menu bar.

**Features**:
- Keyboard shortcuts
- Submenus
- Accessibility

#### Breadcrumb (`components/ui/breadcrumb.tsx`)
**Purpose**: Navigation breadcrumb trail.

**Features**:
- Link hierarchy
- Current page indication

#### Pagination (`components/ui/pagination.tsx`)
**Purpose**: Page navigation component.

**Features**:
- Page numbers
- Previous/next buttons
- Page size selection

### Feedback Components

#### Alert (`components/ui/alert.tsx`)
**Purpose**: Important message display.

**Features**:
- Different variants (default, destructive)
- Dismissible alerts
- Icons and descriptions

#### Toast (`components/ui/toast.tsx`)
**Purpose**: Temporary notification system.

**Features**:
- Auto-dismiss
- Different types (success, error, warning, info)
- Queue management

#### Progress (`components/ui/progress.tsx`)
**Purpose**: Progress indicator component.

**Features**:
- Determinate/indeterminate
- Custom colors
- Animations

#### Skeleton (`components/ui/skeleton.tsx`)
**Purpose**: Loading placeholder component.

**Features**:
- Different shapes
- Custom sizes
- Loading animations

### Overlay Components

#### Dialog (`components/ui/dialog.tsx`)
**Purpose**: Modal dialog component.

**Features**:
- Modal overlay
- Focus management
- Keyboard navigation
- Custom sizes

#### Sheet (`components/ui/sheet.tsx`)
**Purpose**: Slide-out panel component.

**Features**:
- Side panels
- Full-screen on mobile
- Drag to close

#### Popover (`components/ui/popover.tsx`)
**Purpose**: Floating content container.

**Features**:
- Positioned relative to trigger
- Click outside to close
- Custom content

#### Tooltip (`components/ui/tooltip.tsx`)
**Purpose**: Contextual help text.

**Features**:
- Hover to show
- Custom positioning
- Rich content

#### Hover Card (`components/ui/hover-card.tsx`)
**Purpose**: Card that appears on hover.

**Features**:
- Rich content display
- Custom positioning
- Delay controls

## 🪝 Custom Hooks

### use-mobile.tsx
**Purpose**: Detect mobile device usage.

**Features**:
- Responsive breakpoint detection
- Real-time updates
- SSR compatible

**Usage**:
```tsx
const isMobile = useMobile()
```

### use-toast.ts
**Purpose**: Toast notification management.

**Features**:
- Queue management
- Auto-dismiss
- Custom toasts

**Usage**:
```tsx
const { toast } = useToast()
toast({ title: "Success!", description: "Operation completed" })
```

## 🎯 Component Architecture

### File Organization
```
components/
├── ui/                    # Reusable UI components
│   ├── form/             # Form-specific components
│   ├── layout/           # Layout components
│   └── overlay/          # Modal/overlay components
├── features/             # Feature-specific components
├── layout/               # Layout-specific components
└── shared/               # Shared/common components
```

### Naming Conventions
- Use PascalCase for component files
- Use descriptive names that reflect purpose
- Include variant names (e.g., `button-outline.tsx`)
- Use index files for cleaner imports

### Props Pattern
- Use TypeScript interfaces for props
- Provide sensible defaults
- Use discriminated unions for variants
- Include accessibility props

## 🔧 Customization Guidelines

### Adding New Components
1. Determine component category (UI, feature, layout)
2. Create in appropriate directory
3. Add TypeScript interfaces
4. Implement with Tailwind classes
5. Add to exports if reusable

### Styling Approach
- Use Tailwind utility classes
- Follow design system tokens
- Implement responsive design
- Consider dark/light themes
- Add hover and focus states

### Testing Components
- Test responsive behavior
- Verify accessibility
- Check theme compatibility
- Test with different content
- Validate form components

## 📱 Responsive Design

All components are built with mobile-first responsive design:

- **Mobile**: Base styles (< 640px)
- **Tablet**: md: breakpoint (640px+)
- **Desktop**: lg: breakpoint (1024px+)
- **Large Desktop**: xl: breakpoint (1280px+)

## ♿ Accessibility

Components follow accessibility best practices:

- Proper ARIA labels
- Keyboard navigation
- Focus management
- Screen reader support
- Color contrast compliance
