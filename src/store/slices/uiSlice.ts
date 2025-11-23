/**
 * UI State Slice Module
 * 
 * Manages UI-related state such as sidebar collapse, current page, theme, and mobile menu.
 * Uses Redux Toolkit's createSlice for simplified reducer and action creation.
 * 
 * @module store/slices/uiSlice
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageType } from '../../App';

/**
 * UI State Interface
 * 
 * @description Defines the shape of the UI state slice in the Redux store.
 * Contains all UI-related application state.
 * 
 * @interface UIState
 * @property {PageType} currentPage - Current active page in the dashboard
 * @property {boolean} sidebarCollapsed - Whether the sidebar is collapsed (desktop only)
 * @property {boolean} isDarkMode - Whether dark mode theme is enabled
 * @property {boolean} mobileMenuOpen - Whether the mobile navigation menu is open
 */
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

/**
 * Initial UI state values
 * 
 * @constant {UIState}
 * @default
 */
const initialState: UIState = {
  currentPage: 'dashboard',
  sidebarCollapsed: false,
  isDarkMode: false,
  mobileMenuOpen: false,
};

/**
 * UI Redux Slice
 * 
 * @description Redux Toolkit slice containing reducers and actions for UI state management.
 * Uses Immer under the hood for immutable state updates.
 * 
 * @example
 * ```tsx
 * // Dispatch actions
 * dispatch(setCurrentPage('orders'));
 * dispatch(toggleSidebar());
 * dispatch(toggleTheme());
 * ```
 */
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    /**
     * Sets the current active page
     * 
     * @param {UIState} state - Current UI state (automatically handled by Immer)
     * @param {PayloadAction<PageType>} action - Action containing the page type to set
     * 
     * @example
     * ```tsx
     * dispatch(setCurrentPage('dashboard'));
     * dispatch(setCurrentPage('orders'));
     * ```
     */
    setCurrentPage: (state, action: PayloadAction<PageType>): void => {
      state.currentPage = action.payload;
    },
    
    /**
     * Toggles sidebar collapsed state
     * 
     * @description Switches between collapsed and expanded sidebar states.
     * 
     * @param {UIState} state - Current UI state (automatically handled by Immer)
     * 
     * @example
     * ```tsx
     * dispatch(toggleSidebar()); // Collapses if expanded, expands if collapsed
     * ```
     */
    toggleSidebar: (state): void => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
    
    /**
     * Sets sidebar collapsed state explicitly
     * 
     * @param {UIState} state - Current UI state (automatically handled by Immer)
     * @param {PayloadAction<boolean>} action - Action containing the collapsed state (true = collapsed)
     * 
     * @example
     * ```tsx
     * dispatch(setSidebarCollapsed(true));  // Collapse sidebar
     * dispatch(setSidebarCollapsed(false)); // Expand sidebar
     * ```
     */
    setSidebarCollapsed: (state, action: PayloadAction<boolean>): void => {
      state.sidebarCollapsed = action.payload;
    },
    
    /**
     * Toggles dark mode theme
     * 
     * @description Switches between light and dark themes.
     * 
     * @param {UIState} state - Current UI state (automatically handled by Immer)
     * 
     * @example
     * ```tsx
     * dispatch(toggleTheme()); // Switches to opposite theme
     * ```
     */
    toggleTheme: (state): void => {
      state.isDarkMode = !state.isDarkMode;
    },
    
    /**
     * Sets dark mode explicitly
     * 
     * @param {UIState} state - Current UI state (automatically handled by Immer)
     * @param {PayloadAction<boolean>} action - Action containing the dark mode state (true = dark mode)
     * 
     * @example
     * ```tsx
     * dispatch(setTheme(true));  // Enable dark mode
     * dispatch(setTheme(false)); // Enable light mode
     * ```
     */
    setTheme: (state, action: PayloadAction<boolean>): void => {
      state.isDarkMode = action.payload;
    },
    
    /**
     * Toggles mobile menu open state
     * 
     * @description Opens or closes the mobile navigation menu.
     * 
     * @param {UIState} state - Current UI state (automatically handled by Immer)
     * 
     * @example
     * ```tsx
     * dispatch(toggleMobileMenu()); // Opens if closed, closes if open
     * ```
     */
    toggleMobileMenu: (state): void => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    
    /**
     * Sets mobile menu open state explicitly
     * 
     * @param {UIState} state - Current UI state (automatically handled by Immer)
     * @param {PayloadAction<boolean>} action - Action containing the menu state (true = open)
     * 
     * @example
     * ```tsx
     * dispatch(setMobileMenuOpen(true));  // Open menu
     * dispatch(setMobileMenuOpen(false)); // Close menu
     * ```
     */
    setMobileMenuOpen: (state, action: PayloadAction<boolean>): void => {
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

