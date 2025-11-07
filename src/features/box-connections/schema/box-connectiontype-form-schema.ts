import {z} from "zod";
import {IdTypeSchema} from "@/features/boxes/schema/box-schema";

export const EditBoxConnectionTypeFormInputSchema = z.object({
    boxId: IdTypeSchema.optional(),

})

export type EditBoxConnectionTypeFormInput = z.input<typeof EditBoxConnectionTypeFormInputSchema>
