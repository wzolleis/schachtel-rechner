import {useEffect, useRef} from "react"
import {Plus} from "lucide-react"
import {Button} from "@/components/ui/button"
import {FoldersIcon, type FoldersIconHandle} from "@/components/ui/folders";
import {CreateBoxDialog} from "@/features/boxes/create/create-box-dialog";
import {useBoolean} from "@/hooks/use-boolean";

export const BoxesEmpty = () => {
    const createDialog = useBoolean(false)
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
            <CreateBoxDialog
                open={createDialog.value}
                onOpenChange={createDialog.setValue}
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
                        Keine Boxen vorhanden
                    </h2>
                    <p className="text-sm text-gray-600 font-mono mb-8">
                        Erstellen deine erste Box
                    </p>
                    <Button
                        onClick={createDialog.setTrue}
                        className="font-mono uppercase tracking-wider"
                    >
                        <Plus className="w-4 h-4 mr-2"/>
                        Box erstellen
                    </Button>
                </div>
            </div>
        </>
    )
}