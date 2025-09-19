import {useNavigate} from "react-router";

export const useNavigateToBoxEdit = () => {
    const navigate = useNavigate();
    return (boxId: string) => navigate(`/boxes/${boxId}/edit`);
}