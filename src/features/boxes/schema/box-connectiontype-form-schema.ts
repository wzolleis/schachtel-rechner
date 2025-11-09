import {z} from "zod";
import {IdTypeSchema} from "@/common/schemas/id-type-schema";

export const EditBoxConnectionTypeFormInputSchema = z.object({
    boxId: IdTypeSchema.optional(),
})

export type EditBoxConnectionTypeFormInput = z.input<typeof EditBoxConnectionTypeFormInputSchema>
