import * as React from "react"
import {FolderOpen, IceCream} from "lucide-react"
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
import {boxNewElements, sidebarLink,} from "@/app/route-urls";
import {Link} from "react-router";

const menu = {
    projects: [
        {
            name: 'Projekte',
            icon: FolderOpen,
            url: sidebarLink(['projects', 'dashboard']),
        }
    ],
    boxes: [
        {
            name: 'Boxes New (Experimental)',
            icon: IceCream,
            url: sidebarLink(boxNewElements)
        },
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
                {
                    /*
                    <BoxProjects boxes={menu.boxes}/>
                     */
                }
            </SidebarContent>
            <SidebarFooter>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
