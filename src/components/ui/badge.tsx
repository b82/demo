/**
 * Badge Component Module
 * 
 * Provides a flexible badge component for displaying labels, status indicators,
 * and tags. Supports multiple variants and composition with Radix UI Slot.
 * 
 * @module components/ui/badge
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

/**
 * Badge variant styles configuration
 * 
 * @description Defines all visual variants for badges using CVA.
 * Includes default, secondary, destructive, and outline variants.
 * 
 * @constant {Function}
 */
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

/**
 * Badge Component
 * 
 * @description A flexible badge component for displaying labels, status indicators,
 * or tags. Supports multiple variants and can be composed with other components
 * using the asChild prop.
 * 
 * @param {Object} props - Badge component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {"default" | "secondary" | "destructive" | "outline"} [props.variant="default"] - Visual variant of the badge
 * @param {boolean} [props.asChild=false] - If true, renders as a Slot component for composition
 * @param {React.HTMLAttributes<HTMLSpanElement>} props - All standard span HTML attributes
 * 
 * @returns {JSX.Element} Badge element
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Badge>New</Badge>
 * 
 * // With variant
 * <Badge variant="destructive">Error</Badge>
 * 
 * // Status badge
 * <Badge variant="outline">Active</Badge>
 * 
 * // As a link
 * <Badge asChild variant="secondary">
 *   <a href="/tag">Tag</a>
 * </Badge>
 * ```
 * 
 * @remarks
 * - Supports icon children with automatic sizing
 * - Includes focus-visible states for accessibility
 * - Can be used as a link or button with asChild prop
 * - Responsive and accessible
 */
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }): JSX.Element {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
