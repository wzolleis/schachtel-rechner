// Example drawer box with realistic dimensions
import {withUnit} from "@/lib/unit-utils";
import {Box} from "@/features/box/box-schema";

export const drawerBox: Box = {
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