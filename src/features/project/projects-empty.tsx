import {useEffect, useRef, useState} from "react"
import {Plus} from "lucide-react"
import {Button} from "@/components/ui/button"
import {CreateProjectDialog} from "@/features/project/create-project-dialog"
import {FoldersIcon, type FoldersIconHandle} from "@/components/ui/folders";

export const ProjectsEmpty = () => {
    const [createDialogOpen, setCreateDialogOpen] = useState(false)
    const foldersRef = useRef<FoldersIconHandle>(null)

    useEffect(() => {
        const startAnimation = () => {
            foldersRef.current?.startAnimation()
        }

        const stopAnimation = () => {
            foldersRef.current?.stopAnimation()
        }

        // Start animation cycle
        const interval = setInterval(() => {
            startAnimation()
            setTimeout(stopAnimation, 800)
        }, 1600)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <CreateProjectDialog
                open={createDialogOpen}
                onOpenChange={setCreateDialogOpen}
            />
            <div className="flex flex-col items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                        <FoldersIcon
                            ref={foldersRef}
                            className="text-gray-400"
                            size={48}
                        />
                    </div>
                    <h2 className="text-lg font-medium text-gray-900 tracking-wider uppercase mb-2">
                        Keine Projekte vorhanden
                    </h2>
                    <p className="text-sm text-gray-600 font-mono mb-8">
                        Erstellen Sie Ihr erstes Projekt
                    </p>
                    <Button
                        onClick={() => setCreateDialogOpen(true)}
                        className="font-mono uppercase tracking-wider"
                    >
                        <Plus className="w-4 h-4 mr-2"/>
                        Projekt erstellen
                    </Button>
                </div>
            </div>
        </>
    )
}