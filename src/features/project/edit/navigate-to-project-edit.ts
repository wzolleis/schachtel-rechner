import {Project} from "@/features/project/project-schema";
import {useNavigate} from "react-router";

export const useNavigateToProjectEdit = () => {
    const navigate = useNavigate();
    return (project: Project) => navigate(`projects/${project.id}/edit`);
}