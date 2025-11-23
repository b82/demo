# Dashboard Base Context

## Overview

This dashboard is a modern web application for managing and visualizing sales data and analytics. The project demonstrates a complete, production-style UI for a sales management system.

## Project Purpose

The **SalesFlow** dashboard is designed to:

- **Data Visualization**: Show key metrics, charts, and real-time statistics
- **Operational Management**: Manage orders, products, clients, and reports
- **Analytics**: Provide tools to analyze business performance
- **User Experience**: Offer a modern, responsive, and accessible interface

## Key Features

### 1. Main Dashboard
- Key metrics (KPIs)
- Interactive sales charts
- Real-time statistics
- Business performance overview

### 2. Order Management
- Orders list
- Advanced filters and search
- Order details
- Order status management

### 3. Product Management
- Product catalog
- Detailed information
- Inventory management
- Categories and classifications

### 4. Client Management
- Client database
- Contact information
- Purchase history
- Client segmentation

### 5. Reports and Analytics
- Custom reports
- Data export
- Comparative analysis
- Trends and forecasts

### 6. Settings
- Account configuration
- User preferences
- Team management
- Integrations

### 7. Design System
- Reusable UI components
- Style guide
- Design patterns
- Component documentation

## Technical Characteristics

### Architecture
- **Pattern**: Single Page Application (SPA)
- **State Management**: Redux Toolkit with RTK Query
- **Routing**: Client-side navigation driven by Redux state
- **Styling**: Tailwind CSS with CSS variables for theming

### Themes and Customization
- **Dark Mode**: Full dark theme support
- **Light Mode**: Default light theme
- **CSS Variables**: Variable-based dynamic theming
- **Responsive Design**: Adaptive layout for mobile, tablet, and desktop

### Performance
- **Code Splitting**: Lazy loading of components
- **Memoization**: React.memo, useMemo, and useCallback to reduce re-renders
- **CSS Transitions**: Hardware-accelerated animations
- **Caching**: RTK Query for automatic API call caching

### Accessibility
- **Radix UI**: Accessible components out of the box
- **ARIA Labels**: Full screen reader support
- **Keyboard Navigation**: Complete keyboard navigation
- **Focus Management**: Proper focus handling

## Navigation Flow

1. **App Launch**: The app loads and shows the main dashboard
2. **Sidebar Navigation**: Users move between sections via the sidebar
3. **Content Rendering**: The selected page content renders dynamically
4. **Interactions**: Users interact with components, filter data, and adjust views
5. **Theme**: Users can switch theme (light/dark) at any time

## Application State

### UI State (Redux)
- **currentPage**: Current active page
- **sidebarCollapsed**: Sidebar collapsed state
- **isDarkMode**: Theme mode (dark/light)
- **mobileMenuOpen**: Mobile menu state

### API State (RTK Query)
- **Dashboard Data**: Main dashboard data
- **Orders**: Order list and details
- **Products**: Product catalog
- **Clients**: Client database
- **Reports**: Report data

## Base Configuration

### Environment Variables
```env
VITE_API_URL=http://localhost:3001/api
```

### Core Dependencies
- React 18.3+
- TypeScript
- Redux Toolkit
- Vite
- Tailwind CSS
- Radix UI
- Recharts

## Basic Usage

### Development
```bash
npm install    # Install dependencies
npm run dev    # Start dev server
```

### Production
```bash
npm run build  # Create production build
npm run deploy # Deploy to GitHub Pages
```

## Code Conventions

- **TypeScript**: Strong typing for safer code
- **Functional Components**: React Hooks
- **Memoization**: Performance where needed
- **CSS Variables**: Theming through CSS vars
- **JSDoc**: Inline documentation for functions and components

## Next Improvements

- [ ] User authentication
- [ ] Permissions and roles
- [ ] Real-time notifications
- [ ] Data export (CSV, PDF)
- [ ] External API integration
- [ ] Automated tests
- [ ] Service worker for offline support
