import {useLiveQuery} from "@tanstack/react-db";
import {boxCollection} from "@/features/boxes/repo/box-collection";
import {BoxesEmpty} from "@/features/boxes/dashboard/boxes-empty";
import {PageDescription, PageHeaderSeparator, PageTitle} from "@/components/ui/page-header";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";
import {useNavigateToBoxCreate} from "@/features/boxes/hooks/navigate-to-box-create";
import {BoxCard} from "@/features/boxes/edit/box-card";

export const BoxesPage = () => {
    const {data: boxes} = useLiveQuery(q => q.from({boxes: boxCollection}))

    const createBox = useNavigateToBoxCreate()
    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <PageTitle>Boxen</PageTitle>
                    <PageHeaderSeparator/>
                    <PageDescription>Hier verwaltest du die gespeicherten Boxen</PageDescription>
                </div>
                <Button
                    onClick={createBox}
                    className="font-mono uppercase tracking-wider"
                >
                    <Plus className="w-4 h-4 mr-2"/>
                    Neue Box
                </Button>
            </div>
            {boxes.length > 0 ?
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence initial={false}>
                        {boxes.map((box, index) => (
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
                </div> : < BoxesEmpty/>
            }
        </>
    )
}