import {useLiveQuery} from "@tanstack/react-db";
import {projectCollection} from "@/features/projects/repo/project-collection";
import {use$} from "@legendapp/state/react";
import {projectStore$} from "@/features/projects/repo/project-store";
import {PageDescription, PageHeaderSeparator, PageTitle} from "@/components/ui/page-header";

export const ProjectDelete = () => {
    const currentProjectId = use$(projectStore$.currentProjectId)
    const {data: projects} = useLiveQuery((q) => q.from({project: projectCollection}))
    const currentProject = projects.find(project => project.id === currentProjectId)

    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <PageTitle>{currentProject?.name}</PageTitle>
                    <PageHeaderSeparator/>
                    <PageDescription>Hier bearbeitest du das Projekt</PageDescription>
                </div>

            </div>
        </>

    )
}