/**
 * Radio Group Component Module
 * 
 * Provides an accessible radio button group component built on Radix UI primitives.
 * Ensures only one option can be selected at a time within the group.
 * 
 * @module components/ui/radio-group
 */

"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";

import { cn } from "./utils";

/**
 * Radio Group Component
 * 
 * @description Container component for radio buttons. Manages the selected value
 * and ensures only one option can be selected at a time.
 * 
 * @param {Object} props - RadioGroup component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {string} [props.value] - Controlled selected value
 * @param {string} [props.defaultValue] - Uncontrolled default selected value
 * @param {function} [props.onValueChange] - Callback fired when value changes
 * @param {boolean} [props.disabled] - Whether all radio items are disabled
 * @param {boolean} [props.required] - Whether selection is required
 * @param {React.HTMLAttributes<HTMLDivElement>} props - All standard div HTML attributes
 * 
 * @returns {JSX.Element} Radio group container element
 * 
 * @example
 * ```tsx
 * <RadioGroup value={selected} onValueChange={setSelected}>
 *   <div className="flex items-center gap-2">
 *     <RadioGroupItem value="option1" id="r1" />
 *     <Label htmlFor="r1">Option 1</Label>
 *   </div>
 *   <div className="flex items-center gap-2">
 *     <RadioGroupItem value="option2" id="r2" />
 *     <Label htmlFor="r2">Option 2</Label>
 *   </div>
 * </RadioGroup>
 * ```
 */
function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>): JSX.Element {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

/**
 * Radio Group Item Component
 * 
 * @description Individual radio button within a radio group. Displays a filled
 * circle indicator when selected.
 * 
 * @param {Object} props - RadioGroupItem component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {string} props.value - Value of this radio option
 * @param {boolean} [props.disabled] - Whether this item is disabled
 * @param {React.HTMLAttributes<HTMLButtonElement>} props - All standard button HTML attributes
 * 
 * @returns {JSX.Element} Radio button item element
 */
function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>): JSX.Element {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
