import {z} from "zod/v3";
import {ValueWithUnitDefinition} from "@/lib/unit-utils";

export const GehrungSchema = z.object({
    thickness: z.coerce.number().min(1),
    length: z.coerce.number().min(1),
    width: z.coerce.number().min(1),
    height: z.coerce.number().min(1),
    outer: z.boolean(),
    falz: z.coerce.number().min(1),
})

export type GehrungSchemaInput = z.input<typeof GehrungSchema>

export type Size = {
    length: ValueWithUnitDefinition,
    width: ValueWithUnitDefinition,
}

export type BoxCalcResultData = {
    innen: Size,
    boden: Boden,
    seite: Seite,
    front: Front
}

export type Boden = {
    size: Size
}

export type Seite = {
    size: Size,
    distance: ValueWithUnitDefinition
}

export type Front = {
    size: Size,
    distance: ValueWithUnitDefinition
}

