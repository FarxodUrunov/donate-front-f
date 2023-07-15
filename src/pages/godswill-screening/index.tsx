import ScreeningGE from "@/components/screening-g-e"

const godsWillData = {
    title: "Divine Insight Made Easy!",
    description: "Plans fail for lack of counsel, but with many advisers, they succeed. Proverbs 15:22",
    progressTitle: "The will of God",
    progressDescription: "",
    progressPhotosLabel: "Photos",
    followingText: ["What’s God’s will for my career?", "What’s God’s will my traveling plan?"],
    leftBg: "godswill-bg",
    dropdownLabel: "",
    dropdownOptional: []
}

const GodswillScreening = () => {
  return (
    <>
          <ScreeningGE
              title={godsWillData.title}
              description={godsWillData.description}
              progressTitle={godsWillData.progressTitle}
              progressDescription={godsWillData.progressDescription}
              progressPhotosLabel={godsWillData.progressPhotosLabel}
              followingText={godsWillData.followingText}
              leftBg={godsWillData.leftBg}
              formStr="god"
              dropdownLabel={godsWillData.dropdownLabel}
              dropdownOptional={godsWillData.dropdownOptional}
          /> 
    </>
  )
}

export default GodswillScreening
