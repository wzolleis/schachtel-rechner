import {CreateProjectDialog} from "@/features/project/create/create-project-dialog";
import {useState} from "react";
import {useNavigateToProjectAdministration} from "@/features/project/administration/navigate-to-project-administration";

export const ProjectCreate = () => {
    const [showCreateProjectDialog, setShowCreateProjectDialog] = useState<boolean>(true)
    const navigateToProjectAdministration = useNavigateToProjectAdministration()


    const onOpenChange = (open: boolean) => {
        setShowCreateProjectDialog(open)
        navigateToProjectAdministration()
    }

    return (
        <CreateProjectDialog
            open={showCreateProjectDialog}
            onOpenChange={onOpenChange}
        />
    )
}