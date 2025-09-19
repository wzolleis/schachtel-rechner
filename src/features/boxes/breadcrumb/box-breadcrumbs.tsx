import {BoxSwitcher} from "@/features/boxes/breadcrumb/box-switcher";
import {Link} from "react-router";
import {BreadcrumbItem, BreadcrumbSeparator} from "@/components/ui/breadcrumb";
import {useNavigateToProjectBoxes} from "@/features/boxes/hooks/navigate-to-project-boxes";
import {use$} from "@legendapp/state/react";
import {projectStore$} from "@/features/projects/repo/project-store";

export const BoxBreadcrumbs = () => {
    const navigation = useNavigateToProjectBoxes()
    const projectId = use$(projectStore$.currentProjectId)

    return (
        <>
            {projectId &&
                <>
                    <BreadcrumbItem>
                        <Link to={navigation.boxesUrl(projectId)}>
                            <span>{'Boxen'}</span>
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block"/>
                </>
            }
            <BoxSwitcher/>
        </>
    )
}