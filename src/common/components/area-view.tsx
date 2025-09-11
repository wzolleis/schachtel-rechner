import LengthMeasurementView from "./length-measurement-view";
import {ValueWithUnitDefinition} from "@/lib/unit-utils";

type AreaViewProps = {
    label: string
    length: ValueWithUnitDefinition
    width: ValueWithUnitDefinition
    distance?: ValueWithUnitDefinition
}

const AreaView = (props: AreaViewProps) => {
    const {label, distance, length, width} = props

    return (
        <div className="grid w-full max-w-sm items-center gap-3">
            <h5>{label}</h5>

            <LengthMeasurementView id={'length'}
                                   value={length}
                                   label={`Länge (${length?.unit})`}
            />
            <LengthMeasurementView id={'width'}
                                   value={width}
                                   label={`Breite (${width?.unit})`}
            />
            {
                !!distance &&
                <LengthMeasurementView id={'distance'}
                                       value={distance}
                                       label={`Abstand Seitenanschlag (${distance?.unit})`}
                />
            }
        </div>
    )
}

export default AreaView