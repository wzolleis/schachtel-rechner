import * as React from "react"
import {Box,} from "lucide-react"
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail,} from "@/components/ui/sidebar"
import {BoxProjects} from "./box-projects"
import {boxCalcGehrungAltElements, boxCalcGehrungElements, sidebarLink} from "@/app/route-urls";

const menu = {
    boxes: [
        {
            name: 'Gehrung',
            icon: Box,
            url: sidebarLink(boxCalcGehrungElements),
        },
        {
            name: 'Gehrung alt',
            icon: Box,
            url: sidebarLink(boxCalcGehrungAltElements),
        }
    ]
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
            </SidebarHeader>
            <SidebarContent>
                <BoxProjects boxes={menu.boxes}/>
            </SidebarContent>
            <SidebarFooter>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
