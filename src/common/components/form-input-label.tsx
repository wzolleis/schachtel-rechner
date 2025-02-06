export type InputType = 'number' | 'text'

export type InputWithLabelProps = {
    id: string
    label: string
    type: InputType
    name: string
    defaultValue: string | number | readonly string[] | undefined
    colClass: string
}

const FormInputLabel = ({id, label, name, defaultValue, colClass}: InputWithLabelProps) => {
    return (
        <div className={colClass}>
            <label htmlFor={id} className="form-label">{label}</label>
            <input type="number"
                   className="form-control"
                   id={id}
                   defaultValue={defaultValue}
                   name={name}
            />
        </div>

    )
}

export default FormInputLabel