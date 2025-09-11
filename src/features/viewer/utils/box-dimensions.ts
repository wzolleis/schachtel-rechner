/**
 * Box dimension calculations for 2D views
 */

import { Box } from "@/features/box/box-schema";
import { getValueAs } from "@/lib/unit-utils";
import { BoxViewType, Viewport, BoxDimensions } from "./view-types";
import { getViewportCenter } from "./viewport-utils";
import { isHorizontalView } from "./view-type-helpers";

/**
 * Calculates box dimensions for a 2D view with scaling and positioning
 * @param box - Box configuration with individual side dimensions and thickness
 * @param viewType - Which side/orientation to calculate for
 * @param viewport - Available viewport space for drawing
 * @returns Complete box dimensions with scaling and positioning data
 */
export function calculateBoxDimensions(
    box: Box,
    viewType: BoxViewType,
    viewport: Viewport
): BoxDimensions {
    // Get the specific side we're viewing
    const side = box.sides[viewType];
    
    // Convert dimensions to mm for consistent calculations
    const viewWidth = getValueAs(side.width, "mm");
    const viewHeight = getValueAs(side.height, "mm");
    const thickness = getValueAs(side.thickness, "mm");
    
    // Calculate inner dimensions based on which sides contribute thickness for this view
    const { innerWidth, innerHeight } = calculateInnerDimensions(box, viewType, viewWidth, viewHeight);
    
    // Calculate scale to fit in drawing area (viewport minus padding) with reasonable max scale limit
    const scale = Math.min(viewport.width / viewWidth, viewport.height / viewHeight, 3.0);
    
    // Center the view in the viewport
    const { centerX, centerY } = getViewportCenter(viewport);
    
    return {
        width: viewWidth,
        height: viewHeight,
        thickness,
        innerWidth,
        innerHeight,
        scale,
        centerX,
        centerY,
    };
}

/**
 * Calculates inner dimensions by subtracting relevant side thicknesses
 * @param box - Box configuration
 * @param viewType - View orientation
 * @param outerWidth - Outer width of the viewed side
 * @param outerHeight - Outer height of the viewed side
 * @returns Inner width and height after subtracting thickness
 */
function calculateInnerDimensions(
    box: Box,
    viewType: BoxViewType,
    outerWidth: number,
    outerHeight: number
): { innerWidth: number; innerHeight: number } {
    let innerWidth: number;
    let innerHeight: number;
    
    if (isHorizontalView(viewType)) {
        // Top view: width spans left-to-right, height spans front-to-back
        // Subtract opposing sides' thickness
        innerWidth = Math.max(0, outerWidth - getValueAs(box.sides.left.thickness, "mm") - getValueAs(box.sides.right.thickness, "mm"));
        innerHeight = Math.max(0, outerHeight - getValueAs(box.sides.front.thickness, "mm") - getValueAs(box.sides.back.thickness, "mm"));
    } else if (viewType === "front" || viewType === "back") {
        // Front view: width spans left-to-right, height spans top-to-bottom
        // Subtract opposing sides' thickness
        innerWidth = Math.max(0, outerWidth - getValueAs(box.sides.left.thickness, "mm") - getValueAs(box.sides.right.thickness, "mm"));
        innerHeight = Math.max(0, outerHeight - getValueAs(box.sides.top.thickness, "mm") - getValueAs(box.sides.bottom.thickness, "mm"));
    } else {
        // Side view: width spans front-to-back, height spans top-to-bottom
        // Subtract opposing sides' thickness
        innerWidth = Math.max(0, outerWidth - getValueAs(box.sides.front.thickness, "mm") - getValueAs(box.sides.back.thickness, "mm"));
        innerHeight = Math.max(0, outerHeight - getValueAs(box.sides.top.thickness, "mm") - getValueAs(box.sides.bottom.thickness, "mm"));
    }
    
    return { innerWidth, innerHeight };
}