import {Form} from "react-router";
import {defaultValues} from "./index";

const BoxCalcForm = () => {
    //let data = useLoaderData();
    //let fetcher = useFetcher();



    return (
        <div className={'container-fluid  p-3'}>
            <h3>Berechne die Teile für eine Box mit Gehrung</h3>
            <Form method='POST'>
                <div className={'border-2'}>
                    <div className={'row-end-3'}>
                        <div className="form-check">
                            <input type="checkbox"
                                   className="form-check-input"
                                   id="innen-aussen-checkbox"
                                   defaultChecked={defaultValues.outer}
                                   name={'outer'}
                            />
                            <label className="form-check-label" htmlFor="innen-aussen-checkbox">Aussen</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label htmlFor="staerke-input" className="form-label">Material-Dicke (mm)</label>
                            <input type="number"
                                   className="form-control"
                                   id="dicke-input"
                                   defaultValue={defaultValues.thickness}
                                   name={"thickness"}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label htmlFor="falztiefe-input" className="form-label">Falz-Tiefe (mm)</label>
                            <input type="number"
                                   className="form-control"
                                   id="falz"
                                   defaultValue={defaultValues.falz}
                                   name={"falz"}
                            />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">
                            <label htmlFor="breite-input" className="form-label">Front (mm)</label>
                            <input type="number"
                                   className="form-control"
                                   id="breite-input"
                                   defaultValue={defaultValues.width}
                                   name={"width"}
                            />
                        </div>
                        <div className="col-3">
                            <label htmlFor="laenge-input" className="form-label">Seitenwand (mnm)</label>
                            <input type="number"
                                   className="form-control"
                                   id="laenge-input"
                                   defaultValue={defaultValues.length}
                                   name={"length"}
                            />
                        </div>
                        <div className="col-3">
                            <label htmlFor="hoehe-input" className="form-label">Hoehe der Box (mnm)</label>
                            <input type="number"
                                   className="form-control"
                                   id="hoehe-input"
                                   defaultValue={defaultValues.height}
                                   name={"height"}
                            />
                        </div>
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