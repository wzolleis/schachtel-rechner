import {BoxCalcFormData, Dimension, FormFieldName} from "./index";

const extractFormValue = (formData: FormData, name: FormFieldName ) => {
    return formData.get(name) as string
}

export const calculateBox = async ({  request }: {request: Request}) => {
    console.log("calculate box ....")
    const formData: FormData = await request.formData()
    const data: BoxCalcFormData = {
        thickness: Number.parseInt(extractFormValue(formData, 'thickness')) ,
        length: Number.parseInt(extractFormValue(formData, 'length')),
        width: Number.parseInt(extractFormValue(formData, 'width')),
        height: Number.parseInt(extractFormValue(formData, 'height')),
        outer: !!extractFormValue(formData, 'outer'),
        falz: Number.parseInt(extractFormValue(formData, 'falz'))
    }
    console.log('form data =', data)

    const innen: Dimension = {
        length: data.length - 2 * data.thickness,
        width: data.width - 2 * data.thickness
    }

    const boden: Dimension = {
        length: innen.length +  2*  data.falz,
        width: innen.width + 2 * data.falz
    }

    console.log('innen', innen)
    console.log('boden', boden)


    return {}
}