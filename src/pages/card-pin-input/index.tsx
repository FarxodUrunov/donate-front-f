import CardPayVer from "@/components/card-pay-ver"
import TopNavbarLayout from "@/components/layout/top-navbar"

const CardPinInput = () => {
    return (
        <>
            <TopNavbarLayout line={true} userName="Joe Down" >
                <CardPayVer
                    title="Monthly Plan"
                    cardVariant="plan"
                    backButtonLink="payment-completion"
                />
            </TopNavbarLayout>
        </>
    )
}

export default CardPinInput
