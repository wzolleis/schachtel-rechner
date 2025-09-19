/**
 * Dynamic viewport sizing based on box dimensions
 */

import {Box} from "@/features/boxes/box-schema";
import {getValueAs} from "@/lib/unit-utils";
import {BoxViewType, FlexibleViewport, Viewport} from "./view-types";
import {createStandardPadding} from "./viewport-utils";

/**
 * Configuration for dynamic viewport sizing
 */
export interface DynamicViewportConfig {
    /** Base size for the smaller dimension */
    baseSize: number;
    /** Maximum allowed aspect ratio (width/height) */
    maxAspectRatio: number;
    /** Minimum allowed aspect ratio (width/height) */
    minAspectRatio: number;
    /** Maximum viewport size in any dimension */
    maxSize: number;
    /** Minimum viewport size in any dimension */
    minSize: number;
}

/**
 * Default configuration for dynamic viewports
 */
export const DEFAULT_VIEWPORT_CONFIG: DynamicViewportConfig = {
    baseSize: 400,
    maxAspectRatio: 3.0, // prevents extremely wide viewports
    minAspectRatio: 0.33, // prevents extremely tall viewports
    maxSize: 800,
    minSize: 200,
};

/**
 * Calculates flexible viewport dimensions based on FlexibleViewport specification
 * @param box - Box configuration
 * @param viewType - Which side/orientation to calculate viewport for
 * @param flexibleViewport - Viewport specification with "auto" or number values
 * @param config - Configuration for viewport sizing (optional)
 * @returns Calculated viewport dimensions
 */
export function calculateFlexibleViewport(
    box: Box,
    viewType: BoxViewType,
    flexibleViewport: FlexibleViewport,
    config: DynamicViewportConfig = DEFAULT_VIEWPORT_CONFIG
): Viewport {
    const side = box.sides[viewType];
    const boxWidth = getValueAs(side.width, "mm");
    const boxHeight = getValueAs(side.height, "mm");
    const boxAspectRatio = boxWidth / boxHeight;

    // Get padding to account for labels
    const padding = createStandardPadding();
    const totalPaddingWidth = padding.left + padding.right;
    const totalPaddingHeight = padding.top + padding.bottom;

    let drawingWidth: number;
    let drawingHeight: number;

    // Handle different combinations of auto/fixed values
    if (flexibleViewport.width === "auto" && flexibleViewport.height === "auto") {
        // Both auto - use the original dynamic calculation
        const constrainedAspectRatio = Math.max(
            config.minAspectRatio,
            Math.min(config.maxAspectRatio, boxAspectRatio)
        );

        if (constrainedAspectRatio >= 1) {
            drawingHeight = config.baseSize;
            drawingWidth = drawingHeight * constrainedAspectRatio;
        } else {
            drawingWidth = config.baseSize;
            drawingHeight = drawingWidth / constrainedAspectRatio;
        }

        drawingWidth = Math.max(config.minSize - totalPaddingWidth, Math.min(config.maxSize - totalPaddingWidth, drawingWidth));
        drawingHeight = Math.max(config.minSize - totalPaddingHeight, Math.min(config.maxSize - totalPaddingHeight, drawingHeight));

    } else if (flexibleViewport.width === "auto" && typeof flexibleViewport.height === "number") {
        // Fixed height, auto width
        drawingHeight = Math.max(50, flexibleViewport.height - totalPaddingHeight);
        const constrainedAspectRatio = Math.max(config.minAspectRatio, Math.min(config.maxAspectRatio, boxAspectRatio));
        drawingWidth = drawingHeight * constrainedAspectRatio;
        drawingWidth = Math.max(config.minSize - totalPaddingWidth, Math.min(config.maxSize - totalPaddingWidth, drawingWidth));

    } else if (typeof flexibleViewport.width === "number" && flexibleViewport.height === "auto") {
        // Fixed width, auto height
        drawingWidth = Math.max(50, flexibleViewport.width - totalPaddingWidth);
        const constrainedAspectRatio = Math.max(config.minAspectRatio, Math.min(config.maxAspectRatio, boxAspectRatio));
        drawingHeight = drawingWidth / constrainedAspectRatio;
        drawingHeight = Math.max(config.minSize - totalPaddingHeight, Math.min(config.maxSize - totalPaddingHeight, drawingHeight));

    } else {
        // Both fixed - ensure we have space for labels
        drawingWidth = Math.max(50, (flexibleViewport.width as number) - totalPaddingWidth);
        drawingHeight = Math.max(50, (flexibleViewport.height as number) - totalPaddingHeight);
    }

    // Add padding back to get final viewport size
    return {
        width: Math.round(drawingWidth + totalPaddingWidth),
        height: Math.round(drawingHeight + totalPaddingHeight),
    };
}
