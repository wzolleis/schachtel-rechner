export type BoxCalcFormData = {
    thickness: number
    length: number
    width: number
    height: number
    outer: boolean
    falz: number
}

export type FormFieldName = keyof BoxCalcFormData

export type Dimension = {
    length: number
    width: number
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
    innen: Dimension,
    boden: Dimension
}