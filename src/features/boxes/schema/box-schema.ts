import {z} from "zod";
import {BoxConnectionsSchema} from "@/features/boxes/schema/box-connection-schema";
import {IdTypeSchema} from "@/common/schemas/id-type-schema";

export const ValueWithUnitSchema = z.object({
    unit: z.enum(["mm", "cm"]).nonoptional(),
    value: z.coerce.number()
})

const BoxSideSchema = z.object({
    id: IdTypeSchema.optional(),
    width: ValueWithUnitSchema,
    height: ValueWithUnitSchema,
    thickness: ValueWithUnitSchema,
})

const BoxSidesSchema = z.object({
    front: BoxSideSchema,
    back: BoxSideSchema,
    top: BoxSideSchema,
    bottom: BoxSideSchema,
    left: BoxSideSchema,
    right: BoxSideSchema,
})

export const BoxNameSchema = z.string()
    .min(1, {
        error: "Please provide a name for your box"
    }).max(100, {
        error: "The name of your box must not exceed 100 characters"
    })
    .nonoptional()

export const SideConnectionTypes =["stumpf", "gehrung", "nut"] as const;
export const CoverConnectionTypes = ["nut", "none"] as const

export const BoxSideConnectionTypeSchema = z.enum(SideConnectionTypes);
export const BoxCoverConnectionTypeSchema = z.enum(CoverConnectionTypes);

export const BoxSchema = z.object({
    id: IdTypeSchema,
    projectId: IdTypeSchema,
    name: BoxNameSchema,
    sides: BoxSidesSchema,
    connections: BoxConnectionsSchema.optional(),
    sideConnectionType: BoxSideConnectionTypeSchema.optional(),
    coverConnectionType: BoxCoverConnectionTypeSchema.optional()
})

export const CeateBoxSchema = z.object({
    projectId: IdTypeSchema,
    projectName: IdTypeSchema,
    name: BoxNameSchema,
})

export type BoxSide = z.infer<typeof BoxSideSchema>
export type ValueWithUnit = z.infer<typeof ValueWithUnitSchema>
export type BoxSides = z.infer<typeof BoxSidesSchema>
export type Box = z.infer<typeof BoxSchema>
export type CreateBox = z.infer<typeof CeateBoxSchema>
export type BoxName = z.infer<typeof BoxNameSchema>
export type BoxId = z.infer<typeof IdTypeSchema>
export type ProjectId = z.infer<typeof IdTypeSchema>
export type ProjectName = z.infer<typeof IdTypeSchema>
export type BoxSideConnectionType = z.infer<typeof BoxSideConnectionTypeSchema>