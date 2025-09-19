import * as React from "react";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/ui/command";

export function PageSidebar({...props}: React.ComponentProps<typeof SidebarGroup>) {
    return (
        <SidebarGroup {...props} className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Demo</SidebarGroupLabel>
            <SidebarMenu>
                <SidebarMenuItem key={'demo'}>
                    <SidebarMenuButton asChild>
                        <Command>
                            <CommandInput placeholder="Type a command or search..."/>
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup heading="Suggestions">
                                    <CommandItem>Calendar</CommandItem>
                                    <CommandItem>Search Emoji</CommandItem>
                                    <CommandItem>Calculator</CommandItem>
                                </CommandGroup>
                                <CommandSeparator/>
                                <CommandGroup heading="Settings">
                                    <CommandItem>Profile</CommandItem>
                                    <CommandItem>Billing</CommandItem>
                                    <CommandItem>Settings</CommandItem>
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
    )
}