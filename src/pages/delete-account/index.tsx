import TopNavbarLayout from "@/components/layout/top-navbar"
import DeleteAccount from "@/components/top-navbar-page/delete-account"

const DeleteAccountPage = () => {
    return (
        <>
            <TopNavbarLayout userName="Joe Down">
                <DeleteAccount />
           </TopNavbarLayout>
        </>
    )
}

export default DeleteAccountPage
