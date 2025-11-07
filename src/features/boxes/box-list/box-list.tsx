import {AnimatePresence, motion} from "motion/react";
import BoxCard from "@/features/boxes/dashboard/box-card";
import {Box} from "@/features/boxes/schema/box-schema";

export interface BoxListProps {
    boxes: Box[];

}

export const BoxList = ({boxes}: BoxListProps) => {
    return (
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
        </div>
    )
}