import {Label} from "@/components/ui/label";
import {Checkbox} from "@/components/ui/checkbox";

type InputWithLabelProps = {
    id: string
    label: string
    name: string
    disabled: boolean
    defaultValue: boolean
}

const FormCheckboxLabel = ({name, defaultValue, disabled, id, label,}: InputWithLabelProps) => {
    return (
        <div className="grid w-full max-w-sm items-center gap-3">
            <Checkbox
                id={id}
                defaultChecked={defaultValue}
                name={name}
                disabled={disabled}
            />
            <Label htmlFor={id}>{label}</Label>
        </div>
    )
}

export default FormCheckboxLabel