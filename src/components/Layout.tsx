import { ReactNode, useState, useEffect } from "react";
import { PageType } from "../App";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  FileText, 
  Settings as SettingsIcon,
  Search,
  Bell,
  Globe,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  Palette,
  Menu,
  X
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";

interface LayoutProps {
  children: ReactNode;
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
  sidebarCollapsed: boolean;
  onSidebarToggle: () => void;
}

const navigationItems = [
  { id: 'dashboard' as PageType, label: 'Dashboard', icon: LayoutDashboard },
  { id: 'orders' as PageType, label: 'Orders', icon: ShoppingCart },
  { id: 'products' as PageType, label: 'Products', icon: Package },
  { id: 'clients' as PageType, label: 'Clients', icon: Users },
  { id: 'reports' as PageType, label: 'Reports', icon: FileText },
  { id: 'settings' as PageType, label: 'Settings', icon: SettingsIcon },
];

export function Layout({ children, currentPage, onPageChange, sidebarCollapsed, onSidebarToggle }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <aside 
        className={`bg-[var(--dashboard-surface)] border-r border-[var(--dashboard-border)] transition-all duration-300 flex-col ${
          sidebarCollapsed ? 'w-16' : 'w-64'
        } hidden md:flex`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-[var(--dashboard-border)]">
          {!sidebarCollapsed ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-black">S</span>
              </div>
              <span className="tracking-tight text-[var(--dashboard-text-primary)]">SalesFlow</span>
            </div>
          ) : (
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-black">S</span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-2 space-y-1 overflow-y-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                    : 'text-[var(--dashboard-text-muted)] hover:bg-[var(--dashboard-hover)] hover:text-[var(--dashboard-text-primary)]'
                } ${sidebarCollapsed ? 'justify-center' : ''}`}
                title={sidebarCollapsed ? item.label : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!sidebarCollapsed && <span>{item.label}</span>}
              </button>
            );
          })}
          
          {/* Design System Link */}
          <button
            onClick={() => onPageChange('design-system')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              currentPage === 'design-system'
                ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20' 
                : 'text-[var(--dashboard-text-muted)] hover:bg-[var(--dashboard-hover)] hover:text-[var(--dashboard-text-primary)]'
            } ${sidebarCollapsed ? 'justify-center' : ''}`}
            title={sidebarCollapsed ? 'Design System' : undefined}
          >
            <Palette className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && <span>Design System</span>}
          </button>
        </nav>

        {/* Collapse Toggle */}
        <div className="p-4 border-t border-[var(--dashboard-border)] hidden md:block">
          <Button
            variant="ghost"
            size="sm"
            onClick={onSidebarToggle}
            className={`w-full ${sidebarCollapsed ? 'px-0' : ''}`}
          >
            {sidebarCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Collapse
              </>
            )}
          </Button>
        </div>
      </aside>

      {/* Mobile Menu */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 bg-[var(--dashboard-surface)] border-r border-[var(--dashboard-border)] transition-transform duration-300 flex-col w-64 z-50 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden flex`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-[var(--dashboard-border)]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-black">S</span>
            </div>
            <span className="tracking-tight text-[var(--dashboard-text-primary)]">SalesFlow</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-2 space-y-1 overflow-y-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                    : 'text-[var(--dashboard-text-muted)] hover:bg-[var(--dashboard-hover)] hover:text-[var(--dashboard-text-primary)]'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
          
          {/* Design System Link */}
          <button
            onClick={() => {
              onPageChange('design-system');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              currentPage === 'design-system'
                ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20' 
                : 'text-[var(--dashboard-text-muted)] hover:bg-[var(--dashboard-hover)] hover:text-[var(--dashboard-text-primary)]'
            }`}
          >
            <Palette className="w-5 h-5 flex-shrink-0" />
            <span>Design System</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 bg-[var(--dashboard-surface)] border-b border-[var(--dashboard-border)] flex items-center justify-between px-4 md:px-6">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>

          <div className="flex-1 max-w-md">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[var(--dashboard-text-muted)]" />
              <Input 
                placeholder="Search..." 
                className="pl-10 bg-[var(--dashboard-bg)] border-[var(--dashboard-border)] focus:border-green-500/50"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-green-500 rounded-full"></span>
            </Button>

            {/* Language */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)]">
                <DropdownMenuItem className="text-green-500 focus:bg-[var(--dashboard-hover)] focus:text-green-500">EN - English</DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-[var(--dashboard-hover)] focus:text-[var(--dashboard-text-primary)]">ES - Spanish</DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-[var(--dashboard-hover)] focus:text-[var(--dashboard-text-primary)]">FR - French</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="hidden md:flex"
            >
              {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="text-left hidden lg:block">
                    <div className="text-sm text-[var(--dashboard-text-primary)]">John Doe</div>
                    <div className="text-xs text-[var(--dashboard-text-muted)]">Admin</div>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] w-48 text-[var(--dashboard-text-primary)]">
                <DropdownMenuLabel className="text-[var(--dashboard-text-primary)]">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[var(--dashboard-border)]" />
                <DropdownMenuItem className="focus:bg-[var(--dashboard-hover)] focus:text-[var(--dashboard-text-primary)]">Profile</DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-[var(--dashboard-hover)] focus:text-[var(--dashboard-text-primary)]">Billing</DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-[var(--dashboard-hover)] focus:text-[var(--dashboard-text-primary)]">Team</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-[var(--dashboard-border)]" />
                <DropdownMenuItem className="text-red-500 focus:bg-[var(--dashboard-hover)] focus:text-red-500">Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-[var(--dashboard-bg)] p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}