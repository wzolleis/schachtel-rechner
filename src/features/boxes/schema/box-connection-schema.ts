import {z} from "zod";
import {IdTypeSchema} from "@/features/boxes/schema/box-schema";

const BoxConnectionTypeSchema = z.enum(["gehrung", "nut", "schubladenfräser"])

const BoxConnectionSchema = z.object({
    id: IdTypeSchema,
    sides: IdTypeSchema.array().optional(),
    type: BoxConnectionTypeSchema .nonoptional()
})

export const BoxConnectionsSchema = z.object({
    id: IdTypeSchema,
    boxId: IdTypeSchema,
    leftFront: BoxConnectionSchema,
    rightFront: BoxConnectionSchema,
    leftBack: BoxConnectionSchema,
    rightBack: BoxConnectionSchema,
    bottom: BoxConnectionSchema,
    top: BoxConnectionSchema
})

export type BoxConnections = z.infer<typeof BoxConnectionsSchema>
export type BoxConnection = z.infer<typeof BoxConnectionSchema>
export type BoxConnectionType = z.infer<typeof BoxConnectionTypeSchema>


