import {createCollection, localStorageCollectionOptions} from "@tanstack/react-db";
import {ProjectSchema} from "@/features/projects/project-schema";

export const projectCollection = createCollection(localStorageCollectionOptions({
    schema: ProjectSchema,
    storageKey: "projects",
    getKey: (item) => item.id,
}))