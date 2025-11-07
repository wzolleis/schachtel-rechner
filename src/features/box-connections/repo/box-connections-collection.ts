import {createCollection, localStorageCollectionOptions} from "@tanstack/react-db";
import {BoxConnectionsSchema} from "@/features/boxes/schema/box-connection-schema";

export const boxConnectionsCollection = createCollection(localStorageCollectionOptions({
    schema: BoxConnectionsSchema,
    storageKey: "boxConnections",
    getKey: (boxConnections) => boxConnections.id
}))

