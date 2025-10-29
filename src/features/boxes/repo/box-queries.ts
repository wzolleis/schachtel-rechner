import {useLiveQuery} from "@tanstack/react-db";
import {boxCollection} from "@/features/boxes/repo/box-collection";
import {ok, Result} from "neverthrow";
import {Box} from "@/features/boxes/schema/box-schema";

export const useFindAllBoxes = (): Result<Box[], Error> => {
    const {data: boxes} = useLiveQuery((q) => q.from({box: boxCollection}))
    return ok(boxes)
}

export const useFindBoxById = () => {
    const {data: boxes} = useLiveQuery((q) => q.from({box: boxCollection}))

    const findBoxById = (boxId: string | null): Box | undefined => {
        return boxes.find(x => x.id === boxId)
    }

    return {
        findBoxById
    }
}


