import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

export type InputType = 'number' | 'text'

export type InputWithLabelProps = {
    id: string
    label: string
    type: InputType
    name?: string
    defaultValue: string | number | readonly string[] | undefined
    colClass?: string
    readonly?: boolean
}

const FormInputLabel = (props: InputWithLabelProps) => {
    const {
        id,
        label,
        name = props.id,
        defaultValue,
        readonly = false
    } = props

    return (
        <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor={id}>{label}</Label>
            <Input type="number"
                   id={id}
                   defaultValue={defaultValue}
                   name={name}
                   readOnly={readonly}
            />
        </div>

    )
}

export default FormInputLabel