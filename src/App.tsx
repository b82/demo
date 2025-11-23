/**
 * Main Application Component
 * 
 * Root component that manages routing and layout.
 * Uses Redux for state management instead of local state.
 * 
 * module App
 */

import { useMemo } from "react";
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

export type PageType = 'dashboard' | 'orders' | 'products' | 'clients' | 'reports' | 'settings' | 'design-system';

/**
 * Page component mapping for dynamic rendering
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
 * returns {JSX.Element} The rendered application
 */
export default function App() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.ui.currentPage);
  const sidebarCollapsed = useAppSelector((state) => state.ui.sidebarCollapsed);

  /**
   * Handles page navigation
   * param page - The page to navigate to
   */
  const handlePageChange = (page: PageType) => {
    dispatch(setCurrentPage(page));
  };

  /**
   * Renders the current page component
   * Uses useMemo to prevent unnecessary re-renders
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