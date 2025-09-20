import {useNavigate} from "react-router";
import {projectStore$} from "@/features/projects/repo/project-store";

export const useNavigateToProjectEdit = () => {
    const navigate = useNavigate();

    const navigateToProjectEdit = (projectId: string) => {
        projectStore$.setProject(projectId)
        navigate(`/projects/${projectId}/edit`)
    }

    return {
        navigateToProjectEdit
    }

}