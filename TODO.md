# 📘 Project Roadmap: "The Editorial Ledger" (RRv7 + Tailwind)

## Phase 1: Environment & Foundation

- [ ] **Step 1.1: Project Initialization**
  - Install React Router v7, Tailwind CSS, DaisyUI, Lucide React, and Sonner.
  - Setup the folder structure: `src/routes`, `src/components`, `src/lib`, `src/hooks`.
- [ ] **Step 1.2: Design System Configuration (`tailwind.config.js`)**
  - Implement custom color scale: `surface`, `surface-container-low/lowest`, `primary`, `on_surface`, `outline_variant`.
  - Define "The Signature Gradient" utility (135° linear: #006591 to #0ea5e9).
  - Configure DaisyUI themes: `winter` (Light) and `dracula` (Dark).
- [ ] **Step 1.3: Global Typography & Layers**
  - Setup Inter/Manrope for UI and Force `font-mono` for all financial/numerical data.
  - Apply the "No-Line Rule": Use background shifts instead of borders for sectioning.

## Phase 2: Core Layout & Navigation

- [ ] **Step 2.1: Root Layout (`src/root.tsx`)**
  - Create the main application shell with RRv7 `<Outlet />`.
  - Implement the Glassmorphic Navbar (top for desktop, bottom for mobile) using `backdrop-blur(8px)`.
  - Global `Toaster` (Sonner) integration styled for Editorial UI.

## Phase 3: Component Architecture (HTML to React)

- [ ] **Step 3.1: Atomic Components**
  - Port `FinancialCard.tsx`: Tonal layering, intentional asymmetry, and mono-font data.
  - Port `TransactionTable.tsx`: Multi-select, filtering, and badge categories.
- [ ] **Step 3.2: Data Visualization**
  - Implement `BudgetCharts.tsx` using Recharts (3px stroke, no vertical grid, 10% opacity horizontal grid).

## Phase 4: Data Layer & Logic

- [ ] **Step 4.1: Local Storage Service**
  - Create TypeScript interfaces for `Transaction`, `Category`, and `Budget`.
  - Implement CRUD logic using Browser LocalStorage.
- [ ] **Step 4.2: RRv7 Data APIs**
  - Integrate `loaders` for data fetching and `actions` for form submissions (CRUD).

## Phase 5: Polishing & Editorial Feel

- [ ] **Step 5.1: Transitions & Feedback**
  - Add Sonner `toast.success()` notifications for all user interactions.
  - Ensure all charts are wrapped in `ResponsiveContainer`.
- [ ] **Step 5.2: Final Audit**
  - Strict check of the "No-Line Rule" and spacing (p-12 to p-16).
