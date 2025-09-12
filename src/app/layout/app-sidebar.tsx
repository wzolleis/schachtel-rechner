import * as React from "react"
import {Blocks, Box, FolderOpen, IceCream} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import {BoxProjects} from "@/components/box-projects"
import {
    boxCalcGehrungElements,
    boxNewElements,
    projectsElements,
    sidebarLink,
    standardDrawerElements
} from "@/app/route-urls";
import {Link} from "react-router";

const menu = {
    projects: [
        {
            name: 'Projekte',
            icon: FolderOpen,
            url: sidebarLink(projectsElements),
        }
    ],
    boxes: [
        {
            name: 'Boxes New (Experimental)',
            icon: IceCream,
            url: sidebarLink(boxNewElements)
        },
        {
            name: 'Gehrung',
            icon: Box,
            url: sidebarLink(boxCalcGehrungElements),
        },
        {
            name: 'Schubladen (Standard)',
            icon: Blocks,
            url: sidebarLink(standardDrawerElements),
        }
    ]
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                    <SidebarGroupLabel>General</SidebarGroupLabel>
                    <SidebarMenu>
                        {menu.projects.map((item) => (
                            <SidebarMenuItem key={item.name}>
                                <SidebarMenuButton asChild>
                                    <Link to={item.url}>
                                        <item.icon/>
                                        <span>{item.name}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}

                    </SidebarMenu>
                </SidebarGroup>
                <BoxProjects boxes={menu.boxes}/>
            </SidebarContent>
            <SidebarFooter>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
