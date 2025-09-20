import {use$} from "@legendapp/state/react";
import {projectStore$} from "@/features/projects/repo/project-store";

export const useProjectStore = () => {
    const currentProjectId = use$(projectStore$.currentProjectId)
    const setProject = projectStore$.setProject

    return {
        currentProjectId,
        setProject
    }
}