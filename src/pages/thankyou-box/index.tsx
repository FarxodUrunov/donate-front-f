import TopNavbarLayout from "@/components/layout/top-navbar"
import ThankyouBox from "@/components/top-navbar-page/thankyou-box"

const ThankyouBoxPage = () => {
  return (
    <>
          <TopNavbarLayout userName="John Doe">
            <ThankyouBox />
          </TopNavbarLayout>         
    </>
  )
}

export default ThankyouBoxPage
