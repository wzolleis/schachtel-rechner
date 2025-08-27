import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import {LucideIcon} from "lucide-react";

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
                            <a href={item.url}>
                                <item.icon/>
                                <span>{item.name}</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}

            </SidebarMenu>
        </SidebarGroup>
    )

}