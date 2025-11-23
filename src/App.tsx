import { useState } from "react";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/pages/Dashboard";
import { Orders } from "./components/pages/Orders";
import { Products } from "./components/pages/Products";
import { Clients } from "./components/pages/Clients";
import { Reports } from "./components/pages/Reports";
import { Settings } from "./components/pages/Settings";
import { DesignSystem } from "./components/pages/DesignSystem";

export type PageType = 'dashboard' | 'orders' | 'products' | 'clients' | 'reports' | 'settings' | 'design-system';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'orders':
        return <Orders />;
      case 'products':
        return <Products />;
      case 'clients':
        return <Clients />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      case 'design-system':
        return <DesignSystem />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Layout 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        sidebarCollapsed={sidebarCollapsed}
        onSidebarToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      >
        {renderPage()}
      </Layout>
    </div>
  );
}