import {BoxViewData, BoxViewType} from "@/features/viewer/utils/view-types";

interface DimensionLabelsProps {
    viewData: BoxViewData
    showInnerDimensions: boolean
    viewType: BoxViewType
}

export function DimensionLabels({ viewData, showInnerDimensions, viewType }: DimensionLabelsProps) {
    const { boxDimensions, outerRect, padding } = viewData

    // Different labels based on view type
    const getLabels = () => {
        switch (viewType) {
            case "top":
            case "bottom":
                return {
                    horizontal: "L", // Length (front-to-back)
                    vertical: "W"   // Width (left-to-right) 
                }
            case "front":
            case "back":
            case "left":
            case "right":
                return {
                    horizontal: "W", // Width
                    vertical: "H"   // Height
                }
        }
    }

    const labels = getLabels()
    const horizontalValue = showInnerDimensions ? boxDimensions.innerHeight : boxDimensions.height
    const verticalValue = showInnerDimensions ? boxDimensions.innerWidth : boxDimensions.width

    return (
        <>
            {/* Bottom horizontal label */}
            <text
                x={boxDimensions.centerX + padding.left - 20}
                y={outerRect.y + outerRect.height + 20}
                textAnchor="middle"
                className="text-xs font-mono fill-gray-700"
            >
                {labels.horizontal}: {horizontalValue.toFixed(1)}mm
                {showInnerDimensions && <tspan className="fill-gray-500"> (inner)</tspan>}
            </text>

            {/* Right vertical label */}
            <text
                x={outerRect.x + outerRect.width + 25}
                y={boxDimensions.centerY + padding.top + 4}
                textAnchor="middle"
                className="text-xs font-mono fill-gray-700"
            >
                {labels.vertical}: {verticalValue.toFixed(1)}mm
                {showInnerDimensions && <tspan className="fill-gray-500"> (inner)</tspan>}
            </text>
        </>
    )
}