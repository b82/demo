/**
 * Input Component Module
 * 
 * Provides a styled input component with accessibility features,
 * validation states, and dark mode support.
 * 
 * @module components/ui/input
 */

import * as React from "react";

import { cn } from "./utils";

/**
 * Input Component
 * 
 * @description A styled input element with built-in focus states, validation
 * styling, and accessibility features. Supports all standard input types and
 * HTML attributes.
 * 
 * @param {Object} props - Input component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {string} [props.type] - Input type (text, email, password, number, etc.)
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props - All standard input HTML attributes
 * 
 * @returns {JSX.Element} Styled input element
 * 
 * @example
 * ```tsx
 * <Input 
 *   type="email" 
 *   placeholder="Enter your email"
 *   className="w-full"
 * />
 * ```
 * 
 * @example
 * ```tsx
 * // With validation
 * <Input 
 *   type="text"
 *   aria-invalid={hasError}
 *   className={hasError ? "border-red-500" : ""}
 * />
 * ```
 * 
 * @remarks
 * - Includes focus-visible ring for accessibility
 * - Supports aria-invalid for validation states
 * - Dark mode compatible
 * - File input styling included
 * - Disabled state properly styled
 */
function Input({ className, type, ...props }: React.ComponentProps<"input">): JSX.Element {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
