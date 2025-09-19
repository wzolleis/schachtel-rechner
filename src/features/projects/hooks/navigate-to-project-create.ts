import {useNavigate} from "react-router";

export const useNavigateToProjectCreate = () => {
    const navigate = useNavigate();
    return () => navigate('/projects/create');
}