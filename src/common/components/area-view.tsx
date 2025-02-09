import {Size} from "../../features/box-calc";
import LengthMeasurementView from "./length-measurement-view";

type AreaViewProps = {
    label: string
    size: Size
}

const AreaView = (props: AreaViewProps) => {
    const {label, size} = props
    return (
        <div className={'row'}>
            <h5>{label}</h5>
            <LengthMeasurementView id={'width'}
                                   value={size.width}
                                   label={'Breite'}
            />
            <LengthMeasurementView id={'length'}
                                   value={size.length}
                                   label={'Laenge'}
            />
        </div>
    )
}

export default AreaView