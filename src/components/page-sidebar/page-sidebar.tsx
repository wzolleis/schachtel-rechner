import * as React from "react";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import {Link} from "react-router";
import {PlayIcon} from "lucide-react";

export function PageSidebar({...props}: React.ComponentProps<typeof SidebarGroup>) {
    return (
        <SidebarGroup {...props} className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Demo</SidebarGroupLabel>
            <SidebarMenu>
                <SidebarMenuItem key={'demo'}>
                    <SidebarMenuButton asChild>
                        <Link to={'demo_url'}>
                            <PlayIcon/>
                            <span>{'nur eine Demo'}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
    )
}