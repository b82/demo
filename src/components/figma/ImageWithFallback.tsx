/**
 * Image with Fallback Component Module
 * 
 * Provides an image component that automatically displays a fallback
 * placeholder when the image fails to load.
 * 
 * @module components/figma/ImageWithFallback
 */

import React, { useState } from 'react'

/**
 * Base64 encoded SVG placeholder image displayed when image loading fails
 * 
 * @constant {string}
 * @private
 */
const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

/**
 * Image Component with Automatic Fallback
 * 
 * @description Displays an image with automatic fallback to a placeholder
 * when the image fails to load. Tracks error state internally and switches
 * to fallback UI on error.
 * 
 * @param {React.ImgHTMLAttributes<HTMLImageElement>} props - Standard img element props
 * @param {string} props.src - Source URL of the image to display
 * @param {string} [props.alt] - Alternative text for the image
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.CSSProperties} [props.style] - Inline styles
 * @param {React.ImgHTMLAttributes<HTMLImageElement>} props - All other standard img attributes
 * 
 * @returns {JSX.Element} Image element or fallback placeholder
 * 
 * @example
 * ```tsx
 * <ImageWithFallback 
 *   src="https://example.com/image.jpg" 
 *   alt="Product image"
 *   className="w-full h-auto"
 * />
 * ```
 * 
 * @example
 * ```tsx
 * // With error handling
 * <ImageWithFallback 
 *   src={userAvatar} 
 *   alt="User avatar"
 *   onError={(e) => console.log('Image failed to load')}
 * />
 * ```
 */
export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>): JSX.Element {
  const [didError, setDidError] = useState<boolean>(false)

  /**
   * Handles image load error by setting error state
   * 
   * @private
   */
  const handleError = (): void => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
