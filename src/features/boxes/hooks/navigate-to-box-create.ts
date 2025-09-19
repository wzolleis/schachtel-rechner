import {useNavigate} from "react-router";

export const useNavigateToBoxCreate = () => {
    const navigate = useNavigate();
    return () => navigate(`/boxes/create`);
}