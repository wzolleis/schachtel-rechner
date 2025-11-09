import {z} from "zod";
import {BoxNameSchema, ValueWithUnitSchema} from "@/features/boxes/schema/box-schema";
import {BoxConnectionsSchema} from "@/features/boxes/schema/box-connection-schema";
import {IdTypeSchema} from "@/common/schemas/id-type-schema";

export const EditBoxFormSchema = z.object({
    simpleSideDefinition: z.boolean().default(true).nonoptional(),
    projectId: IdTypeSchema,
    name: BoxNameSchema,
    height: ValueWithUnitSchema,
    width: ValueWithUnitSchema,
    depth: ValueWithUnitSchema,
    thickness: ValueWithUnitSchema,
    connections: BoxConnectionsSchema.optional()
})

export type EditBoxFormInput = z.input<typeof EditBoxFormSchema>
export type EditBoxFormOutput = z.output<typeof EditBoxFormSchema>