import {useLiveQuery} from "@tanstack/react-db";
import {projectCollection} from "@/features/projects/repo/project-collection";
import {BreadcrumbItem} from "@/components/ui/breadcrumb";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {FolderIcon, Plus} from "lucide-react";
import {Project} from "@/features/projects/project-schema";
import {useNavigateToProjectCreate} from "@/features/projects/hooks/navigate-to-project-create";
import {use$} from "@legendapp/state/react";
import {projectStore$} from "@/features/projects/repo/project-store";

export function ProjectSwitcher() {
    const {data: projects} = useLiveQuery((q) => q.from({project: projectCollection}))
    const currentProjectId = use$(projectStore$.currentProjectId)
    const currentProject = projects.find(project => project.id === currentProjectId)
    const navigateToProjectCreate = useNavigateToProjectCreate()

    const onSelectProject = (project: Project) => {
        projectStore$.setProject(project.id)
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