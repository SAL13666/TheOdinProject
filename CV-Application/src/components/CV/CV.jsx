import CvBaiscInfo from "./CvBasicInfo"
import CvEducation from "./CvEducation"
import CvWorkExperience from "./CvWorkExperience"


export default function CV({basicInfo, education, workExperience}) {
    return <>
        <CvBaiscInfo basicInfo={basicInfo}/>
        <CvEducation education={education}/>
        <CvWorkExperience workExperience={workExperience}/>
    </>
}