/**
 * UI State Slice
 * 
 * Manages UI-related state such as sidebar collapse, current page, theme, and mobile menu.
 * 
 * module store/slices/uiSlice
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageType } from '../../App';

interface UIState {
  /** Current active page in the dashboard */
  currentPage: PageType;
  /** Whether the sidebar is collapsed */
  sidebarCollapsed: boolean;
  /** Whether dark mode is enabled */
  isDarkMode: boolean;
  /** Whether mobile menu is open */
  mobileMenuOpen: boolean;
}

const initialState: UIState = {
  currentPage: 'dashboard',
  sidebarCollapsed: false,
  isDarkMode: false,
  mobileMenuOpen: false,
};

/**
 * UI slice with reducers for managing UI state
 */
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    /**
     * Sets the current active page
     * param state - Current UI state
     * param action - Action containing the page type
     */
    setCurrentPage: (state, action: PayloadAction<PageType>) => {
      state.currentPage = action.payload;
    },
    
    /**
     * Toggles sidebar collapsed state
     * param state - Current UI state
     */
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
    
    /**
     * Sets sidebar collapsed state explicitly
     * param state - Current UI state
     * param action - Action containing the collapsed state
     */
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.sidebarCollapsed = action.payload;
    },
    
    /**
     * Toggles dark mode
     * param state - Current UI state
     */
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    
    /**
     * Sets dark mode explicitly
     * param state - Current UI state
     * param action - Action containing the dark mode state
     */
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
    
    /**
     * Toggles mobile menu open state
     * param state - Current UI state
     */
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    
    /**
     * Sets mobile menu open state explicitly
     * param state - Current UI state
     * param action - Action containing the mobile menu state
     */
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
  },
});

export const {
  setCurrentPage,
  toggleSidebar,
  setSidebarCollapsed,
  toggleTheme,
  setTheme,
  toggleMobileMenu,
  setMobileMenuOpen,
} = uiSlice.actions;

