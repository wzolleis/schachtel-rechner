import {LengthMeasurement} from "../../features/box-calc/gehrung";
import {Label} from "@/components/ui/label";

type LengthMeasurementVieProps = {
    value: LengthMeasurement
    id: string
    label: string
}

const LengthMeasurementView = (props: LengthMeasurementVieProps) => {
    const {value, id, label} = props
    return (
        <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor={id}>{label}</Label>
            <input type="number"
                   id={id}
                   value={value.value}
                   readOnly={true}
            />
        </div>
    )
}

export default LengthMeasurementView