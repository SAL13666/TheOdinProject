import BasicInfo from "./BasicInfo";

function Form({setBasicInfo, setEducation, setWorkExperience}) {
    return <>
        <form action="">
            <BasicInfo setBasicInfo={setBasicInfo}/>
        </form>
    </>
}

export default Form;