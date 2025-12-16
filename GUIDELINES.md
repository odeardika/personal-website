# Personal Website Development Guidelines

This document provides development standards and architecture overview for the personal portfolio website.

## Table of Contents

- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Component Guidelines](#component-guidelines)
- [API Routes](#api-routes)
- [Styling](#styling)
- [Database Integration](#database-integration)
- [Git Workflow](#git-workflow)
- [Troubleshooting](#troubleshooting)

---

## Project Overview

A personal portfolio website showcasing projects and skills, built with modern web technologies.

| Item | Value |
|------|-------|
| Framework | Next.js 14.2.15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4.1 |
| Database | Supabase |
| Animations | AOS, Motion |
| Icons | Lucide React, React Icons |

### Key Features

- Responsive portfolio showcase
- Dynamic project data from Supabase
- Scroll-triggered animations
- Tech stack visualization
- SEO-optimized metadata

---

## Architecture

### Folder Structure

```
personal-website/
├── app/                      # Next.js App Router
│   ├── api/                 # API routes
│   │   ├── project/        # Project endpoints
│   │   └── skill/          # Skill endpoints
│   ├── project/            # Project pages
│   │   └── [id]/          # Dynamic project detail
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
│
├── components/              # React components
│   ├── ui/                 # Reusable UI (shadcn)
│   ├── Section/            # Page sections
│   │   ├── Home/          # Hero section
│   │   ├── About/         # About section
│   │   ├── Project/       # Projects showcase
│   │   └── Skills/        # Skills section
│   ├── Card/              # Card components
│   ├── Header/            # Site header
│   ├── Navbar/            # Navigation
│   ├── Footer/            # Site footer
│   └── Icons/             # Icon components
│
├── lib/                    # Utilities
│   └── utils.ts           # cn() helper
│
├── module/                 # Feature modules
│   └── supabase/          # Database integration
│       └── server.ts
│
├── types/                  # TypeScript definitions
│   ├── project.d.ts
│   ├── techstack.d.ts
│   ├── portfolioCard.d.ts
│   └── navbar.types.ts
│
└── public/                 # Static assets
    └── assets/images/     # Images
```

### Data Flow

```
┌─────────────────────────────────────────────────────┐
│                    Client Browser                    │
└────────────────────────┬────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
         ▼               ▼               ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   Pages     │  │ Components  │  │ API Routes  │
│  (Server)   │  │  (Client)   │  │  /api/*     │
└─────────────┘  └─────────────┘  └──────┬──────┘
                                         │
                                         ▼
                               ┌─────────────────┐
                               │    Supabase     │
                               │   (PostgreSQL)  │
                               └─────────────────┘
```

---

## Development Setup

### Prerequisites

- Node.js 18.x or higher
- npm (primary package manager)
- Supabase account

### Installation

```bash
# Clone repository
git clone https://github.com/odeardika/personal-website.git
cd personal-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Environment Variables

Create `.env.local` with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Get credentials from Supabase Dashboard → Project Settings → API.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Coding Standards

### TypeScript

- Strict mode enabled
- No `any` types - use `unknown` with type guards
- Explicit return types on exported functions
- Use descriptive names with auxiliary verbs (`isLoading`, `hasError`)

```typescript
// Good
function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// Bad
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

### File Naming

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Navbar.tsx` |
| Utilities | camelCase | `utils.ts` |
| Types | camelCase with suffix | `project.d.ts`, `navbar.types.ts` |
| API Routes | lowercase | `route.ts` |

### Import Order

```typescript
// 1. React/Next.js
import { useState } from 'react';
import Image from 'next/image';

// 2. External libraries
import { motion } from 'motion/react';

// 3. Internal modules
import { getProjects } from '@/module/supabase/server';

// 4. Components
import { Card } from '@/components/ui/card';

// 5. Types
import type { Project } from '@/types/project';

// 6. Styles (if any)
import './styles.css';
```

### Path Aliases

```typescript
// Use aliases defined in tsconfig.json
import { cn } from '@/lib/utils';
import { Card } from '@components/ui/card';
import ProfileImg from '@public/assets/images/profile.png';
```

---

## Component Guidelines

### Server vs Client Components

- **Server Components** (default): Data fetching, SEO content, static UI
- **Client Components** (`'use client'`): Interactivity, hooks, browser APIs

```tsx
// Server Component (default)
export default async function ProjectList() {
  const projects = await getProjects();
  return <div>{/* render projects */}</div>;
}

// Client Component (when needed)
'use client'
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

### Component Structure

```tsx
// components/Section/Example/Example.tsx
'use client' // Only if needed

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ExampleProps {
  title: string;
  className?: string;
}

export default function Example({ title, className }: ExampleProps): React.JSX.Element {
  return (
    <section className={cn("base-styles", className)}>
      <h2>{title}</h2>
    </section>
  );
}
```

### Animation Pattern

Use AOS for scroll animations:

```tsx
<section
  data-aos="fade-up"
  data-aos-duration="1000"
  className="..."
>
  {/* Content */}
</section>
```

Use Motion for interactive animations:

```tsx
import { motion } from 'motion/react';

<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  Click me
</motion.button>
```

---

## API Routes

### Route Structure

```
app/api/
├── project/
│   ├── route.ts           # GET all, POST search
│   └── [id]/
│       └── route.ts       # GET by ID
└── skill/
    └── [id]/
        └── route.ts       # GET skills by project ID
```

### Response Format

```typescript
// Success
Response.json({
  status: 200,
  message: 'success',
  data: result
});

// Error
Response.json({
  status: 404,
  message: 'Not found',
  data: null
});
```

### Route Handler Pattern

```typescript
import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Fetch data
  const { data, error } = await getProjectById(Number(id));

  if (error || !data) {
    return Response.json({
      status: 404,
      message: 'Not found',
      data: null
    });
  }

  return Response.json({
    status: 200,
    message: 'success',
    data
  });
}
```

---

## Styling

### Tailwind CSS

- Use Tailwind utility classes exclusively
- No inline `style` objects
- Use `cn()` for conditional classes

```tsx
// Good
<div className={cn(
  "rounded-lg p-4",
  isActive && "bg-primary",
  className
)}>

// Bad
<div style={{ borderRadius: '8px', padding: '16px' }}>
```

### Custom Colors

Defined in `tailwind.config.ts`:

```typescript
colors: {
  dark_blue: "#102237",
  gray_blue: "#142D48",
  // Plus CSS variable-based theme colors
}
```

### Custom Utilities

Available in `globals.css`:

```css
.blob          /* Animated border-radius */
.wave          /* Waving animation */
.hvr-hang      /* Hover hang effect */
.extra-w       /* Text stroke: 0.1rem */
.mid-extra-w   /* Text stroke: 0.08rem */
.less-extra-w  /* Text stroke: 0.05rem */
```

### Responsive Design

Mobile-first approach:

```tsx
<div className="p-4 md:p-6 lg:p-8 xl:p-10">
  {/* Progressively larger padding */}
</div>
```

---

## Static Data

Project data is stored in static JSON files for simplicity and performance.

### Data Files

| File | Purpose |
|------|---------|
| `data/projects.json` | Project metadata with tech_stack_ids |
| `data/tech-icons.json` | Technology icons with SVG paths |

### Data Module

Located at `module/data/projects.ts`:

```typescript
import projectsData from "@/data/projects.json";
import techIconsData from "@/data/tech-icons.json";

// Available functions
getProject()           // Get all projects (id, title only)
getProjectHome()       // Get latest 4 projects
searchProject(query)   // Search by title
getProjectById(id)     // Get single project
getProjectSkills(id)   // Get tech stack for project
```

### Adding New Projects

1. Add project object to `data/projects.json`
2. Include `tech_stack_ids` array referencing icons
3. Add new tech icons to `data/tech-icons.json` if needed

---

## Git Workflow

### Branch Naming

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feat/description` | `feat/add-contact-form` |
| Bug Fix | `fix/description` | `fix/navbar-mobile` |
| Docs | `docs/description` | `docs/update-readme` |

### Commit Messages

Use conventional commits:

```
feat: add project search functionality
fix: resolve mobile navigation bug
docs: update setup instructions
refactor: simplify animation logic
chore: update dependencies
```

### Workflow

1. Create branch from `dev`: `git checkout -b feat/feature-name`
2. Make changes with conventional commits
3. Run `npm run lint` before committing
4. Create PR against `dev`
5. Merge `dev` to `main` for releases

---

## Troubleshooting

### Common Issues

**Build Errors with Dynamic Params**

Next.js 15 requires Promise-based params:

```typescript
// Correct
{ params }: { params: Promise<{ id: string }> }
const { id } = await params;

// Incorrect (old pattern)
{ params }: { params: { id: string } }
```

**Image Loading Issues**

Ensure remote patterns are configured in `next.config.mjs`:

```javascript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "raw.githubusercontent.com",
      pathname: "/odeardika/personal-project-img/**",
    },
  ],
}
```

**AOS Animations Not Working**

Ensure AOS is initialized in the root layout via `animated-on-scroll.tsx`.

### Debug Commands

```bash
# Check for lint errors
npm run lint

# Build to catch type errors
npm run build

# Check Node version
node --version
```

---

## Quick Reference

| Item | Value |
|------|-------|
| Dev Server | http://localhost:3000 |
| Package Manager | npm |
| Main Branch | main |
| Dev Branch | dev |
| TypeScript Config | tsconfig.json |
| Tailwind Config | tailwind.config.ts |
| ESLint Config | .eslintrc.json |

---

*Last Updated: 2025-12-16*
