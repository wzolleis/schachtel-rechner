import * as React from "react"
import {Box, FolderOpen, LucideIcon} from "lucide-react"
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
import {Link} from "react-router";

interface AppSidebarMenuitem {
    name: string
    icon: LucideIcon
    url: string
}

const menu: Record<string, AppSidebarMenuitem[]> = {
    projects: [
        {
            name: 'Projekte',
            icon: FolderOpen,
            url: '/projects/dashboard'
        }
    ],
    boxes: [
        {
            name: 'Boxen',
            icon: Box,
            url: '/boxes/dashboard'
        }
    ]
}

export const AppSidebarMenu = ({items}: { items: AppSidebarMenuitem[] }) => {
    return (
        <SidebarMenu>
            {
                items.map((item: AppSidebarMenuitem) => {
                    return (<SidebarMenuItem key={item.name}>
                            <SidebarMenuButton asChild>
                                <Link to={item.url}>
                                    <item.icon/>
                                    <span>{item.name}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    )
                })
            }
        </SidebarMenu>
    )
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                    <SidebarGroupLabel>General</SidebarGroupLabel>
                    <AppSidebarMenu items={menu.projects}/>
                    <AppSidebarMenu items={menu.boxes}/>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
