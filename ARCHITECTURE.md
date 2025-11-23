# Architecture Documentation

## Overview

This dashboard application is built with React, TypeScript, Redux Toolkit, and Vite. It follows modern best practices for scalability, performance, and maintainability.

## Tech Stack

- **React 18.3+** - UI library with latest features
- **TypeScript** - Type safety and better developer experience
- **Redux Toolkit** - State management with RTK Query for data fetching
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Recharts** - Charting library

## Project Structure

```
src/
├── store/                 # Redux store configuration
│   ├── index.ts          # Store setup and configuration
│   ├── hooks.ts          # Typed Redux hooks
│   ├── slices/           # Redux slices
│   │   └── uiSlice.ts    # UI state management
│   └── api/              # RTK Query APIs
│       └── dashboardApi.ts  # Dashboard data API
├── components/           # React components
│   ├── Layout.tsx        # Main layout component
│   ├── pages/           # Page components
│   └── ui/              # Reusable UI components
├── styles/              # Stylesheets
│   ├── globals.css      # Global styles
│   └── utilities.css    # CSS utility classes
└── lib/                 # Utility functions
```

## State Management

### Redux Toolkit

The application uses Redux Toolkit for centralized state management:

- **UI State** (`uiSlice`): Manages sidebar collapse, current page, theme, and mobile menu state
- **API State** (`dashboardApi`): Handles data fetching and caching via RTK Query

### Benefits

- Predictable state updates
- Time-travel debugging with Redux DevTools
- Automatic caching and refetching with RTK Query
- Type-safe with TypeScript

## Performance Optimizations

### React Optimizations

1. **React.memo**: Prevents unnecessary re-renders of components
2. **useMemo**: Memoizes expensive calculations
3. **useCallback**: Memoizes callback functions
4. **Code Splitting**: Automatic code splitting via Vite

### CSS Optimizations

1. **CSS Transitions**: Replaces JavaScript animations where possible
2. **CSS Variables**: Dynamic theming without JS manipulation
3. **Container Queries**: Modern CSS for responsive design
4. **Transform Utilities**: Hardware-accelerated transforms

### Build Optimizations

1. **Tree Shaking**: Removes unused code
2. **Code Splitting**: Separate chunks for vendor libraries
3. **Minification**: ESBuild for fast minification
4. **Source Maps**: Disabled in production for smaller bundles

## Real-Time Data

### RTK Query

The application uses RTK Query for data fetching:

- **Automatic Caching**: Reduces unnecessary API calls
- **Polling**: Configurable polling intervals for real-time updates
- **Optimistic Updates**: Instant UI updates before server confirmation
- **Error Handling**: Built-in error states and retry logic

### API Configuration

```typescript
// Base URL from environment variable
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Polling interval for real-time updates
pollingInterval: 30000 // 30 seconds
```

## Component Patterns

### Container/Presentational Pattern

- **Container Components**: Handle data fetching and state management
- **Presentational Components**: Focus on UI rendering

### Composition Pattern

- Small, reusable components
- Props composition for flexibility
- Compound components for complex UI

## Best Practices

### TypeScript

- Strict type checking enabled
- Type-safe Redux hooks
- Interface definitions for all data structures

### Code Organization

- Feature-based folder structure
- Co-located related files
- Clear separation of concerns

### Documentation

- JSDoc comments for all components and functions
- Inline comments for complex logic
- Architecture documentation (this file)

## Environment Variables

```env
VITE_API_URL=http://localhost:3001/api
```

## Development Workflow

1. **Development**: `npm run dev` - Starts Vite dev server
2. **Build**: `npm run build` - Creates production build
3. **Deploy**: `npm run deploy` - Deploys to GitHub Pages

## Future Improvements

- [ ] Add unit tests with Vitest
- [ ] Add E2E tests with Playwright
- [ ] Implement WebSocket for real-time updates
- [ ] Add service worker for offline support
- [ ] Implement virtual scrolling for large lists
- [ ] Add error boundaries for better error handling

