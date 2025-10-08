import { useTransition} from "react";
import {calculateBox} from "@/features/boxes/edit/calculate-box";
import {boxRepo} from "@/features/boxes/repo/box-repo";
import {EditBoxFormInput} from "@/features/boxes/edit/box-edit-form-types";
import {Box} from "@/features/boxes/box-schema";

export const useSaveBox = () => {
    const [pending, startTransition] = useTransition()
    const saveBox =  (box: Box, data: EditBoxFormInput) => {
        startTransition(() => {
            const toUpdate = calculateBox(box, data)
            boxRepo.update(toUpdate)
        })
    }

    return {saveBox, pending}
}