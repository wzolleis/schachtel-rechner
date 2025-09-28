import {z} from "zod";
import {BoxNameSchema, IdTypeSchema, ValueWithUnitSchema} from "@/features/boxes/box-schema";

export const EditBoxFormSchema = z.object({
    simpleSideDefinition: z.boolean().default(true).nonoptional(),
    projectId: IdTypeSchema,
    name: BoxNameSchema,
    height: ValueWithUnitSchema,
    width: ValueWithUnitSchema,
    depth: ValueWithUnitSchema,
    thickness: ValueWithUnitSchema
})

export type EditBoxFormInput = z.input<typeof EditBoxFormSchema>
export type EditBoxFormOutput = z.output<typeof EditBoxFormSchema>
export type EditBoxFormValues = z.infer<EditBoxFormInput>
