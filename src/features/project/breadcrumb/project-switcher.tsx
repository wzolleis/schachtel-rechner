import {projectStore$} from "@/features/project/repo/project-store"
import {use$} from "@legendapp/state/react"
import {useLiveQuery} from "@tanstack/react-db";
import {projectCollection} from "@/features/project/repo/project-collection";
import {BreadcrumbItem} from "@/components/ui/breadcrumb";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {FolderIcon, Plus} from "lucide-react";
import {Project} from "@/features/project/project-schema";
import {useNavigateToProjectEdit} from "@/features/project/hooks/navigate-to-project-edit";
import {useNavigateToProjectCreate} from "@/features/project/hooks/navigate-to-project-create";

export function ProjectSwitcher() {
    const currentProjectId = use$(projectStore$.currentProjectId)
    const {data: projects} = useLiveQuery((q) => q.from({project: projectCollection}))
    const currentProject = projects.find(project => project.id === currentProjectId)
    const navigateToProjectEdit = useNavigateToProjectEdit()
    const navigateToProjectCreate = useNavigateToProjectCreate()

    const onSelectProject = (project: Project) => {
        projectStore$.setProject(project.id)
        navigateToProjectEdit(project.id)
    }

    return (
        <>
            <BreadcrumbItem>
                <DropdownMenu>
                    <DropdownMenuTrigger className={"focus:outline-none"}>
                        {currentProject?.name ?? "Kein Projekt"}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">

                        {projects.map(project => <DropdownMenuItem className="gap-2 p-2" key={project.id}
                                                                   onSelect={() => onSelectProject(project)}>
                            <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                                <FolderIcon className="size-4"/>
                            </div>
                            <div className="text-muted-foreground font-medium">{project.name}</div>
                        </DropdownMenuItem>)}
                        {projects.length > 0 && <DropdownMenuSeparator/>}
                        <DropdownMenuItem className="gap-2 p-2" onSelect={() => navigateToProjectCreate()}>
                            <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                                <Plus className="size-4"/>
                            </div>
                            <div className="text-muted-foreground font-medium">Neues Projekt</div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </BreadcrumbItem>
        </>
    )
}