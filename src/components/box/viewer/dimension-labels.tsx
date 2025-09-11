import {BoxViewData, BoxViewType} from "@/features/viewer/utils/view-types";
import {getDimensionLabels} from "@/features/viewer/utils/view-type-helpers";

interface DimensionLabelsProps {
    viewData: BoxViewData
    showInnerDimensions: boolean
    viewType: BoxViewType
}

export function DimensionLabels({ viewData, showInnerDimensions, viewType }: DimensionLabelsProps) {
    const { boxDimensions, outerRect, padding } = viewData
    const labels = getDimensionLabels(viewType)
    const horizontalValue = showInnerDimensions ? boxDimensions.innerWidth : boxDimensions.width
    const verticalValue = showInnerDimensions ? boxDimensions.innerHeight : boxDimensions.height

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
                x={outerRect.x + outerRect.width + 10}
                y={boxDimensions.centerY + padding.top + 4}
                textAnchor="start"
                className="text-xs font-mono fill-gray-700"
            >
                {labels.vertical}: {verticalValue.toFixed(1)}mm
                {showInnerDimensions && <tspan className="fill-gray-500"> (inner)</tspan>}
            </text>
        </>
    )
}