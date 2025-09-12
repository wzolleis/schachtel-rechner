import {Label} from "@/components/ui/label";
import {ValueWithUnitDefinition} from "@/lib/unit-utils";

type LengthMeasurementVieProps = {
    value: ValueWithUnitDefinition
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
                   value={value?.value}
                   readOnly={true}
            />
        </div>
    )
}

export default LengthMeasurementView