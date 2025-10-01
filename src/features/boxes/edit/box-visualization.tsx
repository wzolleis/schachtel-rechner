import {Box} from "@/features/boxes/box-schema";
import {Button} from "@/components/ui/button";
import {View2D} from "@/features/boxes/viewer/2d-view";
import {useState} from "react";

interface BoxVisualizationProps {
    box: Box
}

export const BoxVisualization = (props: BoxVisualizationProps) => {
    const [showInner, setShowInner] = useState(false)
    const {box} = props

    return (
        <>
            <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900 tracking-wider uppercase">
                        Front View Visualization
                    </h3>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowInner(!showInner)}
                        className="font-mono text-xs"
                    >
                        {showInner ? "Show Outer" : "Show Inner"}
                    </Button>
                </div>
                <View2D
                    viewPort={{width: 400, height: "auto"}}
                    box={box}
                    viewType={"front"}
                    showInnerDimensions={showInner}
                />
            </div>

            <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900 tracking-wider uppercase">
                        Left View Visualization
                    </h3>
                    <Button
                        type={'button'}
                        variant="outline"
                        size="sm"
                        onClick={() => setShowInner(!showInner)}
                        className="font-mono text-xs"
                    >
                        {showInner ? "Show Outer" : "Show Inner"}
                    </Button>
                </div>
                <View2D
                    viewPort={{width: 400, height: "auto"}}
                    box={box}
                    viewType={"left"}
                    showInnerDimensions={showInner}
                />
                <View2D
                    viewPort={{width: 400, height: "auto"}}
                    box={box}
                    viewType={"bottom"}
                    showInnerDimensions={showInner}
                />
            </div>
        </>
    )
}