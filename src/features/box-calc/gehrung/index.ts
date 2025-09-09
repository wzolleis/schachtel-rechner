import {z} from "zod/v3";
import {ValueWithUnitDefinition} from "@/lib/unit-utils";

export const GehrungSchema = z.object({
    outerDimension: z.coerce.number(),
    thickness: z.coerce.number(),
    length: z.coerce.number(),
    width:z.coerce.number(),
    height: z.coerce.number(),
    outer: z.boolean(),
    falz: z.coerce.number(),
})

export type GehrungFormData = z.infer<typeof GehrungSchema>
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

