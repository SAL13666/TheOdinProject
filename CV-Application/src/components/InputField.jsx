import { updateInput } from "../utilites";

function InputField({type, labelName, setdata, dataName, isRequired}) {
    return <>
        <label htmlFor={labelName}>{labelName}</label>
        <input type={type} onChange={(e) => updateInput(setdata, dataName, e.target.value)} id={labelName} required={isRequired} />
    </>
}

export default InputField;