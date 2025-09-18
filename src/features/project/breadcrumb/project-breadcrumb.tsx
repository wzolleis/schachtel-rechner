import {BreadcrumbItem, BreadcrumbSeparator} from "@/components/ui/breadcrumb";
import {ProjectSwitcher} from "@/features/project/breadcrumb/project-switcher";
import {Link} from "react-router";
import {useNavigateToProjects} from "@/features/project/hooks/navigate-to-projects";

export const ProjectBreadcrumb = () => {
    const projectsNavigation = useNavigateToProjects()
    return (
        <>
            <BreadcrumbItem>
                <Link to={projectsNavigation.target}>
                    <span>{'Projekte'}</span>
                </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block"/>
            <ProjectSwitcher/>

        </>
    )
}