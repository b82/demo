/**
 * Alert Component Module
 * 
 * Provides accessible alert components for displaying important messages
 * to users. Supports multiple variants and semantic HTML structure.
 * 
 * @module components/ui/alert
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

/**
 * Alert variant styles configuration
 * 
 * @description Defines the visual variants for alert components using CVA (Class Variance Authority).
 * Supports default and destructive variants with responsive grid layout.
 */
const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

/**
 * Alert Component
 * 
 * @description Main alert container component that displays important messages to users.
 * Uses semantic HTML with role="alert" for accessibility. Supports custom variants
 * and all standard div props.
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {"default" | "destructive"} [props.variant="default"] - Visual variant of the alert
 * @param {React.HTMLAttributes<HTMLDivElement>} props - All standard div HTML attributes
 * 
 * @returns {JSX.Element} Alert container element
 * 
 * @example
 * ```tsx
 * <Alert variant="destructive">
 *   <AlertTitle>Error</AlertTitle>
 *   <AlertDescription>Something went wrong.</AlertDescription>
 * </Alert>
 * ```
 */
function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

/**
 * Alert Title Component
 * 
 * @description Displays the title/heading of an alert message.
 * Automatically positioned in the grid layout when used within an Alert component.
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.HTMLAttributes<HTMLDivElement>} props - All standard div HTML attributes
 * 
 * @returns {JSX.Element} Alert title element
 * 
 * @example
 * ```tsx
 * <AlertTitle>Important Notice</AlertTitle>
 * ```
 */
function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Alert Description Component
 * 
 * @description Displays the detailed description/content of an alert message.
 * Supports rich text content and is automatically positioned in the grid layout.
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.HTMLAttributes<HTMLDivElement>} props - All standard div HTML attributes
 * 
 * @returns {JSX.Element} Alert description element
 * 
 * @example
 * ```tsx
 * <AlertDescription>
 *   Your changes have been saved successfully.
 * </AlertDescription>
 * ```
 */
function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
