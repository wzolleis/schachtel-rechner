import {z} from "zod";
import {IdTypeSchema} from "@/features/boxes/schema/box-schema";

export const SideConnectionTypeValuesSchema = z.enum([
        "STUMPF", "GEHRUNG", "FALZ", "NUT"
    ])

export const SideConnectionTypeSchema = z.object(
    {
        id: IdTypeSchema.optional(),
        connectionType: SideConnectionTypeValuesSchema,
        label: z.string().nonempty().nonoptional(),
        description: z.string().optional(),
        defaultConnectionType: z.boolean().default(false)
    })

export const SideConnectionSchema = z.object({
    id: IdTypeSchema,
    sides: z.array(IdTypeSchema).min(2),
    connectionType: SideConnectionTypeSchema,
})

export type SideConnectionType = z.infer<typeof SideConnectionTypeSchema>



