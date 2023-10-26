import { updateInput } from "../../utilites";

function InputField({type, labelName, setdata, dataName}) {
    return <>
        <label htmlFor={labelName}>{labelName}</label>
        <input type={type} onChange={(e) => updateInput(setdata, dataName, e.target.value)} id={labelName} />
    </>
}

export default InputField;