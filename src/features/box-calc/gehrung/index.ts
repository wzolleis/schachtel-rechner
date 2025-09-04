import {z} from "zod";

export const GehrungSchema = z.object({
    outerDimension: z.number().min(1),
    thickness: z.number().min(6),
    length: z.number().min(1),
    width: z.number().min(1),
    height: z.number().min(1),
    outer: z.boolean(),
    falz: z.number().min(1)
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

