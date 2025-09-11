import {Box} from "@/features/box/box-schema";
import {Viewport} from "@/features/viewer/utils/view-types";
import {createStandardPadding, getDrawingArea} from "@/features/viewer/utils/viewport-utils";
import {calculateBoxDimensions} from "@/features/viewer/utils/box-dimensions";
import {calculateOuterRectangle, calculateInnerRectangle} from "@/features/viewer/utils/view-layout";
import {ViewRectangles} from "./view-rectangles";
import {DimensionLabels} from "./dimension-labels";

interface SideViewProps {
    viewPort: Viewport
    box: Box
    viewType: "left" | "right" | "front" | "back"
    showInnerDimensions: boolean
}

export function SideView({ box, viewType, showInnerDimensions = false, viewPort }: SideViewProps) {
    // Calculate view data manually without barrel file
    const padding = createStandardPadding();
    const drawingArea = getDrawingArea(viewPort, padding);
    const boxDimensions = calculateBoxDimensions(box, viewType, drawingArea);
    const outerRect = calculateOuterRectangle(boxDimensions, padding);
    const innerRect = calculateInnerRectangle(box, viewType, boxDimensions, outerRect);
    
    const viewData = {
        boxDimensions,
        outerRect,
        innerRect,
        padding
    };

    return (
        <svg width={viewPort.width} height={viewPort.height} className="border border-gray-200">
            <g>
                <ViewRectangles 
                    outerRect={viewData.outerRect} 
                    innerRect={viewData.innerRect} 
                />
                <DimensionLabels 
                    viewData={viewData} 
                    showInnerDimensions={showInnerDimensions}
                    viewType={viewType}
                />
            </g>
        </svg>
    )
}