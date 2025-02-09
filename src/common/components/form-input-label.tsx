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
        colClass = 'col-12 col-md-3',
        readonly = false
    } = props

    return (
        <div className={colClass}>
            <label htmlFor={id} className="form-label">{label}</label>
            <input type="number"
                   className="form-control"
                   id={id}
                   defaultValue={defaultValue}
                   name={name}
                   readOnly={readonly}
            />
        </div>

    )
}

export default FormInputLabel