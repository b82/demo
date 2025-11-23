/**
 * Switch Component Module
 * 
 * Provides an accessible toggle switch component built on Radix UI primitives.
 * Used for boolean settings and on/off controls.
 * 
 * @module components/ui/switch
 */

"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "./utils";

/**
 * Switch Component
 * 
 * @description An accessible toggle switch component for boolean settings.
 * Includes smooth animations and proper focus states for accessibility.
 * 
 * @param {Object} props - Switch component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {boolean} [props.checked] - Controlled checked state
 * @param {boolean} [props.defaultChecked] - Uncontrolled default checked state
 * @param {function} [props.onCheckedChange] - Callback fired when checked state changes
 * @param {boolean} [props.disabled] - Whether the switch is disabled
 * @param {boolean} [props.required] - Whether the switch is required
 * @param {React.HTMLAttributes<HTMLButtonElement>} props - All standard button HTML attributes
 * 
 * @returns {JSX.Element} Switch toggle element
 * 
 * @example
 * ```tsx
 * <Switch checked={enabled} onCheckedChange={setEnabled} />
 * ```
 * 
 * @example
 * ```tsx
 * // With label
 * <div className="flex items-center gap-2">
 *   <Switch id="notifications" />
 *   <Label htmlFor="notifications">Enable notifications</Label>
 * </div>
 * ```
 * 
 * @remarks
 * - Includes smooth transition animations
 * - Supports controlled and uncontrolled modes
 * - Properly handles focus-visible states
 * - Accessible via keyboard navigation
 */
function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>): JSX.Element {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-card dark:data-[state=unchecked]:bg-card-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
