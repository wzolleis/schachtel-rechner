/**
 * Helper functions for categorizing box view types
 */

import { BoxViewType } from "./view-types";

/**
 * Determines if a view type shows a horizontal perspective (top/bottom views)
 * @param viewType - The view type to check
 * @returns true for top/bottom views, false for side views
 */
export function isHorizontalView(viewType: BoxViewType): boolean {
    return viewType === "top" || viewType === "bottom";
}

/**
 * Determines if a view type shows a vertical perspective (side views)
 * @param viewType - The view type to check  
 * @returns true for front/back/left/right views, false for top/bottom views
 */
export function isVerticalView(viewType: BoxViewType): boolean {
    return viewType === "front" || viewType === "back" || viewType === "left" || viewType === "right";
}

/**
 * Gets the appropriate dimension labels for a view type
 * @param viewType - The view type to get labels for
 * @returns Object with horizontal and vertical dimension labels
 */
export function getDimensionLabels(viewType: BoxViewType): { horizontal: string; vertical: string } {
    if (isHorizontalView(viewType)) {
        return {
            horizontal: "L", // Length (front-to-back)
            vertical: "W"    // Width (left-to-right)
        };
    } else {
        return {
            horizontal: "W", // Width  
            vertical: "H"    // Height
        };
    }
}