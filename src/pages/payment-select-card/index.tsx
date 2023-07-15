import TopNavbarLayout from "@/components/layout/top-navbar"
import PaymentSelectCard from "@/components/top-navbar-page/payment-select-card"

const PaymentSelectCardPage = () => {
  return (
      <>
          <TopNavbarLayout line userName="John Doe">
            <PaymentSelectCard />
          </TopNavbarLayout>          
      </>
  )
}

export default PaymentSelectCardPage
