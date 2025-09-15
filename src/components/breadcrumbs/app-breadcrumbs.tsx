import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {ProjectSwitcher} from "../../features/project/project-switcher"
import {BoxSwitcher} from "@/features/box/box-switcher";

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
                <ProjectSwitcher/>
                <BreadcrumbSeparator className="hidden md:block"/>
                <BoxSwitcher/>
            </BreadcrumbList>
        </Breadcrumb>
    )
}