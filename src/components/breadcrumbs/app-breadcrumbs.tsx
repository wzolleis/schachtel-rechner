import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {BoxBreadcrumbs} from "@/features/boxes/breadcrumb/box-breadcrumbs";
import {ProjectBreadcrumb} from "@/features/projects/breadcrumb/project-breadcrumb";

export function AppBreadcrumbs() {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                        Werkstatt-Tools
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block"/>
                <ProjectBreadcrumb/>
                <BreadcrumbSeparator className="hidden md:block"/>
                <BoxBreadcrumbs/>
            </BreadcrumbList>
        </Breadcrumb>
    )
}