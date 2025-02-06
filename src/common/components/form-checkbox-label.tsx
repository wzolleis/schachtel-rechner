type InputWithLabelProps = {
    id: string
    label: string
    name: string
    defaultValue: boolean
}

const FormCheckboxLabel = ({name, defaultValue, id, label,}: InputWithLabelProps) => {
    return (
        <div className={'row-end-3'}>
            <div className="form-check">
                <input type="checkbox"
                       className="form-check-input"
                       id={id}
                       defaultChecked={defaultValue}
                       name={name}
                />
                <label className="form-check-label" htmlFor={id}>{label}</label>
            </div>
        </div>
    )
}

export default FormCheckboxLabel