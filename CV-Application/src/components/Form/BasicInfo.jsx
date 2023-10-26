import InputField from "./InputField";

export default function BasicInfo({setBasicInfo}) {
    return <div className="basicInfo">
        <InputField type={"Text"} labelName={"Name"} setdata={setBasicInfo} dataName={"name"} isRequired={true}/>
        <InputField type={"email"} labelName={"Email"} setdata={setBasicInfo} dataName={"email"} />
        <InputField type={"Text"} labelName={"Phone Number"} setdata={setBasicInfo} dataName={"phoneNumber"} />
        <InputField type={"Text"} labelName={"Address"} setdata={setBasicInfo} dataName={"address"} />
    </div>
}