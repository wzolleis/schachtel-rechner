export type BoxCalcFormData = {
    thickness: number
    length: number
    width: number
    height: number
    outer: boolean
    falz: number
}

export type FormFieldName = keyof BoxCalcFormData

export type Size = {
    length: LengthMeasurement,
    width: LengthMeasurement,
}

export type DistanceUnit = 'mm'

export type LengthMeasurement = {
    value: number,
    unit: DistanceUnit
}

export const defaultValues: BoxCalcFormData = {
    length: 600,
    width: 300,
    thickness: 8,
    height: 100,
    outer: true,
    falz: 4
}

export type BoxCalcResultData = {
    input: BoxCalcFormData,
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

