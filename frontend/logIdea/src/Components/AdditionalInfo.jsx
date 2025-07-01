
const AdditionalInfo = (props) => {
    const { label, placeholder } = props;
    return (
        <div className="flex pl-4 gap-2">
            <label>{label}</label>
            <input className="bg-sec-background-color" placeholder={placeholder} type="text"/>
        </div>
    )
}

export default AdditionalInfo;