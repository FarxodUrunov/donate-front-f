import TopNavbarLayout from "@/components/layout/top-navbar"
import FeedbackForm from "@/components/top-navbar-page/feedback-form"

const FeedbackFormPage = () => {
    return (
        <>
            <TopNavbarLayout userName="Joe Down">
                <FeedbackForm />
            </TopNavbarLayout>
        </>
    )
}

export default FeedbackFormPage
