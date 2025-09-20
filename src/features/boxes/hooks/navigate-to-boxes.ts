import {useNavigate} from "react-router";

export const useNavigateToBoxes = () => {
    const navigate = useNavigate();
    const target = '/boxes/dashboard'
    const navigateToBoxes = () => {
        navigate(target);
    }
    return {navigateToBoxes, target}
}