export default function CvWorkExperience({workExperience}) {
    let date = `${workExperience.start} - ${workExperience.finish}`

    return <div className="work-Experience">
        <div className="work-group">
            <p>{workExperience.start && workExperience.finish && date}</p>
            <p>{workExperience.location}</p>
        </div>
        <div className="work-group">
            <h3>{workExperience.companyName}</h3>
            <p>{workExperience.positionTitle}</p>
            <p>{workExperience.description}</p>
        </div>
    </div>
}
