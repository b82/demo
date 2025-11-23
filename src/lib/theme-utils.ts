/**
 * Theme Utility Functions Module
 * 
 * Provides helper functions and type-safe access to theme variables
 * for both light and dark modes. Includes theme detection, toggling,
 * and CSS variable management.
 * 
 * @module lib/theme-utils
 */

/**
 * Gets the current theme mode from the DOM
 * 
 * @description Reads the current theme by checking for the 'dark' class
 * on the document element. Returns 'light' if dark class is not present.
 * 
 * @returns {'light' | 'dark'} Current theme mode
 * 
 * @example
 * ```tsx
 * const theme = getCurrentTheme();
 * if (theme === 'dark') {
 *   // Apply dark mode styles
 * }
 * ```
 */
export function getCurrentTheme(): 'light' | 'dark' {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

/**
 * Toggles the theme between light and dark
 * 
 * @description Switches the theme by adding or removing the 'dark' class
 * from the document element. Returns the new theme after toggling.
 * 
 * @returns {'light' | 'dark'} New theme mode after toggle
 * 
 * @example
 * ```tsx
 * const newTheme = toggleTheme();
 * console.log(`Theme switched to ${newTheme}`);
 * ```
 */
export function toggleTheme(): 'light' | 'dark' {
  const isDark = getCurrentTheme() === 'dark';
  if (isDark) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
  return getCurrentTheme();
}

/**
 * CSS Custom Property Names for Theming
 * 
 * @description Constants for CSS custom property names used throughout the application.
 * Use these with `var()` in your components for consistent theming.
 * 
 * @constant {Object<string, string>}
 * 
 * @example
 * ```tsx
 * <div style={{ backgroundColor: `var(${ThemeVars.background})` }}>
 *   Content
 * </div>
 * ```
 * 
 * @example
 * ```css
 * .my-component {
 *   color: var(--dashboard-text-primary);
 *   border: 1px solid var(--dashboard-border);
 * }
 * ```
 */
export const ThemeVars = {
  // Background colors
  /** Main background color */
  background: '--dashboard-bg',
  /** Surface/card background color */
  surface: '--dashboard-surface',
  /** Subtle surface background color */
  surfaceSubtle: '--dashboard-surface-subtle',
  
  // Borders
  /** Border color */
  border: '--dashboard-border',
  
  // Text colors
  /** Primary text color */
  textPrimary: '--dashboard-text-primary',
  /** Secondary text color */
  textSecondary: '--dashboard-text-secondary',
  /** Muted/subdued text color */
  textMuted: '--dashboard-text-muted',
  
  // Accent colors
  /** Primary accent color (green) */
  accentPrimary: '--dashboard-accent-primary',
  /** Secondary accent color (purple) */
  accentSecondary: '--dashboard-accent-secondary',
  
  // Status colors
  /** Success status color */
  success: '--dashboard-success',
  /** Warning status color */
  warning: '--dashboard-warning',
  /** Error status color */
  error: '--dashboard-error',
  
  // Chart colors
  /** Chart grid line color */
  chartGrid: '--dashboard-chart-grid',
  /** Hover state background color */
  hover: '--dashboard-hover',
} as const;

/**
 * Semantic Color Tokens for Light and Dark Modes
 * 
 * @description Color palette definitions for both light and dark themes.
 * Provides consistent color values that adapt to the current theme.
 * 
 * @constant {Object}
 * 
 * @example
 * ```tsx
 * const bgColor = ThemeColors[getCurrentTheme()].background;
 * ```
 */
export const ThemeColors = {
  /** Light theme color palette */
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
  /** Dark theme color palette */
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
 * 
 * @description Retrieves a color value from the theme palette based on the
 * current theme mode (light or dark).
 * 
 * @param {keyof typeof ThemeColors.light} key - Color key to retrieve
 * 
 * @returns {string} Hex color value for the current theme
 * 
 * @example
 * ```tsx
 * const bgColor = getThemeColor('background');
 * const textColor = getThemeColor('textPrimary');
 * ```
 */
export function getThemeColor(key: keyof typeof ThemeColors.light): string {
  const theme = getCurrentTheme();
  return ThemeColors[theme][key];
}

/**
 * Helper to generate CSS var() string
 * 
 * @description Creates a CSS variable reference string for use in inline styles
 * or CSS-in-JS solutions.
 * 
 * @param {string} variable - CSS custom property name (with or without '--' prefix)
 * 
 * @returns {string} CSS var() function string
 * 
 * @example
 * ```tsx
 * const bgVar = cssVar(ThemeVars.background);
 * // Returns: 'var(--dashboard-bg)'
 * 
 * <div style={{ backgroundColor: cssVar('--dashboard-bg') }}>
 *   Content
 * </div>
 * ```
 */
export function cssVar(variable: string): string {
  return `var(${variable})`;
}
