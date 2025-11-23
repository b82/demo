# Base Project Structure

## Directory Layout

```
dashboard_demo/
├── src/                          # Main source code
│   ├── App.tsx                   # App root component
│   ├── main.tsx                  # Application entry point
│   ├── index.css                 # Global styles and Tailwind config
│   │
│   ├── components/               # React components
│   │   ├── Layout.tsx            # Main layout with sidebar and header
│   │   │
│   │   ├── pages/                # Page components
│   │   │   ├── Dashboard.tsx     # Main dashboard page
│   │   │   ├── Orders.tsx        # Orders management page
│   │   │   ├── Products.tsx      # Products management page
│   │   │   ├── Clients.tsx       # Clients management page
│   │   │   ├── Reports.tsx       # Reports and analytics page
│   │   │   ├── Settings.tsx      # Settings page
│   │   │   └── DesignSystem.tsx  # Design system page
│   │   │
│   │   ├── ui/                   # Reusable UI components
│   │   │   ├── button.tsx        # Button component
│   │   │   ├── card.tsx          # Card component
│   │   │   ├── input.tsx         # Input component
│   │   │   ├── table.tsx         # Table component
│   │   │   ├── chart.tsx         # Chart component
│   │   │   └── ...               # Other UI components
│   │   │
│   │   └── figma/                # Figma-specific components
│   │       └── ImageWithFallback.tsx
│   │
│   ├── store/                    # Redux store and state management
│   │   ├── index.ts              # Redux store configuration
│   │   ├── hooks.ts              # Typed Redux hooks
│   │   │
│   │   ├── slices/               # Redux slices
│   │   │   └── uiSlice.ts        # UI state slice
│   │   │
│   │   └── api/                  # RTK Query APIs
│   │       └── dashboardApi.ts   # Dashboard data API
│   │
│   ├── styles/                   # Styles
│   │   ├── globals.css           # Global styles
│   │   └── utilities.css         # CSS utility classes
│   │
│   ├── lib/                      # Libraries and utilities
│   │   └── theme-utils.ts        # Theme management utilities
│   │
│   └── guidelines/               # Documentation and guidelines
│       └── Guidelines.md
│
├── build/                        # Production build (generated)
│   └── assets/                   # Compiled assets
│
├── node_modules/                 # npm dependencies
│
├── package.json                  # Project configuration and dependencies
├── package-lock.json             # Dependency lockfile
├── vite.config.ts                # Vite configuration
│
├── ARCHITECTURE.md               # Architecture documentation
├── CONTESTO_BASE.md              # Base dashboard context
├── STRUTTURA_BASE.md             # This file
├── README.md                     # Main documentation
└── CHANGELOG.md                  # Change log
```

## Component Breakdown

### 1. Entry Point (`main.tsx`)
- Initializes React
- Configures Redux Provider
- Renders App component
- Imports global styles

### 2. App Component (`App.tsx`)
- **Responsibility**: Routing and navigation
- **State Management**: Redux for current page
- **Pattern**: Container component handling navigation logic
- **Props**: None (uses Redux hooks)
- **Output**: Layout with dynamic content based on current page

### 3. Layout Component (`Layout.tsx`)
- **Responsibility**: Main layout structure
- **Components**: Sidebar, Header, Main Content Area
- **Features**:
  - Collapsible sidebar (desktop)
  - Mobile menu (mobile)
  - Header with search, notifications, profile
  - Theme management (dark/light)
  - Page navigation

### 4. Page Components (`pages/`)
Each page is a standalone component that:
- Receives data from the Redux store (when needed)
- Renders page-specific content
- Handles local user interactions
- Uses reusable UI components

#### Dashboard.tsx
- Shows key metrics
- Charts and data visualizations
- KPI cards
- Real-time stats

#### Orders.tsx
- Orders list
- Filters and search
- Order details
- Status management

#### Products.tsx
- Product catalog
- Grid/list view
- Category filters
- Product details

#### Clients.tsx
- Client list
- Contact information
- Purchase history
- Segmentation

#### Reports.tsx
- Configurable reports
- Analytical charts
- Data export
- Time filters

#### Settings.tsx
- Account configuration
- User preferences
- Team management
- Integrations

#### DesignSystem.tsx
- UI component showcase
- Pattern documentation
- Usage examples
- Style guide

### 5. UI Components (`components/ui/`)
Reusable components based on Radix UI:
- **Accessibility**: Accessible components out of the box
- **Styling**: Tailwind CSS with CSS variables
- **Composition**: Compound components where needed
- **TypeScript**: Full typing

