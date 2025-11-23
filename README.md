
  # Sales Analytics Dashboard

  React/TypeScript
  
  ## Tech stack
  - React 18 + TypeScript
  - Vite (dev server/build)
  - Redux Toolkit + RTK Query (state and data)
  - Tailwind CSS + CSS variables (light/dark theming)
  - Radix UI primitives
  - Recharts (charts)

  ## Project structure
  ```
  src/
    App.tsx             # Root with internal routing and layout
    main.tsx            # Vite/React entry
    index.css           # Global styles + Tailwind
    components/
      Layout.tsx        # Sidebar, header, theming, mobile menu
      pages/            # Dashboard, Orders, Products, Clients, Reports, Settings, DesignSystem
      ui/               # Reusable components (button, card, dialog, dropdown, etc.)
      figma/            # Helpers for Figma assets
    store/
      index.ts          # Store configuration
      slices/uiSlice.ts # UI state (page, sidebar, theme, mobile menu)
      api/dashboardApi.ts # RTK Query endpoints
    styles/             # globals.css, utilities.css
    lib/                # Utilities (e.g., theme-utils)
  Root config: vite.config.ts, package.json, README.md, ARCHITECTURE.md, STRUTTURA_BASE.md, CONTESTO_BASE.md, CHANGELOG.md
  ```

  ## Definition of Done (DoD)
  - Build and dev server succeed: `npm run dev` and `npm run build` without errors/blockers.
  - Responsive UI: layout, mobile menu, and theme toggle work on mobile and desktop viewports.
  - No browser console errors; blocking warnings resolved.
  - Light/dark themes consistent (CSS vars) and toggle accessible on desktop/mobile.
  - Manual test of main sections (Dashboard, Orders, Products, Clients, Reports, Settings) via sidebar/header navigation.
  - Documentation updated (README and changelog when needed) for new features/changes.

  ## Running the code
  - Install: `npm i`
  - Develop: `npm run dev` and open the URL shown by Vite
  
