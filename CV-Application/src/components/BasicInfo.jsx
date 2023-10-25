import InputField from "./InputField";

export default function BasicInfo({setBasicInfo}) {
    return <div className="basicInfo">
        <InputField type={"Text"} labelName={"Name"} setdata={setBasicInfo} dataName={"name"} isRequired={true}/>
        <InputField type={"email"} labelName={"Email"} setdata={setBasicInfo} dataName={"email"} isRequired={true}/>
        <InputField type={"Text"} labelName={"Phone Number"} setdata={setBasicInfo} dataName={"phoneNumber"} isRequired={true}/>
        <InputField type={"Text"} labelName={"Address"} setdata={setBasicInfo} dataName={"address"} isRequired={false}/>
        <button type="submit">submit</button>
    </div>
}