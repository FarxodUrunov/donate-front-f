import ScreeningGE from "@/components/screening-g-e"

const maritalData = {
    title: "Divine Insight Made Easy!",
    description: "Surely the Sovereign LORD does nothing without revealing his plan to his servants the prophets. Amos 3:7",
    progressTitle: "Marital Screening",
    progressDescription: "Partner Information",
    progressPhotosLabel: "Partner Photos",
    followingText: ["Are we spiritually compatible?", "What are his or her foundation problem?"],
    dropdownLabel: "Relationship",
    dropdownOptional: ["Fiancée","Fiancé","Courtship","Married"]
}

const MaritalScreening = () => {
  return (
    <>
          <ScreeningGE
              title={maritalData.title}
              description={maritalData.description}
              progressTitle={maritalData.progressTitle}
              progressDescription={maritalData.progressDescription}
              progressPhotosLabel={maritalData.progressPhotosLabel}
              followingText={maritalData.followingText}
              leftBg="general-bg"
              dropdownLabel={maritalData.dropdownLabel}
              dropdownOptional={maritalData.dropdownOptional}
          /> 
    </>
  )
}

export default MaritalScreening
