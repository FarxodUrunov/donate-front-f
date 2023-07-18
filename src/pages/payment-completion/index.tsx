import TopNavbarLayout from "@/components/layout/top-navbar"
import PaymentCompletion from "@/components/top-navbar-page/payment-completion"

const PaymentCompletionPage = () => {
  return (
    <>
          <TopNavbarLayout line userName="John Doe">
              <PaymentCompletion />
          </TopNavbarLayout>
    </>
  )
}

export default PaymentCompletionPage
