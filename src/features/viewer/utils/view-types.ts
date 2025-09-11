/**
 * Shared types for the box viewer system
 */

/** View orientations for different box sides */
export type BoxViewType = "top" | "bottom" | "left" | "right" | "front" | "back";

/** Viewport dimensions for rendering area */
export interface Viewport {
    width: number;
    height: number;
}

/** Flexible viewport sizing - can be a specific number or "auto" to calculate based on box proportions */
export type ViewportSize = number | "auto";

/** Flexible viewport configuration */
export interface FlexibleViewport {
    width: ViewportSize;
    height: ViewportSize;
}

/** Padding around viewport for labels and spacing */
export interface ViewportPadding {
    top: number;
    bottom: number;
    left: number;
    right: number;
}

/** Rectangle position and dimensions in SVG coordinates */
export interface Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}

/** Box dimensions with scaling and positioning data */
export interface BoxDimensions {
    /** Outer width of the viewed side in mm */
    width: number;
    /** Outer height of the viewed side in mm */
    height: number;
    /** Material thickness of the viewed side in mm */
    thickness: number;
    /** Inner width after subtracting relevant side thicknesses */
    innerWidth: number;
    /** Inner height after subtracting relevant side thicknesses */
    innerHeight: number;
    /** Scale factor to fit in viewport */
    scale: number;
    /** Center X coordinate in viewport */
    centerX: number;
    /** Center Y coordinate in viewport */
    centerY: number;
}

/** Complete view data for rendering a box side */
export interface BoxViewData {
    /** Box dimension calculations */
    boxDimensions: BoxDimensions;
    /** Outer rectangle representing material boundaries */
    outerRect: Rectangle;
    /** Inner rectangle representing the cavity */
    innerRect: Rectangle;
    /** Padding used for this view */
    padding: ViewportPadding;
}