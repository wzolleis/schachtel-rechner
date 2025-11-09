import {z} from "zod";
import {
    BoxCoverConnectionTypeSchema,
    BoxNameSchema,
    BoxSideConnectionTypeSchema,
    ValueWithUnitSchema
} from "@/features/boxes/schema/box-schema";
import {IdTypeSchema} from "@/common/schemas/id-type-schema";

export const EditBoxFormSchema = z.object({
    simpleSideDefinition: z.boolean().default(true).nonoptional(),
    projectId: IdTypeSchema,
    name: BoxNameSchema,
    height: ValueWithUnitSchema,
    width: ValueWithUnitSchema,
    depth: ValueWithUnitSchema,
    thickness: ValueWithUnitSchema,
    sideConnectionType: BoxSideConnectionTypeSchema.optional().default('stumpf'),
    coverConnectionType: BoxCoverConnectionTypeSchema.optional().default('nut')
})

export type EditBoxFormInput = z.input<typeof EditBoxFormSchema>
export type EditBoxFormOutput = z.output<typeof EditBoxFormSchema>