import {boxConnectionsCollection} from "@/features/box-connections/repo/box-connections-collection";
import {BoxConnections} from "@/features/boxes/schema/box-connection-schema";

const update = (toUpdate: BoxConnections) => {
    boxConnectionsCollection.update(toUpdate.id,
        (draft) => {
            draft.bottom = toUpdate.bottom
            draft.top = toUpdate.top
            draft.leftBack = toUpdate.leftBack
            draft.leftFront = toUpdate.leftFront
            draft.rightBack = toUpdate.rightBack
            draft.rightFront = toUpdate.rightFront
            draft.boxId = toUpdate.boxId
        })
}


const insert = (toInsert: BoxConnections) => {
    return boxConnectionsCollection.insert(toInsert)
}

export const boxConnectionsRepo = {
    insert,
    update
}
