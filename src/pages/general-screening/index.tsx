import ScreeningGE from "@/components/screening-g-e"

const generalData = {
    title: "Divine Insight Made Easy!",
    description: "Where there is no revelation, people cast off restraint; but blessed is the one who heeds wisdom’s instruction. Proverbs 29:18",
    progressTitle: "General Screening",
    progressDescription: "",
    progressPhotosLabel: "Photos",
    followingText: ["What is my spiritual calling?"],
    dropdownLabel: "Relationship",
    dropdownOptional: ["Full - Time Employment", "Part - Time Employment", "Casual Employment", "Pre-employment", "Apprenticeship","Traineeship","Probation"]
}

const GeneralScreening = () => {
  return (
      <>
          <ScreeningGE
              title={generalData.title}
              description={generalData.description}
              progressTitle={generalData.progressTitle}
              progressDescription={generalData.progressDescription}
              progressPhotosLabel={generalData.progressPhotosLabel}
              followingText={generalData.followingText}
              leftBg="general-bg"
              dropdownLabel={generalData.dropdownLabel}
              dropdownOptional={generalData.dropdownOptional}
          />
      </>
  )
}

export default GeneralScreening
