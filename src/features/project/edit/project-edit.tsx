import {useLiveQuery} from "@tanstack/react-db";
import {projectCollection} from "@/features/project/repo/project-collection";
import {use$} from "@legendapp/state/react";
import {projectStore$} from "@/features/project/repo/project-store";

export const ProjectEdit = () => {
    const currentProjectId = use$(projectStore$.currentProjectId)
    const {data: projects} = useLiveQuery((q) => q.from({project: projectCollection}))
    const currentProject = projects.find(project => project.id === currentProjectId)

    return (
        <div>{`Project ${currentProject?.name}`}</div>
    )
}