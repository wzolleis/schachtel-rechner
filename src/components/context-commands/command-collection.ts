import {createCollection, localStorageCollectionOptions} from "@tanstack/react-db";
import {CommandSchema} from "@/components/context-commands/command-schema";

export const commandCollection = createCollection(localStorageCollectionOptions({
    schema: CommandSchema,
    storageKey: "context-commands",
    getKey: (item) => item.id,
}))