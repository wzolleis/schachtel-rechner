import {useState} from "react"
import {Plus} from "lucide-react"
import {AnimatePresence, motion} from "motion/react"
import {Button} from "@/components/ui/button"
import {CreateProjectDialog} from "@/features/project/create/create-project-dialog"
import {ProjectCard} from "@/features/project/page/project-card"
import {ProjectsEmpty} from "@/features/project/page/projects-empty"
import {projectCollection} from "@/features/project/repo/project-collection"
import {useLiveQuery} from "@tanstack/react-db";
import {PageDescription, PageHeaderSeparator, PageTitle} from "@/components/ui/page-header";


export function ProjectPage() {
    const [createDialogOpen, setCreateDialogOpen] = useState(false)
    const {data: projects} = useLiveQuery((q) => q.from({project: projectCollection}))

    return (
        <>
            <CreateProjectDialog
                open={createDialogOpen}
                onOpenChange={setCreateDialogOpen}
            />
            <div className="flex items-center justify-between">
                <div>
                    <PageTitle>PROJEKTE</PageTitle>
                    <PageHeaderSeparator/>
                    <PageDescription>Hier verwaltest du gespeicherte Projekte</PageDescription>
                </div>
                <Button
                    onClick={() => setCreateDialogOpen(true)}
                    className="font-mono uppercase tracking-wider"
                >
                    <Plus className="w-4 h-4 mr-2"/>
                    Neues Projekt
                </Button>
            </div>
            {projects.length > 0 ?  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence initial={false}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
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
                            <ProjectCard
                                project={project}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div> : <ProjectsEmpty/>}
        </>
    )
}