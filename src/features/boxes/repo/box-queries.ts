import {useLiveQuery} from "@tanstack/react-db";
import {boxCollection} from "@/features/boxes/repo/box-collection";
import {err, ok, Result} from "neverthrow";
import {Box} from "@/features/boxes/box-schema";
import {BoxNotFoundError} from "@/features/boxes/errors/box-not-found-error";

export const useFindAllBoxes = (): Result<Box[], Error> => {
    const {data: boxes} = useLiveQuery((q) => q.from({box: boxCollection}))
    return ok(boxes)
}

export const useFindBoxById = () => {
    const {data: boxes} = useLiveQuery((q) => q.from({box: boxCollection}))

    const findBoxById = (boxId: string | null): Result<Box, BoxNotFoundError> => {
        const box = boxes.find(x => x.id === boxId)
        return box ? ok(box) : err(new BoxNotFoundError(boxId || 'null'))
    }

    return {
        findBoxById
    }
}


