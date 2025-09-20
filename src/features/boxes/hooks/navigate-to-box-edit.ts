import {useNavigate} from "react-router";
import {boxStore$} from "@/features/boxes/repo/box-store";

export const useNavigateToBoxEdit = () => {
    const navigate = useNavigate();
    const navigateToBoxEdit = (boxId: string) => {
        boxStore$.selectBox(boxId)
        navigate(`/boxes/${boxId}/edit`);
    }

    return {
        navigateToBoxEdit
    }

}