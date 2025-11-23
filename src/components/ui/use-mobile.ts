/**
 * Mobile Detection Hook Module
 * 
 * Provides a React hook for detecting mobile viewport sizes
 * with responsive breakpoint monitoring.
 * 
 * @module components/ui/use-mobile
 */

import * as React from "react";

/**
 * Breakpoint width in pixels for mobile detection
 * 
 * @constant {number}
 * @default 768
 */
const MOBILE_BREAKPOINT = 768;

/**
 * Hook to detect if the current viewport is mobile-sized
 * 
 * @description Monitors window width and media queries to determine if
 * the current viewport is below the mobile breakpoint. Updates reactively
 * when the window is resized.
 * 
 * @returns {boolean} True if viewport width is below mobile breakpoint, false otherwise
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isMobile = useIsMobile();
 *   
 *   return (
 *     <div>
 *       {isMobile ? <MobileView /> : <DesktopView />}
 *     </div>
 *   );
 * }
 * ```
 * 
 * @example
 * ```tsx
 * // Conditional rendering based on mobile state
 * const isMobile = useIsMobile();
 * const columns = isMobile ? 1 : 3;
 * ```
 * 
 * @remarks
 * - Uses matchMedia API for efficient event listening
 * - Initializes with undefined to prevent hydration mismatches
 * - Automatically cleans up event listeners on unmount
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    /**
     * Media query listener for mobile breakpoint
     * 
     * @private
     */
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    /**
     * Handler for viewport size changes
     * 
     * @private
     */
    const onChange = (): void => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
