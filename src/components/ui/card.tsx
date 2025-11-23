/**
 * Card Component Module
 * 
 * Provides a flexible card component system with header, content, footer,
 * and action sections. Uses semantic HTML and CSS Grid for layout.
 * 
 * @module components/ui/card
 */

import * as React from "react";

import { cn } from "./utils";

/**
 * Card Container Component
 * 
 * @description Main card container that provides the base styling and structure.
 * Use this as the wrapper for all card content.
 * 
 * @param {Object} props - Card component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.HTMLAttributes<HTMLDivElement>} props - All standard div HTML attributes
 * 
 * @returns {JSX.Element} Card container element
 * 
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Title</CardTitle>
 *     <CardDescription>Description</CardDescription>
 *   </CardHeader>
 *   <CardContent>Content here</CardContent>
 * </Card>
 * ```
 */
function Card({ className, ...props }: React.ComponentProps<"div">): JSX.Element {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Card Header Component
 * 
 * @description Header section of the card. Contains title, description, and optional action.
 * Uses CSS Grid for flexible layout when CardAction is present.
 * 
 * @param {Object} props - CardHeader component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.HTMLAttributes<HTMLDivElement>} props - All standard div HTML attributes
 * 
 * @returns {JSX.Element} Card header element
 * 
 * @example
 * ```tsx
 * <CardHeader>
 *   <CardTitle>Card Title</CardTitle>
 *   <CardDescription>Card description text</CardDescription>
 *   <CardAction>
 *     <Button>Action</Button>
 *   </CardAction>
 * </CardHeader>
 * ```
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">): JSX.Element {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Card Title Component
 * 
 * @description Heading element for the card title. Rendered as an h4 element
 * for semantic HTML structure.
 * 
 * @param {Object} props - CardTitle component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.HTMLAttributes<HTMLHeadingElement>} props - All standard h4 HTML attributes
 * 
 * @returns {JSX.Element} Card title heading element
 * 
 * @example
 * ```tsx
 * <CardTitle>Dashboard Overview</CardTitle>
 * ```
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">): JSX.Element {
  return (
    <h4
      data-slot="card-title"
      className={cn("leading-none", className)}
      {...props}
    />
  );
}

/**
 * Card Description Component
 * 
 * @description Descriptive text displayed below the card title. Uses muted
 * text color for visual hierarchy.
 * 
 * @param {Object} props - CardDescription component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - All standard p HTML attributes
 * 
 * @returns {JSX.Element} Card description paragraph element
 * 
 * @example
 * ```tsx
 * <CardDescription>
 *   View your key metrics and performance indicators
 * </CardDescription>
 * ```
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">): JSX.Element {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

/**
 * Card Action Component
 * 
 * @description Action area in the card header, typically used for buttons or
 * other interactive elements. Positioned in the top-right corner when used
 * within CardHeader.
 * 
 * @param {Object} props - CardAction component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.HTMLAttributes<HTMLDivElement>} props - All standard div HTML attributes
 * 
 * @returns {JSX.Element} Card action container element
 * 
 * @example
 * ```tsx
 * <CardAction>
 *   <Button variant="ghost" size="icon">
 *     <MoreVertical />
 *   </Button>
 * </CardAction>
 * ```
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">): JSX.Element {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Card Content Component
 * 
 * @description Main content area of the card. Provides consistent padding
 * and spacing for card body content.
 * 
 * @param {Object} props - CardContent component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.HTMLAttributes<HTMLDivElement>} props - All standard div HTML attributes
 * 
 * @returns {JSX.Element} Card content container element
 * 
 * @example
 * ```tsx
 * <CardContent>
 *   <p>Main card content goes here</p>
 *   <Chart data={chartData} />
 * </CardContent>
 * ```
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">): JSX.Element {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 [&:last-child]:pb-6", className)}
      {...props}
    />
  );
}

/**
 * Card Footer Component
 * 
 * @description Footer section of the card. Typically used for actions,
 * links, or additional information. Supports border-top styling when needed.
 * 
 * @param {Object} props - CardFooter component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.HTMLAttributes<HTMLDivElement>} props - All standard div HTML attributes
 * 
 * @returns {JSX.Element} Card footer container element
 * 
 * @example
 * ```tsx
 * <CardFooter className="border-t">
 *   <Button variant="outline">Cancel</Button>
 *   <Button>Save</Button>
 * </CardFooter>
 * ```
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">): JSX.Element {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
