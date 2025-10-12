
const AdditionalInfo = (props) => {
    const { value, label, placeholder, onChange } = props;
    return (
        <div className="flex pl-4 gap-2">
            <label>{label}</label>
            <input
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="bg-sec-background-color outline-0"
                placeholder={placeholder} type="text"/>
        </div>
    )
}

export default AdditionalInfo;