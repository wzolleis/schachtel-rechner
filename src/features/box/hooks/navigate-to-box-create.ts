import {useNavigate} from "react-router";

export const useNavigateToPBoxCreate = () => {
    const navigate = useNavigate();
    return (projectId: string) => navigate(`/projects/${projectId}/boxes/create`);
}