import {LengthMeasurement} from "../../features/box-calc";

type LengthMeasurementVieProps = {
    value: LengthMeasurement
    id: string
    colClass?: string
    label: string
}

const LengthMeasurementView = (props: LengthMeasurementVieProps) => {
    const {value, id, label, colClass = 'col-12 col-md-3'} = props
    return (
        <div className={colClass}>
            <label htmlFor={id} className="form-label">{label}</label>
            <input type="number"
                   className="form-control"
                   id={id}
                   value={value.value}
                   readOnly={true}
            />
        </div>
    )
}

export default LengthMeasurementView