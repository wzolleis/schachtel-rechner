import {Form} from "react-router";
import {defaultValues} from "./index";
import FormInputLabel from "../../common/components/form-input-label";
import FormCheckboxLabel from "../../common/components/form-checkbox-label";

const BoxCalcForm = () => {
    //let data = useLoaderData();
    //let fetcher = useFetcher();

    const {thickness, falz, length, width, outer, height} = defaultValues


    return (
        <div className={'p-3 bg-gradient-to-tr bg-primary-subtle'}>
            <Form method='POST'>
                <div className={'border-2'}>
                    <FormCheckboxLabel id={'innen-aussen-checkbox'}
                                       label={'Aussen'}
                                       name={'outer'}
                                       defaultValue={outer}
                    />
                    <div className="row">
                        <FormInputLabel id={'staerke-input"'}
                                        label={'Material-Dicke (mm)'}
                                        type={'number'}
                                        name={'thickness'}
                                        defaultValue={thickness}
                                        colClass={'col-xl-3 col-12'}
                        />
                        <FormInputLabel id={'falz"'}
                                        label={'Falz (mm)'}
                                        type={'number'}
                                        name={'falz'}
                                        defaultValue={falz}
                                        colClass={'col-md-3 col-12'}
                        />
                    </div>
                    <div className="row mt-2">
                        <FormInputLabel id={'width'}
                                        label={'Breite (mm)'}
                                        type={'number'}
                                        name={'width'}
                                        defaultValue={width}
                                        colClass={'col-3'}/>
                        <FormInputLabel id={'length'}
                                        label={'Länge (mm)'}
                                        type={'number'}
                                        name={'length'}
                                        defaultValue={length}
                                        colClass={'col-3'}
                        />
                        <FormInputLabel id={'height'}
                                        label={'Höhe (mm)'}
                                        type={'number'}
                                        name={'height'}
                                        defaultValue={height}
                                        colClass={'col-3'}
                        />
                    </div>
                </div>
                <div className={'row-auto mt-3'}>
                    <button type="submit" className="btn btn-primary">Berechnung</button>
                </div>
            </Form>
        </div>
    )
}

export default BoxCalcForm