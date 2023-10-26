import InputField from "./InputField"
import TextArea from "./TextArea"

export default function WorkExperience({setWorkExperience}) {
    return <div className="EducationInfo">
        <InputField type={"Text"} labelName={"Company Name"} setdata={setWorkExperience} dataName={"companyName"} />
        <InputField type={"text"} labelName={"Position Title"} setdata={setWorkExperience} dataName={"positionTitle"} />
        <InputField type={"date"} labelName={"Start Date"} setdata={setWorkExperience} dataName={"start"} />
        <InputField type={"date"} labelName={"End Date"} setdata={setWorkExperience} dataName={"finish"} />
        <InputField type={"Text"} labelName={"Location"} setdata={setWorkExperience} dataName={"location"} />
        <TextArea setdata={setWorkExperience} dataName="description" labelName="Description"/>
    </div>
}