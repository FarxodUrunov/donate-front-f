import TopNavbarLayout from "@/components/layout/top-navbar"
import CancelPlan from "@/components/top-navbar-page/cancel-plan"

const CancelPlanPage = () => {
    return (
        <>
            <TopNavbarLayout userName="Joe Down">
                <CancelPlan />
            </TopNavbarLayout>
        </>
    )
}

export default CancelPlanPage
