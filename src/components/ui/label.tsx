/**
 * Label Component Module
 * 
 * Provides an accessible label component built on Radix UI primitives.
 * Properly associates labels with form inputs for accessibility.
 * 
 * @module components/ui/label
 */

"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "./utils";

/**
 * Label Component
 * 
 * @description An accessible label component that properly associates labels
 * with form inputs. Supports disabled states and peer input relationships.
 * 
 * @param {Object} props - Label component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {string} [props.htmlFor] - ID of the associated input element
 * @param {React.LabelHTMLAttributes<HTMLLabelElement>} props - All standard label HTML attributes
 * 
 * @returns {JSX.Element} Accessible label element
 * 
 * @example
 * ```tsx
 * <Label htmlFor="email">Email Address</Label>
 * <Input id="email" type="email" />
 * ```
 * 
 * @example
 * ```tsx
 * // With form group
 * <div className="space-y-2">
 *   <Label>Username</Label>
 *   <Input />
 * </div>
 * ```
 * 
 * @remarks
 * - Automatically handles disabled states when associated input is disabled
 * - Supports peer relationships for styling
 * - Includes proper accessibility attributes
 */
function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>): JSX.Element {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
