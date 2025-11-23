/**
 * Theme utility functions and constants for the Sales Analytics Dashboard
 * 
 * This file provides helper functions and type-safe access to theme variables
 * for both light and dark modes.
 */

/**
 * Gets the current theme mode from the DOM
 */
export function getCurrentTheme(): 'light' | 'dark' {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

/**
 * Toggles the theme between light and dark
 */
export function toggleTheme() {
  const isDark = getCurrentTheme() === 'dark';
  if (isDark) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
  return getCurrentTheme();
}

/**
 * CSS custom property names for theming
 * Use these with `var()` in your components
 */
export const ThemeVars = {
  // Background colors
  background: '--dashboard-bg',
  surface: '--dashboard-surface',
  surfaceSubtle: '--dashboard-surface-subtle',
  
  // Borders
  border: '--dashboard-border',
  
  // Text colors
  textPrimary: '--dashboard-text-primary',
  textSecondary: '--dashboard-text-secondary',
  textMuted: '--dashboard-text-muted',
  
  // Accent colors
  accentPrimary: '--dashboard-accent-primary',
  accentSecondary: '--dashboard-accent-secondary',
  
  // Status colors
  success: '--dashboard-success',
  warning: '--dashboard-warning',
  error: '--dashboard-error',
  
  // Chart colors
  chartGrid: '--dashboard-chart-grid',
  hover: '--dashboard-hover',
} as const;

/**
 * Semantic color tokens for light and dark modes
 */
export const ThemeColors = {
  light: {
    background: '#F5F6F8',
    surface: '#FFFFFF',
    surfaceSubtle: '#F0F1F3',
    border: '#D9DCE1',
    textPrimary: '#1A1A1A',
    textSecondary: '#4A4A4A',
    textMuted: '#6B6B6B',
    accentPrimary: '#2ECC71',
    accentSecondary: '#9B6BFF',
    success: '#27AE60',
    warning: '#F1C40F',
    error: '#E74C3C',
    chartGrid: '#E0E2E6',
    hover: '#F2F3F5',
  },
  dark: {
    background: '#0F0F0F',
    surface: '#1C1C1C',
    surfaceSubtle: '#2A2A2A',
    border: '#2A2A2A',
    textPrimary: '#FFFFFF',
    textSecondary: '#D1D5DB',
    textMuted: '#9CA3AF',
    accentPrimary: '#22c55e',
    accentSecondary: '#a855f7',
    success: '#22c55e',
    warning: '#eab308',
    error: '#ef4444',
    chartGrid: '#2A2A2A',
    hover: '#2A2A2A',
  },
} as const;

/**
 * Get a theme color value for the current theme
 */
export function getThemeColor(key: keyof typeof ThemeColors.light): string {
  const theme = getCurrentTheme();
  return ThemeColors[theme][key];
}

/**
 * Helper to generate CSS var() string
 */
export function cssVar(variable: string): string {
  return `var(${variable})`;
}
