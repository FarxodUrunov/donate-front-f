import ScreeningGE from "@/components/screening-g-e"

const requestData = {
    title: "Divine Insight Made Easy!",
    description: "Then Jesus told his disciples a parable to show them that they should always pray and not give up. Luke 18:1",
    progressTitle: "Request For Prayer",
    progressDescription: "",
    progressPhotosLabel: "Minister’s Photos",
    followingText: ["I’m suffering from cancer and I need healing", "I want a promotion at my workplace"],
    dropdownLabel: "Type of prayer",
    dropdownOptional: ["Intercession", "Supplication", "Petition", "Healing and Deliverance"],
    followingTitle: "I need prayers in the following areas. ( Keep Your request very short and perceive)"
}

const RequestPrayScreening = () => {
  return (
    <>
          <ScreeningGE
              title={requestData.title}
              description={requestData.description}
              progressTitle={requestData.progressTitle}
              progressDescription={requestData.progressDescription}
              progressPhotosLabel={requestData.progressPhotosLabel}
              followingTitle={requestData.followingTitle}
              followingText={requestData.followingText}
              leftBg="requestpray-bg"
              dropdownLabel={requestData.dropdownLabel}
              dropdownOptional={requestData.dropdownOptional}
              formStr="request"
          /> 
    </>
  )
}

export default RequestPrayScreening
