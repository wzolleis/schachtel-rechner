import {z} from "zod";

export const CommandSchema = z.object({
    id: z.string(),
    commands: z.array(z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        callback: z.function(),
        icon: z.string(),
    }))
})
