import {z} from "zod";
import {IdTypeSchema} from "@/common/schemas/id-type-schema";
import {BoxCoverConnectionTypeSchema, BoxSideConnectionTypeSchema} from "@/features/boxes/schema/box-schema";

export const EditBoxConnectionTypeFormInputSchema = z.object({
    boxId: IdTypeSchema.optional(),
    sideConnectionType: BoxSideConnectionTypeSchema,
    coverConnectionType: BoxCoverConnectionTypeSchema,
})

export type BoxCoverConnectionType = z.infer<typeof BoxCoverConnectionTypeSchema>
export type BoxSideConnectionType = z.infer<typeof BoxSideConnectionTypeSchema>
export type EditBoxConnectionTypeFormInput = z.input<typeof EditBoxConnectionTypeFormInputSchema>
