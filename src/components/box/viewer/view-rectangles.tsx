import {Rectangle} from "@/features/viewer/utils/view-types";

interface ViewRectanglesProps {
    outerRect: Rectangle
    innerRect: Rectangle
}

export function ViewRectangles({ outerRect, innerRect }: ViewRectanglesProps) {
    return (
        <>
            {/* Outer rectangle */}
            <rect
                x={outerRect.x}
                y={outerRect.y}
                width={outerRect.width}
                height={outerRect.height}
                fill="rgba(229, 231, 235, 0.6)"
                stroke="#374151"
                strokeWidth="1"
            />

            {/* Inner rectangle (cavity) */}
            <rect
                x={innerRect.x}
                y={innerRect.y}
                width={innerRect.width}
                height={innerRect.height}
                fill="rgba(255, 255, 255, 0.8)"
                stroke="#6b7280"
                strokeWidth="0.5"
                strokeDasharray="2,2"
            />
        </>
    )
}