import {useNavigate} from "react-router";

export const useNavigateToProjects = () => {
    const navigate = useNavigate();
    const target = '/projects/dashboard'
    const navigateToProjects = () => {
        navigate('/projects/dashboard');
    }
    return {navigateToProjects, target}
}