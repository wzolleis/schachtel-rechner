/**
 * Layout calculations for positioning rectangles in box views
 */

import {Box} from "@/features/boxes/schema/box-schema";
import {getValueAs} from "@/lib/unit-utils";
import {BoxDimensions, BoxViewType, Rectangle, ViewportPadding} from "./view-types";
import {isHorizontalView} from "./view-type-helpers";

/** Amount to nudge rectangle left to make room for right-side labels */
const LABEL_SPACE_NUDGE = 20;

/**
 * Calculates the outer rectangle position and size
 * @param boxDimensions - Box dimensions with scale and center information
 * @param padding - Viewport padding values
 * @returns Rectangle representing the outer material boundaries
 */
export function calculateOuterRectangle(
    boxDimensions: BoxDimensions,
    padding: ViewportPadding
): Rectangle {
    const scaledWidth = boxDimensions.width * boxDimensions.scale;
    const scaledHeight = boxDimensions.height * boxDimensions.scale;
    
    // Position rectangle with left nudge to make room for right-side labels
    const x = boxDimensions.centerX - scaledWidth / 2 + padding.left - LABEL_SPACE_NUDGE;
    const y = boxDimensions.centerY - scaledHeight / 2 + padding.top;

    return {
        x,
        y,
        width: scaledWidth,
        height: scaledHeight
    };
}

/**
 * Calculates the inner rectangle position based on individual side thickness
 * The inner rectangle represents the actual cavity inside the box
 * @param box - Box configuration with individual side thickness values
 * @param viewType - Which side/orientation we're viewing
 * @param boxDimensions - Box dimensions with scale information
 * @param outerRect - The outer rectangle to offset from
 * @returns Rectangle representing the inner cavity position
 */
export function calculateInnerRectangle(
    box: Box,
    viewType: BoxViewType,
    boxDimensions: BoxDimensions,
    outerRect: Rectangle
): Rectangle {
    const scaledInnerWidth = boxDimensions.innerWidth * boxDimensions.scale;
    const scaledInnerHeight = boxDimensions.innerHeight * boxDimensions.scale;

    // Calculate offsets based on which sides push the cavity inward from this view
    const { xOffset, yOffset } = calculateCavityOffsets(box, viewType, boxDimensions.scale);

    return {
        x: outerRect.x + xOffset,
        y: outerRect.y + yOffset,
        width: scaledInnerWidth,
        height: scaledInnerHeight
    };
}

/**
 * Calculates how much the cavity is offset from the outer edges due to material thickness
 * @param box - Box configuration
 * @param viewType - View orientation
 * @param scale - Scale factor for converting mm to SVG units
 * @returns X and Y offsets for positioning the inner cavity rectangle
 */
function calculateCavityOffsets(
    box: Box,
    viewType: BoxViewType,
    scale: number
): { xOffset: number; yOffset: number } {
    if (isHorizontalView(viewType)) {
        // Top view: left wall pushes cavity right, front wall pushes cavity back
        return {
            xOffset: getValueAs(box.sides.left.thickness, "mm") * scale,
            yOffset: getValueAs(box.sides.front.thickness, "mm") * scale
        };
    }
    
    // For vertical views (front/back/left/right)
    if (viewType === "front" || viewType === "back") {
        // Front view: left wall pushes cavity right, top wall pushes cavity down
        return {
            xOffset: getValueAs(box.sides.left.thickness, "mm") * scale,
            yOffset: getValueAs(box.sides.top.thickness, "mm") * scale
        };
    } else {
        // Side view: front wall pushes cavity back, top wall pushes cavity down
        return {
            xOffset: getValueAs(box.sides.front.thickness, "mm") * scale,
            yOffset: getValueAs(box.sides.top.thickness, "mm") * scale
        };
    }
}