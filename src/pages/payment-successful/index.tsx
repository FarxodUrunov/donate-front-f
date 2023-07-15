import TopNavbarLayout from "@/components/layout/top-navbar"
import PaymentSuccessful from "@/components/top-navbar-page/payment-successful"

const PaymentSuccessfulPage = () => {
  return (
    <>
          <TopNavbarLayout userName="John Doe">
            <PaymentSuccessful />
          </TopNavbarLayout>         
    </>
  )
}

export default PaymentSuccessfulPage
