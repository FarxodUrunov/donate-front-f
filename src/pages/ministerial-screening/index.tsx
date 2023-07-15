import ScreeningGE from "@/components/screening-g-e"


const maritalData = {
    title: "Divine Insight Made Easy!",
    description: "When there is a prophet among you, I, the LORD, reveal myself to them in visions, I speak to them in dreams. Numbers 12:6",
    progressTitle: "Ministerial Screening",
    progressDescription: "Minister’s Information",
    progressPhotosLabel: "Minister’s Photos",
    followingText: ["Does God call the Pastor?", "Is the Minister demonized?"],
    dropdownLabel: "Relationship",
    dropdownOptional: ["Fiancée", "Fiancé", "Courtship", "Married"]
}

const MinisterialScreening = () => {
  return (
    <>
          <ScreeningGE
              title={maritalData.title}
              description={maritalData.description}
              progressTitle={maritalData.progressTitle}
              progressDescription={maritalData.progressDescription}
              progressPhotosLabel={maritalData.progressPhotosLabel}
              followingText={maritalData.followingText}
              leftBg="ministerial-bg"
              dropdownLabel={maritalData.dropdownLabel}
              dropdownOptional={maritalData.dropdownOptional}
              formStr="ministerial"
          /> 
    </>
  )
}

export default MinisterialScreening
