# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Home Budget application built with React 19, TypeScript, and Vite 8, using the modern "bundler mode" TypeScript configuration. The design system is called "The Editorial Ledger" - a premium financial app aesthetic that avoids standard utility-first patterns in favor of intentional asymmetry, tonal depth, and glassmorphism.

**Current State:** Project scaffold is initialized. The application uses React Router v7 and Tailwind CSS v4 with DaisyUI components.

## Commands

```bash
# Development server (hot reload)
npm run dev

# Build for production
npm run build

# Lint check
npm run lint

# Preview built app
npm run preview

# Run single test (when tests are implemented)
npm test -- --run [test-name]
```

## Architecture

### Project Structure

```
src/
├── main.tsx              # App entry point
├── index.css             # Global styles (Tailwind v4 @theme)
├── App.tsx               # Root component
├── lib/                  # Utility modules, constants, types
│   └── (stores, helpers, shared logic)
├── components/           # Reusable UI components
│   └── (FinancialCard, TransactionTable, BudgetCharts, etc.)
├── hooks/                # Custom React hooks
├── routes/               # React Router v7 route definitions
│   └── (Outlet, loaders, actions for CRUD)
└── root.tsx             # Root layout with Navbar, Toaster
```

### Key Dependencies

- **React Router v7:** Uses the new `loaders` and `actions` API for data fetching and form submissions
- **Tailwind CSS v4:** Uses `@theme` directive in index.css instead of tailwind.config.js
- **DaisyUI:** Component library for Tailwind v4
- **Lucide React:** Icon set
- **Sonner:** Toast notifications
- **Recharts:** Data visualization (when implemented)

### Design System Rules

1. **No-Line Rule:** Never use `border-solid`. Visual separation via background color shifts only (surface, surface-container-low/lowest, surface-bright).

2. **Surface Hierarchy:**
   - `surface`: Base canvas
   - `surface-container-low`: Subtle grouping
   - `surface-container-lowest`: Cards that pop
   - `surface-bright` (80% opacity, 12px backdrop-blur): Floating elements

3. **Typography:**
   - UI/Headers: Inter/Manrope sans-serif
   - Numerical data: `font-mono` for all currency, percentages, dates, timestamps

4. **Colors:**
   - Primary gradient: #006591 → #0ea5e9 at 135° angle
   - Themes: `winter` (light), `dracula` (dark) via DaisyUI

5. **Glassmorphism:** Sticky headers and modals use `surface_variant` at 40% opacity with `backdrop-filter: blur(8px)`

6. **The "Ghost Border":** Use `outline_variant` at 15% opacity for accessibility outlines. Never use 100% opaque strokes.

7. **Spacing:** Increase from `spacing-4` to `spacing-8` if page feels crowded.

8. **Charts:** Lines with 3px stroke, hide vertical grid, horizontal grid at 10% opacity.

9. **Buttons:**
   - Primary: Gradient background, `rounded-btn` (0.5rem), no border
   - Secondary: `surface-container-high` bg, `on_surface` text
   - Tertiary: Transparent bg, `primary` text

10. **Ambient Shadows:** `box-shadow: 0 20px 40px -10px rgba(25, 28, 30, 0.08)` for floating elements

### Never Do

- DON'T use pure black for text (use `on_surface` or `on_surface_variant`)
- DON'T crowd the screen
- DON'T use `border-solid`
- DON'T use standard "web 2.0" drop shadows

## Implementation Phases

### Phase 1: Foundation ✅

- [x] Configure Tailwind with custom color scale (index.css @theme)
- [x] Setup typography (Inter/Manrope + font-mono for numbers)
- [ ] Create global layout with glassmorphic navigation

### Phase 2: Core Components

- [ ] Port FinancialCard with tonal layering
- [ ] Port TransactionTable with multi-select/filtering
- [ ] Implement BudgetCharts with Recharts

### Phase 3: Data Layer

- [ ] Create TypeScript interfaces: Transaction, Category, Budget
- [ ] Implement LocalStorage CRUD service
- [ ] Integrate React Router v7 loaders/actions

### Phase 4: Polishing

- [ ] Add Sonner toasts for all interactions
- [ ] Audit for "No-Line Rule" compliance
- [ ] Ensure all charts in ResponsiveContainer

## Development Workflow

### Adding New Components

1. Create component in `src/components/` with proper naming (PascalCase)
2. Export to `src/lib/` for shared utilities
3. Register route in `src/routes/` with loader if needed
4. Style according to design system rules

### Testing

When tests are implemented:

```bash
# Run all tests
npm test

# Run single test file
npm test -- <filepath>

# Run with coverage
npm test -- --coverage

# Run single test
npm test -- --run <test-name-pattern>
```

### Debugging Tips

- The app is in early development; use console logs for debugging
- React Router v7 requires explicit `useLoaderData()` and `useActionData()` hooks
- LocalStorage service should be typed with interfaces in `src/lib/types.ts`

## TypeScript Notes

This project uses modern TS bundler mode:

- `verbatimModuleSyntax: true`
- `moduleDetection: "force"`
- `allowImportingTsExtensions: true`
- No `esModuleInterop` needed with bundler mode

## Common Patterns

### Tailwind v4 @theme Pattern

```css
/* All Tailwind config goes in index.css using @theme directive */
@theme {
  --color-surface: hsl(210, 20%, 98%);
  --color-primary: #006591;
  --color-primary-container: #0ea5e9;
  --color-surface-container: hsl(210, 20%, 96%);
  --color-surface-container-low: hsl(210, 18%, 95%);
  --color-surface-container-lowest: hsl(210, 16%, 93%);
  --color-surface-container-high: hsl(210, 20%, 97%);
  --color-on-surface: hsl(210, 15%, 10%);
  --color-on-surface-variant: hsl(210, 15%, 85%);
  --color-outline-variant: hsla(210, 30%, 65%, 0.15);
  --shadow-ambient: 0 20px 40px -10px rgba(25, 28, 30, 0.08);
  --bg-gradient-primary: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%);
  --font-family-sans: "Inter", "Manrope", sans-serif;
  --font-family-mono: "SF Mono", "Menlo", "Monaco", "Consolas", monospace;
}
```

### Local Storage Type

```typescript
// src/lib/types.ts
export interface Transaction {
  id: string;
  amount: number;
  category: Category;
  date: Date;
}

export interface Category {
  id: string;
  name: string;
  type: "income" | "expense";
}
```

### Toast Notification Pattern

```typescript
import { toast } from "sonner";

toast.success("Operation completed");
toast.error("Something went wrong");
```
