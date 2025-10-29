import {useCallback, useTransition} from "react";
import {calculateBox} from "@/features/boxes/edit/calculate-box";
import {boxRepo} from "@/features/boxes/repo/box-repo";
import {EditBoxFormInput} from "@/features/boxes/schema/box-edit-schema";
import {Box} from "@/features/boxes/schema/box-schema";

export const useSaveBox = () => {
    const [pending, startTransition] = useTransition()
    const saveBox =  useCallback((box: Box, data: EditBoxFormInput) => {
        startTransition(() => {
            const toUpdate = calculateBox(box, data)
            boxRepo.update(toUpdate)
        })
    }, [startTransition])

    return {saveBox, pending}
}