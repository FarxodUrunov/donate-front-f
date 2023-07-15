import TopNavbarLayout from "@/components/layout/top-navbar"
import PlanSelection from "@/components/top-navbar-page/plan-selection"

const PlanSelectionPage = () => {
  return (
    <>
          <TopNavbarLayout line userName="John Doe">
            <PlanSelection />
          </TopNavbarLayout>          
    </>
  )
}

export default PlanSelectionPage
