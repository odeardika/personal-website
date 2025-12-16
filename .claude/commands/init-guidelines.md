---
description: Analyze project structure and generate GUIDELINES.md and .clauderules files
argument-hint: [project-type] (optional: nextjs, react, node, monorepo, or auto-detect)
---

# Initialize Project Guidelines

You are tasked with analyzing this project and creating two essential files:
1. **GUIDELINES.md** - Development guidelines and project documentation
2. **.clauderules** - AI assistant rules specific to this project

## Step 1: Project Analysis

First, thoroughly analyze the project structure to understand:

### Detect Project Type
- Is this a monorepo (multiple projects in one repo)?
- Single project? What framework/stack?
- Project type hint from user: `$ARGUMENTS` (use auto-detect if empty)

### Gather Information
Explore and understand:
1. **Package manager(s)** - npm, yarn, pnpm, bun
2. **Framework(s)** - Next.js, React, Node.js, Express, etc.
3. **Language** - TypeScript, JavaScript, Python, etc.
4. **Database** - PostgreSQL, MongoDB, Supabase, Prisma, etc.
5. **Styling** - Tailwind CSS, CSS Modules, styled-components, etc.
6. **Testing** - Jest, Vitest, Playwright, etc.
7. **Folder structure** - app/, src/, components/, lib/, etc.
8. **Configuration files** - tsconfig, eslint, prettier, etc.
9. **Git workflow** - branching strategy from recent commits
10. **Existing documentation** - README, CONTRIBUTING, etc.

## Step 2: Generate GUIDELINES.md

Create a comprehensive `GUIDELINES.md` file with these sections:

```markdown
# [Project Name] Development Guidelines

## Table of Contents
- Project Overview
- Architecture
- Development Setup
- Coding Standards
- [Framework-specific sections]
- Testing
- Git Workflow
- Troubleshooting
- Quick Reference

## Project Overview
[Brief description, tech stack, key features]

## Architecture
[System diagram if monorepo, folder structure explanation]

## Development Setup
[Prerequisites, installation steps, environment variables, running the project]

## Coding Standards
[TypeScript rules, naming conventions, file organization]

## [Framework-Specific Sections]
[Add sections relevant to detected frameworks - e.g., "Component Guidelines" for React, "API Routes" for Next.js]

## Testing
[Testing strategy, running tests, coverage requirements]

## Git Workflow
[Branch naming, commit message format, PR guidelines]

## Troubleshooting
[Common issues and solutions]

## Quick Reference
[Table with ports, commands, important paths]
```

## Step 3: Generate .clauderules

Create a `.clauderules` file with AI assistant rules:

```markdown
# AI Assistant Rules for [Project Name]

> **Read `GUIDELINES.md` first** for project architecture and conventions.

---

## Table of Contents
1. [Global Rules](#global-rules)
2. [Project-specific rules for each detected project/framework]

---

## Global Rules

### TypeScript Standards
- Strict mode enabled
- NO `any` types - use `unknown` with type guards
- Explicit return types on all functions
- Use descriptive names with auxiliary verbs (isLoading, hasError)

### Git Behavior
- Never auto-commit without asking
- Never push to remote without permission
- Use conventional commit format (feat, fix, refactor, docs, test, chore)
- Never include AI attribution in commits

### Code Quality
- Always read files before editing
- Prefer editing existing files over creating new ones
- Don't over-engineer - keep solutions simple
- Don't add comments/docs unless requested

---

## [Framework-Specific Rules]

[Add rules specific to detected frameworks, for example:]

### For Next.js Projects:
- Server Components by default
- Use 'use client' only when necessary
- Tailwind CSS for styling (no inline styles)
- Use Next.js Image component

### For API Projects:
- Input validation on all endpoints
- Proper error handling patterns
- Authentication patterns

---

## Quick Reference

| Item | Value |
|------|-------|
| Port | [detected port] |
| Package Manager | [detected] |
| Main Branch | [detected] |

---

*Last Updated: [current date]*
```

## Important Guidelines for Generation

1. **Be specific to THIS project** - Don't use generic templates. Analyze actual files and structure.

2. **For Monorepos**: Create sections for each sub-project with their own rules and ports.

3. **Include actual examples** from the codebase where helpful.

4. **Reference existing patterns** - If the project already has conventions, document them.

5. **Keep it practical** - Focus on rules that prevent common mistakes.

6. **Add quick reference tables** - Ports, commands, package managers should be easy to find.

## Output

After analysis, create both files:
1. Write `GUIDELINES.md` to the project root
2. Write `.clauderules` to the project root

Confirm what was detected and summarize the key rules established.
