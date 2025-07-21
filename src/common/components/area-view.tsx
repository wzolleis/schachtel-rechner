import {LengthMeasurement, Size} from "../../features/box-calc-gehrung";
import LengthMeasurementView from "./length-measurement-view";

type AreaViewProps = {
    label: string
    size: Size
    distance?: LengthMeasurement
}

const AreaView = (props: AreaViewProps) => {
    const {label, distance, size} = props
    return (
        <div className={'row'}>
            <h5>{label}</h5>

            <LengthMeasurementView id={'length'}
                                   value={size.length}
                                   label={`Länge (${size.length.unit})`}
            />
            <LengthMeasurementView id={'width'}
                                   value={size.width}
                                   label={`Breite (${size.width.unit})`}
            />
            {
                !!distance &&
                <LengthMeasurementView id={'distance'}
                                       value={distance}
                                       label={`Abstand Seitenanschlag (${distance.unit})`}
                />
            }
        </div>
    )
}

export default AreaView