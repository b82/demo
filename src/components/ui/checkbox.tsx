/**
 * Checkbox Component Module
 * 
 * Provides an accessible checkbox component built on Radix UI primitives.
 * Supports checked, unchecked, and indeterminate states.
 * 
 * @module components/ui/checkbox
 */

"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "./utils";

/**
 * Checkbox Component
 * 
 * @description An accessible checkbox component for form inputs and selections.
 * Includes checkmark indicator and proper validation states.
 * 
 * @param {Object} props - Checkbox component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {boolean | "indeterminate"} [props.checked] - Controlled checked state
 * @param {boolean} [props.defaultChecked] - Uncontrolled default checked state
 * @param {function} [props.onCheckedChange] - Callback fired when checked state changes
 * @param {boolean} [props.disabled] - Whether the checkbox is disabled
 * @param {boolean} [props.required] - Whether the checkbox is required
 * @param {React.HTMLAttributes<HTMLButtonElement>} props - All standard button HTML attributes
 * 
 * @returns {JSX.Element} Checkbox element with checkmark indicator
 * 
 * @example
 * ```tsx
 * <Checkbox checked={accepted} onCheckedChange={setAccepted} />
 * ```
 * 
 * @example
 * ```tsx
 * // With label
 * <div className="flex items-center gap-2">
 *   <Checkbox id="terms" />
 *   <Label htmlFor="terms">Accept terms and conditions</Label>
 * </div>
 * ```
 * 
 * @remarks
 * - Supports checked, unchecked, and indeterminate states
 * - Includes checkmark icon indicator
 * - Proper validation styling with aria-invalid
 * - Accessible via keyboard navigation
 */
function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>): JSX.Element {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
