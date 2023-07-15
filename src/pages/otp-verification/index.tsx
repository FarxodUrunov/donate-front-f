import CardPayVer from "@/components/card-pay-ver"
import TopNavbarLayout from "@/components/layout/top-navbar"

const OtpVerification = () => {
  return (
    <>
      <TopNavbarLayout line userName="John Doe">
        <CardPayVer
          title="Annual Plan"
          cardVariant="vert"
          backButtonLink="card-pin-input"
        />
      </TopNavbarLayout>
    </>
  )
}

export default OtpVerification
