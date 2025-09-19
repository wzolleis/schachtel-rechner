import {useNavigate} from "react-router";

export const useNavigateToProjectEdit = () => {
    const navigate = useNavigate();
    return (projectId: string) => navigate(`/projects/${projectId}/edit`);
}