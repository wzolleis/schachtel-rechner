import {createCollection, localStorageCollectionOptions} from "@tanstack/react-db";
import {BoxSchema} from "@/features/box/box-schema";

export const boxCollection = createCollection(localStorageCollectionOptions({
    schema: BoxSchema,
    storageKey: "boxes",
    getKey: (box) => box.id
}))

