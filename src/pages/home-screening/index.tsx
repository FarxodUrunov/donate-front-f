import ScreeningGE from "@/components/screening-g-e"

const homeData = {
    title: "Divine Insight Made Easy!",
    description: "Where there is no revelation, people cast off restraint; but blessed is the one who heeds wisdom’s instruction. Proverbs 29:18",
    progressTitle: "Home Screening",
    progressDescription: "",
    progressPhotosLabel: "Photos",
    followingText: ["Is the foundation of this house good?", "Is the house good enough to move in?"],
    leftBg: "home-bg",
    dropdownLabel: "Ownership",
    dropdownOptional: ["Sole Ownership", "Joint Tenancy With Right of Survivorship", "Trust Ownership", "Tenancy in Common", "Community Property", "Partnership Owners"],
    homeScreen:"home"
}

const HomeScreening = () => {
  return (
    <>
          <ScreeningGE
              title={homeData.title}
              description={homeData.description}
              progressTitle={homeData.progressTitle}
              progressDescription={homeData.progressDescription}
              progressPhotosLabel={homeData.progressPhotosLabel}
              followingText={homeData.followingText}
              leftBg={homeData.leftBg}
              dropdownLabel={homeData.dropdownLabel}
              dropdownOptional={homeData.dropdownOptional}
              homeScreen={homeData.homeScreen}
          />  
    </>
  )
}

export default HomeScreening
