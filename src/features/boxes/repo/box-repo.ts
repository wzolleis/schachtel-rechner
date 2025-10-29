import {Box} from "@/features/boxes/schema/box-schema";
import {boxCollection} from "@/features/boxes/repo/box-collection";
 
const update = (toUpdate: Box) => {
    boxCollection.update(toUpdate.id,
        (draft) => {
            draft.name = toUpdate.name
            draft.sides = toUpdate.sides
            draft.projectId = toUpdate.projectId
        })
}


const insert = (toInsert: Box) => {
    return boxCollection.insert(toInsert)
}

export const boxRepo = {
    insert,
    update
}
