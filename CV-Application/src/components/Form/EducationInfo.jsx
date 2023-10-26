import InputField from "./InputField"
export default function EducationInfo({setEducation}) {
        return <div className="basicInfo">
        <InputField type={"Text"} labelName={"School Name"} setdata={setEducation} dataName={"schoolName"} />
        <InputField type={"text"} labelName={"Degree"} setdata={setEducation} dataName={"titleOfStudy"} />
        <InputField type={"date"} labelName={"Start Date"} setdata={setEducation} dataName={"start"} />
        <InputField type={"date"} labelName={"End Date"} setdata={setEducation} dataName={"finish"} />
        <InputField type={"Text"} labelName={"Location"} setdata={setEducation} dataName={"location"} />
    </div>
}