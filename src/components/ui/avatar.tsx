/**
 * Avatar Component Module
 * 
 * Provides an accessible avatar component built on Radix UI primitives.
 * Supports image display with automatic fallback to initials or placeholder.
 * 
 * @module components/ui/avatar
 */

"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "./utils";

/**
 * Avatar Root Component
 * 
 * @description Container component for avatar image and fallback.
 * Manages the display logic between image and fallback.
 * 
 * @param {Object} props - Avatar component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.HTMLAttributes<HTMLSpanElement>} props - All standard span HTML attributes
 * 
 * @returns {JSX.Element} Avatar container element
 * 
 * @example
 * ```tsx
 * <Avatar>
 *   <AvatarImage src="/avatar.jpg" alt="User" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 * ```
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>): JSX.Element {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-10 shrink-0 overflow-hidden rounded-full",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Avatar Image Component
 * 
 * @description Displays the avatar image. Automatically falls back to
 * AvatarFallback if image fails to load or is not provided.
 * 
 * @param {Object} props - AvatarImage component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {string} props.src - Image source URL
 * @param {string} [props.alt] - Alternative text for the image
 * @param {React.ImgHTMLAttributes<HTMLImageElement>} props - All standard img HTML attributes
 * 
 * @returns {JSX.Element} Avatar image element
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>): JSX.Element {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

/**
 * Avatar Fallback Component
 * 
 * @description Displays fallback content when avatar image is not available
 * or fails to load. Typically shows user initials or a placeholder icon.
 * 
 * @param {Object} props - AvatarFallback component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {ReactNode} props.children - Fallback content (usually initials)
 * @param {React.HTMLAttributes<HTMLSpanElement>} props - All standard span HTML attributes
 * 
 * @returns {JSX.Element} Avatar fallback element
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>): JSX.Element {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
