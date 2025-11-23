/**
 * Collapsible Component Module
 * 
 * Provides an accessible collapsible component built on Radix UI primitives.
 * Supports controlled and uncontrolled modes for showing/hiding content.
 * 
 * @module components/ui/collapsible
 */

"use client";

import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

/**
 * Collapsible Root Component
 * 
 * @description Main container component for collapsible content. Manages the
 * open/closed state and provides context to child components.
 * 
 * @param {Object} props - Collapsible component props
 * @param {boolean} [props.open] - Controlled open state
 * @param {boolean} [props.defaultOpen] - Uncontrolled default open state
 * @param {function} [props.onOpenChange] - Callback fired when open state changes
 * @param {boolean} [props.disabled] - Whether the collapsible is disabled
 * @param {React.HTMLAttributes<HTMLDivElement>} props - All standard div HTML attributes
 * 
 * @returns {JSX.Element} Collapsible root element
 * 
 * @example
 * ```tsx
 * // Uncontrolled
 * <Collapsible>
 *   <CollapsibleTrigger>Toggle</CollapsibleTrigger>
 *   <CollapsibleContent>Content</CollapsibleContent>
 * </Collapsible>
 * 
 * // Controlled
 * <Collapsible open={isOpen} onOpenChange={setIsOpen}>
 *   <CollapsibleTrigger>Toggle</CollapsibleTrigger>
 *   <CollapsibleContent>Content</CollapsibleContent>
 * </Collapsible>
 * ```
 */
function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>): JSX.Element {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

/**
 * Collapsible Trigger Component
 * 
 * @description Button element that toggles the collapsible content open/closed.
 * Automatically handles ARIA attributes and keyboard interactions.
 * 
 * @param {Object} props - CollapsibleTrigger component props
 * @param {React.HTMLAttributes<HTMLButtonElement>} props - All standard button HTML attributes
 * 
 * @returns {JSX.Element} Collapsible trigger button element
 * 
 * @example
 * ```tsx
 * <CollapsibleTrigger className="flex items-center gap-2">
 *   <ChevronDown />
 *   <span>Show more</span>
 * </CollapsibleTrigger>
 * ```
 */
function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>): JSX.Element {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}

/**
 * Collapsible Content Component
 * 
 * @description Content area that is shown/hidden based on the collapsible state.
 * Includes smooth animations and proper accessibility attributes.
 * 
 * @param {Object} props - CollapsibleContent component props
 * @param {React.HTMLAttributes<HTMLDivElement>} props - All standard div HTML attributes
 * 
 * @returns {JSX.Element} Collapsible content container element
 * 
 * @example
 * ```tsx
 * <CollapsibleContent className="mt-2 p-4 bg-muted rounded">
 *   <p>This content is collapsible</p>
 * </CollapsibleContent>
 * ```
 */
function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>): JSX.Element {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
