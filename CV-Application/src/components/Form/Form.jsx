import BasicInfo from "./BasicInfo";
import EducationInfo from "./EducationInfo";
import WorkExperience from "./WorkExperience";

function Form({setBasicInfo, setEducation, setWorkExperience}) {
    return <>
        <form action="">
            <BasicInfo setBasicInfo={setBasicInfo}/>
            <br />
            <EducationInfo setEducation={setEducation}/>
            <br />
            <WorkExperience setWorkExperience={setWorkExperience}/>
            <button type="submit">submit</button>
        </form>
    </>
}

export default Form;