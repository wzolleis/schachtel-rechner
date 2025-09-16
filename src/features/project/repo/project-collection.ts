import {createCollection, localStorageCollectionOptions} from "@tanstack/react-db";
import {ProjectSchema} from "@/features/project/project-schema";

export const projectCollection = createCollection(localStorageCollectionOptions({
    schema: ProjectSchema,
    storageKey: "projects",
    getKey: (item) => item.id,
}))