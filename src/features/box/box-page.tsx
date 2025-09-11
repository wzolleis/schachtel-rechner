import {useState} from "react"
import {Button} from "@/components/ui/button"
import {PageDescription, PageHeaderSeparator, PageTitle} from "@/components/ui/page-header"
import {Box} from "@/features/box/box-schema";
import {withUnit} from "@/lib/unit-utils";
import {View2D} from "@/components/box/viewer/2d-view";

export function BoxPage() {
    const [showInner, setShowInner] = useState(false)

    // Example drawer box with realistic dimensions
    const drawerBox: Box = {
        id: "example-drawer",
        projectId: "example-project", 
        name: "Kitchen Drawer",
        sides: {
            // Front face (what you see when drawer is closed)
            front: {
                width: withUnit(250, {unit: "mm"}),   // 45cm wide
                height: withUnit(150, {unit: "mm"}),  // 15cm tall
                thickness: withUnit(12, {unit: "mm"}) // 18mm thick plywood
            },
            // Back panel (inside the cabinet)
            back: {
                width: withUnit(250, {unit: "mm"}),
                height: withUnit(150, {unit: "mm"}),  
                thickness: withUnit(12, {unit: "mm"}) // Same as front
            },
            // Left side panel
            left: {
                width: withUnit(1060, {unit: "mm"}),   // 40cm depth
                height: withUnit(150, {unit: "mm"}),  
                thickness: withUnit(12, {unit: "mm"}) // Consistent thickness
            },
            // Right side panel
            right: {
                width: withUnit(1060, {unit: "mm"}),   // Same depth as left
                height: withUnit(150, {unit: "mm"}),  
                thickness: withUnit(12, {unit: "mm"}) // Consistent thickness
            },
            // Bottom panel (drawer floor)
            bottom: {
                width: withUnit(450, {unit: "mm"}),   // Same as front/back width
                height: withUnit(450, {unit: "mm"}),  // Same as front/back width
                thickness: withUnit(12, {unit: "mm"}) // Same thickness as sides
            },
            // Top panel (usually open for drawer)
            top: {
                width: withUnit(450, {unit: "mm"}),   // Same as front/back width
                height: withUnit(450, {unit: "mm"}),  // Same as front/back width
                thickness: withUnit(10, {unit: "mm"}) // Same thickness as sides
            }
        }
    }
    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <PageTitle>NEUE BOX</PageTitle>
                    <PageHeaderSeparator/>
                    <PageDescription>Erstelle eine neue Box-Konfiguration</PageDescription>
                </div>
            </div>
            
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
                    box={drawerBox}
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
                    box={drawerBox}
                    viewType={"left"}
                    showInnerDimensions={showInner}
                />
            </div>
            
        </>
    )
}