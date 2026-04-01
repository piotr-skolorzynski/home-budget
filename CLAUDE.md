# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Home Budget application built with React 19, TypeScript, and Vite 8, using the modern "bundler mode" TypeScript configuration. The design system is called "The Editorial Ledger" - a premium financial app aesthetic that avoids standard utility-first patterns in favor of intentional asymmetry, tonal depth, and glassmorphism.

**Current State:** Phase 1 (Foundation) complete. All Tailwind config, typography, and glassmorphic navigation implemented. Phase 2 (Core Components) in progress.

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
├── App.tsx               # Root component (RouterProvider)
├── routes/               # React Router v7 routes
│   └── routes.ts         # Route definitions
├── components/           # Reusable UI components
│   ├── HomeLayout.tsx    # Main layout shell
│   ├── Navigation.tsx    # Glassmorphic header
│   ├── ThemeToggle.tsx   # Theme switcher
│   └── (FinancialCard, TransactionTable, BudgetCharts - upcoming)
├── lib/                  # Utility modules, types
│   └── types.ts          # TypeScript interfaces
└── hooks/                # Custom React hooks (upcoming)
```

### Key Dependencies

- **React Router v7:** Uses the new `loaders` and `actions` API
- **Tailwind CSS v4:** Uses `@theme` directive in index.css
- **DaisyUI:** Component library for Tailwind v4 (themes: winter, dracula)
- **Lucide React:** Icon set
- **Sonner:** Toast notifications (upcoming)
- **Recharts:** Data visualization (upcoming)

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
   - Primary gradient: #006591 → #0ea5e9 at 135° angle (winter theme)
   - Dark theme: Dracula palette with #bd93f9 → #ff79c6 gradient
   - Surface tokens: b1 (surface), b2 (surface-container), bc (on-surface)

5. **Glassmorphism:** Sticky headers use `surface` at 80% opacity with `backdrop-filter: blur(8px)`

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
- [x] Create global layout with glassmorphic navigation
- [x] Implement ThemeToggle component

### Phase 2: Core Components

- [ ] Port FinancialCard with tonal layering
- [ ] Port TransactionTable with multi-select/filtering
- [ ] Implement BudgetCharts with Recharts
- [ ] Add ambient shadows and glassmorphism to modals

### Phase 3: Data Layer

- [ ] Create TypeScript interfaces: Transaction, Category, Budget
- [ ] Implement LocalStorage CRUD service
- [ ] Integrate React Router v7 loaders/actions

### Phase 4: Polishing

- [ ] Add Sonner toasts for all interactions
- [ ] Audit for "No-Line Rule" compliance
- [ ] Ensure all charts in ResponsiveContainer
- [ ] Performance optimization and lazy loading

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
  --color-surface: var(--b1);
  --color-on-surface: var(--bc);
  --color-primary: var(--p);
  --color-primary-container: var(--pc);
  --color-surface-container: var(--b2);
  --color-surface-container-low: hsl(210, 18%, 95%);
  --color-surface-container-lowest: hsl(210, 16%, 93%);
  --color-surface-container-high: hsl(210, 20%, 97%);
  --color-outline-variant: hsla(210, 30%, 65%, 0.15);
  --shadow-ambient: 0 20px 40px -10px rgba(25, 28, 30, 0.08);
  --bg-gradient-primary: linear-gradient(
    135deg,
    #006591 0%,
    #0ea5e9 100%
  );
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

export interface Budget {
  id: string;
  category: string;
  limit: number;
  month: number;
}
```

### Toast Notification Pattern

```typescript
import { toast } from "sonner";

toast.success("Operation completed");
toast.error("Something went wrong");
```

### Glassmorphic Header Pattern

```tsx
<header className="sticky top-0 z-50 w-full glass-nav">
  <nav className="navbar container mx-auto px-4">
    {/* menu items with menu-glass class */}
  </nav>
</header>
```

### Financial Card Pattern

```tsx
<div className="financial-card">
  {/* All numbers within should use font-mono */}
  <span className="amount">1,234.56</span>
  <span className="date">2024-01-15</span>
</div>
```

### Button Pattern

```tsx
{/* Primary */}
<button className="btn btn-primary">Action</button>

{/* Secondary */}
<button className="btn btn-secondary">Cancel</button>

{/* Tertiary */}
<button className="btn btn-tertiary">Learn more</button>
```
