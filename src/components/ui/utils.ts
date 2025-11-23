/**
 * Utility Functions Module
 * 
 * Provides utility functions for common UI operations, particularly
 * class name merging and conditional styling.
 * 
 * @module components/ui/utils
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges and deduplicates Tailwind CSS class names
 * 
 * @description Combines clsx and tailwind-merge to intelligently merge class names.
 * Handles conditional classes and resolves Tailwind CSS conflicts by keeping
 * the last conflicting class (following Tailwind's specificity rules).
 * 
 * @param {...ClassValue} inputs - Class names or conditional class objects to merge
 * 
 * @returns {string} Merged and deduplicated class string
 * 
 * @example
 * ```tsx
 * // Basic usage
 * cn('px-4', 'py-2') // 'px-4 py-2'
 * 
 * // Conditional classes
 * cn('base-class', isActive && 'active-class') // 'base-class active-class' or 'base-class'
 * 
 * // Resolving conflicts (last one wins)
 * cn('px-4', 'px-8') // 'px-8'
 * 
 * // With objects
 * cn({ 'text-red': hasError, 'text-green': !hasError })
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
