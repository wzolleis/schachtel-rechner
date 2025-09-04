import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import {LucideIcon} from "lucide-react";
import {Link} from "react-router";

export type BoxProject = {
    url: string;
    name: string
    icon: LucideIcon
}

export type BoxProjectsProps = {
    boxes: BoxProject[]
}

export const BoxProjects = ({boxes}: BoxProjectsProps) => {
    return (
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Boxes</SidebarGroupLabel>
            <SidebarMenu>
                {boxes.map((item) => (
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
    )

}