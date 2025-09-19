import {useNavigate} from "react-router";

export const useNavigateToProjectBoxes = () => {
    const navigate = useNavigate();
    const boxesUrl = (projectId: string) => `/projects/${projectId}/boxes`
    const navigateToBoxes = (projectId: string) => {
        navigate(boxesUrl(projectId));
    }
    return {navigateToBoxes, boxesUrl}
}