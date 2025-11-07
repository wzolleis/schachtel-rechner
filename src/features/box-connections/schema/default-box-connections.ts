import {BoxConnections, BoxConnectionType} from "@/features/boxes/schema/box-connection-schema";
import {createId} from "@paralleldrive/cuid2";

const BOX_CONNECTION_TYPE_GEHRUNG: BoxConnectionType = "gehrung"
const BOX_CONNECTION_TYPE_NUT: BoxConnectionType = "nut"

export const defaultBoxSideConnection = (id: string) => {
    return {
        id,
        type: BOX_CONNECTION_TYPE_GEHRUNG,
        sides: [],
        boxId: undefined,
    }
}
export const defaultBoxCoverConnection = (id: string) => {
    return {
        id,
        type: BOX_CONNECTION_TYPE_NUT,
        sides: [],
        boxId: undefined,
    }
}

export const defaultBoxConnections = (id: string, boxId: string): BoxConnections => {
    return {
        id,
        boxId,
        leftFront: defaultBoxSideConnection(createId()),
        leftBack: defaultBoxSideConnection(createId()),
        rightBack: defaultBoxSideConnection(createId()),
        rightFront: defaultBoxSideConnection(createId()),
        top: defaultBoxCoverConnection(createId()),
        bottom: defaultBoxCoverConnection(createId())
    }
}