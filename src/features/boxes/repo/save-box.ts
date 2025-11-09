import {calculateBox} from "@/features/boxes/edit/calculate-box";
import {boxRepo} from "@/features/boxes/repo/box-repo";
import {EditBoxFormInput} from "@/features/boxes/schema/box-edit-schema";
import {Box} from "@/features/boxes/schema/box-schema";

export const saveBox = (box: Box, data: EditBoxFormInput) => {
    const toUpdate = calculateBox(box, data)
    console.log('---> useSaveBox()', toUpdate)
    boxRepo.update(toUpdate)
}