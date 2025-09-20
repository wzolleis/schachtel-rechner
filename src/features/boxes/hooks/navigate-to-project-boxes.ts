import {useNavigate} from "react-router";
import {projectStore$} from "@/features/projects/repo/project-store";

export const useNavigateToProjectBoxes = () => {
    const navigate = useNavigate();
    const boxesUrl = (projectId: string) => `/projects/${projectId}/boxes`
    const navigateToBoxes = (projectId: string) => {
        projectStore$.setProject(projectId)
        navigate(boxesUrl(projectId));
    }
    return {navigateToBoxes, boxesUrl}
}