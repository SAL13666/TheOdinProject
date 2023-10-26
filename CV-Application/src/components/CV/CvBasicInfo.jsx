export default function CvBaiscInfo({basicInfo}) {
    return <div className="personal-info">
        <h1>{basicInfo.name}</h1>
        <span>{basicInfo.address}</span>
        <span>{basicInfo.email}</span>
        <span>{basicInfo.phoneNumber}</span>
    </div>
}