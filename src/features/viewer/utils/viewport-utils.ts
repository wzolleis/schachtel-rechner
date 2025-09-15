/**
 * Viewport-related utilities and calculations
 */

import { Viewport, ViewportPadding } from "./view-types";

/**
 * Creates standard padding for box views
 * @returns Standard padding with extra space on right for dimension labels
 */
export function createStandardPadding(): ViewportPadding {
    return {
        top: 30,
        bottom: 40,
        left: 30,
        right: 80 // Extra space for width label on the right
    };
}

/**
 * Calculates the available drawing area after removing padding
 * @param viewport - Original viewport dimensions
 * @param padding - Padding to subtract from viewport edges
 * @returns Viewport representing the actual drawing area
 */
export function getDrawingArea(viewport: Viewport, padding: ViewportPadding): Viewport {
    return {
        width: viewport.width - padding.left - padding.right,
        height: viewport.height - padding.top - padding.bottom
    };
}

/**
 * Calculates the center point of a viewport
 * @param viewport - Viewport to find center of
 * @returns Object with centerX and centerY coordinates
 */
export function getViewportCenter(viewport: Viewport): { centerX: number; centerY: number } {
    return {
        centerX: viewport.width / 2,
        centerY: viewport.height / 2
    };
}