/**
 * Button Component Module
 * 
 * Provides a flexible, accessible button component with multiple variants
 * and sizes. Supports composition with Radix UI Slot for polymorphic behavior.
 * 
 * @module components/ui/button
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

/**
 * Button variant styles configuration
 * 
 * @description Defines all visual variants and sizes for buttons using CVA.
 * Includes accessibility features like focus-visible states and disabled states.
 * 
 * @constant {Function}
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

/**
 * Button Component
 * 
 * @description A flexible button component with multiple variants, sizes, and
 * composition support. Can be rendered as a button element or composed with
 * other components using the asChild prop.
 * 
 * @param {Object} props - Button component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"} [props.variant="default"] - Visual variant of the button
 * @param {"default" | "sm" | "lg" | "icon"} [props.size="default"] - Size of the button
 * @param {boolean} [props.asChild=false] - If true, renders as a Slot component for composition
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - All standard button HTML attributes
 * 
 * @returns {React.ForwardRefExoticComponent} Button component with forwarded ref
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Button onClick={handleClick}>Click me</Button>
 * 
 * // With variant
 * <Button variant="destructive" onClick={handleDelete}>
 *   Delete
 * </Button>
 * 
 * // With size
 * <Button size="lg" variant="outline">
 *   Large Button
 * </Button>
 * 
 * // As a link (composition)
 * <Button asChild variant="link">
 *   <a href="/page">Navigate</a>
 * </Button>
 * ```
 * 
 * @remarks
 * - Supports all standard button HTML attributes
 * - Includes proper focus-visible states for accessibility
 * - Disabled state automatically prevents pointer events
 * - Icon sizing is automatically handled when SVG children are present
 */
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };