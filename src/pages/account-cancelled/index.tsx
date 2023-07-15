import TopNavbarLayout from "@/components/layout/top-navbar"
import AccountCancelled from "@/components/top-navbar-page/account-cancelled"

const AccountCancelledPage = () => {
    return (
        <>
            <TopNavbarLayout userName="Joe Down">
                <AccountCancelled />
            </TopNavbarLayout>        
        </>
    )
}

export default AccountCancelledPage
