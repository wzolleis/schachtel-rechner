import {useLiveQuery} from "@tanstack/react-db";
import {projectCollection} from "@/features/projects/repo/project-collection";
import {use$} from "@legendapp/state/react";
import {projectStore$} from "@/features/projects/repo/project-store";
import {PageDescription, PageHeaderSeparator, PageTitle} from "@/components/ui/page-header";
import {AnimatePresence, motion} from "motion/react";
import {ProjectsEmpty} from "@/features/projects/dashboard/projects-empty";
import {NoProjectFoundError} from "@/features/projects/errors/no-project-found-error";
import {boxCollection} from "@/features/boxes/repo/box-collection";
import {BoxCard} from "@/features/boxes/dashboard/box-card";

export const ProjectEdit = () => {
    const currentProjectId = use$(projectStore$.currentProjectId)
    const {data: projects} = useLiveQuery((q) => q.from({project: projectCollection}))
    const currentProject = projects.find(project => project.id === currentProjectId)
    const {data: boxes} = useLiveQuery((q) => q.from({boxes: boxCollection}))
    const projectBoxes = boxes.filter(box => box.projectId === currentProjectId)

    if (!currentProject || !currentProjectId) {
        return <NoProjectFoundError/>
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <PageTitle>{`${currentProject?.name}`}</PageTitle>
                    <PageHeaderSeparator/>
                    <PageDescription>Hier bearbeitest du dein Projekt</PageDescription>
                </div>
            </div>

            {boxes.length > 0 ?
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence initial={false}>
                        {projectBoxes.map((box, index) => (
                            <motion.div
                                key={box.id}
                                layout
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                    filter: "blur(4px)"
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)"
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -10,
                                    filter: "blur(2px)",
                                    transition: {
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30,
                                        duration: 0.12
                                    }
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25,
                                    delay: index * 0.03
                                }}
                            >
                                <BoxCard
                                    box={box}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div> : <ProjectsEmpty/>}
        </>
    )
}