Main components:
- `button.tsx` - Buttons with variants
- `card.tsx` - Card container
- `input.tsx` - Input fields
- `table.tsx` - Data tables
- `chart.tsx` - Recharts wrapper
- `dialog.tsx` - Modals
- `dropdown-menu.tsx` - Dropdown menus
- `tabs.tsx` - Tab navigation
- And many more...

## Redux Store Structure

### Store Configuration (`store/index.ts`)
```typescript
{
  ui: uiSlice.reducer,              // UI state
  [dashboardApi.reducerPath]: ...   // RTK Query API
}
```

### UI Slice (`store/slices/uiSlice.ts`)
Manages:
- `currentPage`: Current page
- `sidebarCollapsed`: Sidebar state
- `isDarkMode`: Dark/light theme
- `mobileMenuOpen`: Mobile menu

### Dashboard API (`store/api/dashboardApi.ts`)
RTK Query endpoints for:
- Dashboard data
- Orders
- Products
- Clients
- Reports

## Styles Structure

### `index.css`
- Tailwind CSS setup
- CSS variables for theming
- Reset and base styles
- Dark mode configuration

### `styles/globals.css`
- Global application styles
- Custom utility classes
- Animations and transitions

### `styles/utilities.css`
- Custom utility classes
- Helper classes
- Layout utilities

## Organization Patterns

### 1. Feature-Based Structure
Components are organized by feature/functionality:
- `pages/` - Main pages
- `ui/` - Reusable UI components
- `figma/` - Design-specific components

### 2. Separation of Concerns
- **Components**: UI presentation only
- **Store**: State logic and data fetching
- **Styles**: Styles separated by type

### 3. Type Safety
- TypeScript for all code
- Redux types generated automatically
- Interfaces for component props

### 4. Code Splitting
- Vite handles code splitting automatically
- Lazy loading for routes (when implemented)
- Separate vendor chunks

## Naming Conventions

### Files and Directories
- **Components**: PascalCase (`Dashboard.tsx`)
- **Utilities**: camelCase (`theme-utils.ts`)
- **Styles**: kebab-case (`globals.css`)
- **Store**: camelCase (`uiSlice.ts`)

### React Components
- **Components**: PascalCase (`const Dashboard = () => {}`)
- **Props**: camelCase (`currentPage`, `onPageChange`)
- **Hooks**: camelCase with `use` prefix (`useAppSelector`)

### Redux
- **Slices**: camelCase (`uiSlice`)
- **Actions**: camelCase (`setCurrentPage`, `toggleSidebar`)
- **Selectors**: camelCase (`selectCurrentPage`)

## Data Flow

```
API/Backend
    ↓
RTK Query (dashboardApi)
    ↓
Redux Store
    ↓
React Components (via hooks)
    ↓
UI Rendering
```

## Import Paths

### Absolute Imports
Paths are relative to `src/`:
```typescript
import { Layout } from "./components/Layout";
import { useAppSelector } from "./store/hooks";
```

### Component Imports
```typescript
// From components/ui
import { Button } from "./ui/button";
import { Card } from "./ui/card";

// From store
import { useAppSelector } from "../store/hooks";
import { setCurrentPage } from "../store/slices/uiSlice";
```

## Build and Output

### Development
- **Entry**: `src/main.tsx`
- **Output**: Vite dev server
- **Hot Reload**: Enabled

### Production
- **Entry**: `src/main.tsx`
- **Output**: `build/` directory
- **Chunks**:
  - `index-*.js` - Application code
  - `react-vendor-*.js` - React and dependencies
  - `redux-vendor-*.js` - Redux and dependencies
  - `ui-vendor-*.js` - UI libraries
  - `index-*.css` - Compiled styles

## Extending the Structure

### Add a New Page
1. Create a component in `src/components/pages/NewPage.tsx`
2. Add the type in `App.tsx` (`PageType`)
3. Add the mapping in `PAGE_COMPONENTS`
4. Add a navigation item in `Layout.tsx`

### Add a New UI Component
1. Create a file in `src/components/ui/new-component.tsx`
2. Follow existing Radix UI patterns
3. Use Tailwind CSS for styling
4. Export main components

### Add New Redux State
1. Create a slice in `src/store/slices/newSlice.ts`
2. Add the reducer to `store/index.ts`
3. Create actions and selectors
4. Use hooks in components

### Add a New API Endpoint
1. Add the endpoint in `src/store/api/dashboardApi.ts`
2. Use the generated hook in components
3. Handle loading/error states

## Best Practices

1. **Small Components**: Keep components focused and reusable
2. **Type Safety**: Always use TypeScript
3. **Performance**: Use memoization where necessary
4. **Accessibility**: Follow WCAG guidelines
5. **Documentation**: JSDoc for complex functions
6. **Testing**: Prepare structure for future tests
