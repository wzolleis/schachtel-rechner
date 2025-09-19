import {CreateProjectDialog} from "@/features/projects/create/create-project-dialog";
import {useState} from "react";
import {useNavigateToProjects} from "@/features/projects/hooks/navigate-to-projects";

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