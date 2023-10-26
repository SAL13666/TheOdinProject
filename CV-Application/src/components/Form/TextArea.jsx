import { updateInput } from "../../utilites"


export default function TextArea({setdata, dataName, labelName}) {
    return <>
        <label htmlFor={labelName}>{labelName}</label>
        <textarea onChange={(e) => updateInput(setdata, dataName, e.target.value)} rows="4" cols="50" id={labelName}></textarea>
    </>
}