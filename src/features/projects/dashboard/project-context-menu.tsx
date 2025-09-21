import {Edit2, EllipsisVertical} from "lucide-react"
import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Project} from "@/features/projects/project-schema";
import {useNavigateToProjectEdit} from "@/features/projects/hooks/navigate-to-project-edit";

interface ProjectContextMenuProps {
    project: Project
}

export function ProjectContextMenu({project}: ProjectContextMenuProps) {
    const {navigateToProjectEdit} = useNavigateToProjectEdit()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="size-8 p-0 hover:bg-gray-100"
                >
                    <EllipsisVertical className="size-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{`${project.name}`}</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem onSelect={() => navigateToProjectEdit(project.id)}>
                        <Edit2 className="mr-2 h-4 w-4"/>
                        <span>Bearbeiten</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}