import {useState} from "react"
import {Button} from "@/components/ui/button"
import {PageDescription, PageHeaderSeparator, PageTitle} from "@/components/ui/page-header"
import {Box} from "@/features/box/box-schema";
import {withUnit} from "@/lib/unit-utils";
import {TopView} from "@/components/box/viewer/top-view";
import {SideView} from "@/components/box/viewer/side-view";

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
                width: withUnit(450, {unit: "mm"}),   // 45cm wide
                height: withUnit(150, {unit: "mm"}),  // 15cm tall
                thickness: withUnit(18, {unit: "mm"}) // 18mm thick plywood
            },
            // Back panel (inside the cabinet)
            back: {
                width: withUnit(450, {unit: "mm"}),   
                height: withUnit(150, {unit: "mm"}),  
                thickness: withUnit(6, {unit: "mm"})
            },
            // Left side panel
            left: {
                width: withUnit(500, {unit: "mm"}),   // 40cm depth
                height: withUnit(150, {unit: "mm"}),  
                thickness: withUnit(12, {unit: "mm"})
            },
            // Right side panel
            right: {
                width: withUnit(500, {unit: "mm"}),
                height: withUnit(150, {unit: "mm"}),  
                thickness: withUnit(18, {unit: "mm"})
            },
            // Bottom panel (drawer floor)
            bottom: {
                width: withUnit(450, {unit: "mm"}),   
                height: withUnit(400, {unit: "mm"}),  // width x depth
                thickness: withUnit(12, {unit: "mm"}) // Thinner bottom panel
            },
            // Top panel (usually open for drawer)
            top: {
                width: withUnit(450, {unit: "mm"}),   
                height: withUnit(400, {unit: "mm"}),  
                thickness: withUnit(25, {unit: "mm"})  // No top panel for drawer
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
                        Top View Visualization
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
                <TopView
                    viewPort={{width: 400, height: 300}}
                    box={drawerBox}
                    viewType={"top"}
                    showInnerDimensions={showInner}
                />
            </div>

            <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900 tracking-wider uppercase">
                        Side View Visualization (Front)
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
                <SideView
                    viewPort={{width: 400, height: 300}}
                    box={drawerBox}
                    viewType={"back"}
                    showInnerDimensions={showInner}
                />
            </div>
            
        </>
    )
}