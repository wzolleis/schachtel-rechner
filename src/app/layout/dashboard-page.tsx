import {AppSidebar} from "@/app/layout/app-sidebar"
import {Separator} from "@/components/ui/separator"
import {SidebarInset, SidebarProvider, SidebarTrigger,} from "@/components/ui/sidebar"
import {BoxCalcLandingPage} from "@/features/box-calc/box-calc-landing-page"
import {ProjectBreadcrumbs} from "@/components/project/project-breadcrumbs"

export default function DashboardPage() {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <header
                    className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1"/>
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <ProjectBreadcrumbs />
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className=" min-h-[100vh] flex-1 rounded-xl md:min-h-min">
                     <div className={"w-full mx-auto max-w-7xl mt-8"}>
                         <BoxCalcLandingPage/>
                     </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
