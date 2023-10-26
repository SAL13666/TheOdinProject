export default function CvEducation({education}) {
    let date = `${education.start} - ${education.finish}`

    return <div className="education">
        <div className="education-group">
            <p>{education.start && education.finish && date}</p>
            <p>{education.location}</p>
        </div>
        <div className="education-group">
            <h3>{education.schoolName}</h3>
            <p>{education.titleOfStudy}</p>
        </div>
    </div>
}
