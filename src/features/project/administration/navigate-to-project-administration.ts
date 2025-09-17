import {useNavigate} from "react-router";

export const useNavigateToProjectAdministration = () => {
    const navigate = useNavigate();
    return () => navigate('/projects/administration');
}