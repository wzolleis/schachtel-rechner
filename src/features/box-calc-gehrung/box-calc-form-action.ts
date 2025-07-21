// noinspection JSSuspiciousNameCombination

import {Boden, BoxCalcFormData, BoxCalcResultData, FormFieldName, Front, LengthMeasurement, Seite, Size} from "./index";

const extractFormValue = (formData: FormData, name: FormFieldName) => {
    return formData.get(name) as string
}

export const calculateBox = async ({request}: { request: Request }): Promise<BoxCalcResultData> => {
    const formData: FormData = await request.formData()
    const data: BoxCalcFormData = {
        thickness: Number.parseInt(extractFormValue(formData, 'thickness')),
        length: Number.parseInt(extractFormValue(formData, 'length')),
        width: Number.parseInt(extractFormValue(formData, 'width')),
        height: Number.parseInt(extractFormValue(formData, 'height')),
        outer: !!extractFormValue(formData, 'outer'),
        falz: Number.parseInt(extractFormValue(formData, 'falz'))
    }
    const innen: Size = calculateInnenSize(data)
    const boden: Boden = calculateBoden(data, innen)
    const seite: Seite = calculateSeite(data)
    const front: Front = calculateFront(data)
    return {innen, boden, seite, front, input: data}
}

const calculateBoden = (data: BoxCalcFormData, innen: Size): Boden => {
    const bodenSize: Size = {
        length: {value: innen.length.value + 2 * data.falz, unit: "mm"},
        width: {value: innen.width.value + 2 * data.falz, unit: "mm"}
    }

    return {
        name: "Boden",
        size: bodenSize,
    }
}

const calculateSeite = (data: BoxCalcFormData): Seite => {
    const distance: LengthMeasurement = {
        value: data.length - data.thickness,
        unit: "mm"
    }
    return {
        name: "Seite",
        size: {
            length: {value: data.length, unit: 'mm'},
            width: {value: data.height, unit: "mm"}
        },
        distance
    }
}

const calculateFront = (data: BoxCalcFormData): Front => {
    const distance: LengthMeasurement = {
        value: data.width - data.thickness,
        unit: "mm"
    }

    return {
        name: "Front",
        size: {
            length: {value: data.width, unit: 'mm'},
            width: {value: data.height, unit: "mm"}
        },
        distance
    }
}

const calculateInnenSize = (data: BoxCalcFormData): Size => {
    return {
        length: {value: data.length - 2 * data.thickness, unit: 'mm'},
        width: {value: data.width - 2 * data.thickness, unit: "mm"}
    }
}