import {z} from "zod";

export const ValueWithUnitSchema = z.object({
    unit: z.enum(["mm", "cm"]),
    value: z.number()
})
export type ValueWithUnit = z.infer<typeof ValueWithUnitSchema>

const BoxSideSchema = z.object({
    width: ValueWithUnitSchema,
    height: ValueWithUnitSchema,
    thickness: ValueWithUnitSchema
})

const BoxSidesSchema = z.object({
    front: BoxSideSchema,
    back: BoxSideSchema,
    top: BoxSideSchema,
    bottom: BoxSideSchema,
    left: BoxSideSchema,
    right: BoxSideSchema,
    sameThickness: z.boolean().default(true),
    sameFrontAndBack: z.boolean().default(true),
    sameLeftAndRight: z.boolean().default(true),
})


const BoxNameSchema = z.string().min(1, {
    error: "Please provide a name for your box"
}).max(100, {error: "The name of your box must not exceed 100 characters"})


export const BoxSchema = z.object({
    id: z.string(),
    projectId: z.string(),
    name: BoxNameSchema,
    sides: BoxSidesSchema,
})
export const createBoxSchema = z.object({
    projectId: z.string(),
    projectName: z.string(),
    name: BoxNameSchema,
})


export type BoxSide = z.infer<typeof BoxSideSchema>
export type BoxSides = z.infer<typeof BoxSidesSchema>

export type Box = z.infer<typeof BoxSchema>

export type CreateBox = z.infer<typeof createBoxSchema>