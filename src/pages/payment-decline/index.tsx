import TopNavbarLayout from "@/components/layout/top-navbar"
import PaymentDecline from "@/components/top-navbar-page/payment-decline"

const PaymentDeclinePage = () => {
  return (
      <>
          <TopNavbarLayout line userName="John Doe">
              <PaymentDecline />
          </TopNavbarLayout>
      </>
  )
}

export default PaymentDeclinePage
