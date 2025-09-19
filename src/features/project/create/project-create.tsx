import {CreateProjectDialog} from "@/features/project/create/create-project-dialog";
import {useState} from "react";
import {useNavigateToProjects} from "@/features/project/hooks/navigate-to-projects";

export const ProjectCreate = () => {
    const [showCreateProjectDialog, setShowCreateProjectDialog] = useState<boolean>(true)
    const {navigateToProjects} = useNavigateToProjects()


    const onOpenChange = (open: boolean) => {
        setShowCreateProjectDialog(open)
        navigateToProjects()
    }

    return (
        <CreateProjectDialog
            open={showCreateProjectDialog}
            onOpenChange={onOpenChange}
        />
    )
}