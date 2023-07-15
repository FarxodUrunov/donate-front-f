import ScreeningGE from "@/components/screening-g-e"


const employmentData = {
    title: "Divine Insight Made Easy!",
    description: "And afterward, I will pour out my Spirit on all people. Your sons and daughters will prophesy, your old men will dream dreams, and your young men will see visions. Joel 2:28",
    progressTitle: "Employment Screening",
    progressDescription: "Employee Information",
    progressPhotosLabel: "Employee Photos",
    followingText: ["Is my driver pure?", "Does my housegirl have a clean spirit?"],
    leftBg: "employement-bg",
    dropdownLabel: "Relationship",
    dropdownOptional: ["Full - Time Employment", "Part - Time Employment", "Casual Employment", "Pre-employment", "Apprenticeship", "Traineeship", "Probation"]
}

const EmploymentScreening = () => {
    return (
        <>
            <ScreeningGE
                title={employmentData.title}
                description={employmentData.description}
                progressTitle={employmentData.progressTitle}
                progressDescription={employmentData.progressDescription}
                progressPhotosLabel={employmentData.progressPhotosLabel}
                followingText={employmentData.followingText}
                leftBg={employmentData.leftBg}
                dropdownLabel={employmentData.dropdownLabel}
                dropdownOptional={employmentData.dropdownOptional}
            />
        </>
    )
}

export default EmploymentScreening
