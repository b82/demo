/**
 * Main Application Component Module
 * 
 * Root component that manages routing and layout.
 * Uses Redux for state management instead of local state.
 * 
 * @module App
 */

import React, { useMemo } from "react";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { setCurrentPage } from "./store/slices/uiSlice";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/pages/Dashboard";
import { Orders } from "./components/pages/Orders";
import { Products } from "./components/pages/Products";
import { Clients } from "./components/pages/Clients";
import { Reports } from "./components/pages/Reports";
import { Settings } from "./components/pages/Settings";
import { DesignSystem } from "./components/pages/DesignSystem";

/**
 * Page Type Definition
 * 
 * @description Union type representing all available pages in the application.
 * Used for type-safe page navigation and routing.
 * 
 * @typedef {'dashboard' | 'orders' | 'products' | 'clients' | 'reports' | 'settings' | 'design-system'} PageType
 */
export type PageType = 'dashboard' | 'orders' | 'products' | 'clients' | 'reports' | 'settings' | 'design-system';

/**
 * Page Component Mapping
 * 
 * @description Maps page types to their corresponding React components.
 * Used for dynamic page rendering based on current route.
 * 
 * @constant {Record<PageType, () => JSX.Element>}
 * 
 * @example
 * ```tsx
 * const PageComponent = PAGE_COMPONENTS['dashboard'];
 * return <PageComponent />;
 * ```
 */
const PAGE_COMPONENTS: Record<PageType, () => JSX.Element> = {
  dashboard: Dashboard,
  orders: Orders,
  products: Products,
  clients: Clients,
  reports: Reports,
  settings: Settings,
  'design-system': DesignSystem,
};

/**
 * Main App Component
 * 
 * @description Root application component that manages page navigation,
 * layout rendering, and Redux state integration. Handles dynamic page
 * component rendering based on current route state.
 * 
 * @returns {JSX.Element} The rendered application with layout and current page
 * 
 * @example
 * ```tsx
 * import App from './App';
 * 
 * function Root() {
 *   return <App />;
 * }
 * ```
 * 
 * @remarks
 * - Uses Redux for centralized state management
 * - Memoizes page component to prevent unnecessary re-renders
 * - Falls back to dashboard page if invalid page type is selected
 */
export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.ui.currentPage);
  const sidebarCollapsed = useAppSelector((state) => state.ui.sidebarCollapsed);

  /**
   * Handles page navigation
   * 
   * @description Dispatches a Redux action to change the current page.
   * Updates the UI state which triggers a re-render with the new page component.
   * 
   * @param {PageType} page - The page type to navigate to
   * 
   * @example
   * ```tsx
   * handlePageChange('orders');
   * handlePageChange('dashboard');
   * ```
   */
  const handlePageChange = (page: PageType): void => {
    dispatch(setCurrentPage(page));
  };

  /**
   * Renders the current page component
   * 
   * @description Memoized page component renderer. Prevents unnecessary
   * re-renders by only updating when currentPage changes.
   * 
   * @returns {JSX.Element} The current page component
   * 
   * @remarks
   * Uses useMemo to optimize performance by caching the component
   * until currentPage changes. Falls back to dashboard if invalid page.
   */
  const currentPageComponent = useMemo(() => {
    const PageComponent = PAGE_COMPONENTS[currentPage] ?? PAGE_COMPONENTS.dashboard;
    return <PageComponent />;
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Layout 
        currentPage={currentPage} 
        onPageChange={handlePageChange}
        sidebarCollapsed={sidebarCollapsed}
      >
        {currentPageComponent}
      </Layout>
    </div>
  );
}