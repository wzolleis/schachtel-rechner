import {Box} from "@/features/boxes/schema/box-schema";
import {BoxViewType, FlexibleViewport} from "@/features/viewer/utils/view-types";
import {createStandardPadding, getDrawingArea} from "@/features/viewer/utils/viewport-utils";
import {calculateBoxDimensions} from "@/features/viewer/utils/box-dimensions";
import {calculateInnerRectangle, calculateOuterRectangle} from "@/features/viewer/utils/view-layout";
import {calculateFlexibleViewport} from "@/features/viewer/utils/dynamic-viewport";
import {ViewRectangles} from "./view-rectangles";
import {DimensionLabels} from "./dimension-labels";

interface View2DProps {
    box: Box
    viewType: BoxViewType
    showInnerDimensions: boolean
    viewPort?: FlexibleViewport
}

export function View2D({ box, viewType, showInnerDimensions = false, viewPort }: View2DProps) {
    // Use flexible viewport system - default to auto sizing if none provided
    const flexibleViewport = viewPort || { width: "auto", height: "auto" };
    const calculatedViewport = calculateFlexibleViewport(box, viewType, flexibleViewport);
    
    // Calculate view data manually without barrel file
    const padding = createStandardPadding();
    const drawingArea = getDrawingArea(calculatedViewport, padding);
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
        <svg width={calculatedViewport.width} height={calculatedViewport.height} className="border border-gray-200">
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