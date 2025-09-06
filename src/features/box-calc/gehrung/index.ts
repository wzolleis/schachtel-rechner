import {z} from "zod";

export const GehrungSchema = z.object({
    outerDimension: z.number(),
    thickness: z.number(),
    length: z.number(),
    width: z.number(),
    height: z.number(),
    outer: z.boolean(),
    falz: z.number()
})

export type GehrungFormData = z.infer<typeof GehrungSchema>

export type FormFieldName = keyof GehrungFormData

export type Size = {
    length: LengthMeasurement,
    width: LengthMeasurement,
}

export type DistanceUnit = 'mm'

export type LengthMeasurement = {
    value: number,
    unit: DistanceUnit
}

export type BoxCalcResultData = {
    input: GehrungFormData,
    innen: Size,
    boden: Boden,
    seite: Seite,
    front: Front
}
export type BoxPartName = "Boden" | "Seite" | "Front"

export type Boden = {
    name: BoxPartName,
    size: Size
}

export type Seite = {
    name: BoxPartName,
    size: Size,
    distance: LengthMeasurement
}

export type Front = {
    name: BoxPartName,
    size: Size,
    distance: LengthMeasurement
}

