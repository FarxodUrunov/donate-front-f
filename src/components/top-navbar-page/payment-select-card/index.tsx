import PaymentDetails from "@/components/payment-details"
import TabsDebitPaypal from "@/components/tobs-debit-paypal"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


const PaymentSelectCard = () => {
    const [dataPayment, setDataPayment] = useState<any>([{ id: 1, img: "/images/visa-logo.png" }, { id: 2, img: "/images/mastercard-logo.png" }, { id: 3, img: "/images/verve-logo.png" }])
    
    const [detailsOpenId, setDetailsOpenId] = useState<number>()

    const onOpenDetails = (id:number) => {
        setDetailsOpenId(id)
    }
    const deletePaymentCard = (id:number) => {
        if (confirm("Delete this card?")) {
            setDataPayment((int:any) => {
                return int.filter((item:any) => item.id !== id)
            })
        }
    }
    return (
        <>
            {/* MAIN */}
            <main className="gradient-bg">
                {/* PAYMENT PAGE */}
                <section className="payment-page">
                    {/* Steps Wrapper */}
                    <div className="steps-wrapper d-md-block d-none">
                        {/* Progress Bar */}
                        <ul className="progressbar">
                            {/* Step 1 */}
                            <li>
                                <span className="step-number">1</span>
                                <span className="step-text">Plan Selection</span>
                            </li>
                            {/* Step 2 */}
                            <li className="active">
                                <span className="step-number">2</span>
                                <span className="step-text">Payment Completion</span>
                            </li>
                        </ul>
                    </div>
                    <div className="container">
                        {/* Payment-Main Wrapper */}
                        <div className="payment-main-wrapper mx-auto">
                            {/* Payment Header */}
                            <div className="payment-header d-flex align-items-center">
                                {/* Go-back button */}
                                <Link href="card-pin-input" className="go-back-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                                    </svg>
                                </Link>
                                <div className="header-content mx-auto text-center">
                                    {/* Plan Details */}
                                    <div className="plan-details">
                                        <span>Mysight Premium</span>
                                        <h1>Annual Plan</h1>
                                    </div>
                                    <span>Cancel anytime.</span>
                                </div>
                            </div>
                            {/* Order Summary Wrapper */}
                            <div className="order-summary-wrap">
                                {/* Head */}
                                <span>Order summary</span>
                                {/* Summary Box */}
                                <div className="basic-container mt-2">
                                    <div className="summary-row">
                                        <div className="summary-text text-start">₦8500/month x 12 months</div>
                                        <div className="summary-text text-end">₦102,000</div>
                                    </div>
                                    <div className="summary-row mt-1">
                                        <div className="summary-text text-start">Donation Plan</div>
                                        <div className="summary-text text-end">Annual</div>
                                    </div>
                                    <div className="summary-row mt-1">
                                        <div className="summary-text text-start">Tax</div>
                                        <div className="summary-text text-end">₦407</div>
                                    </div>
                                    {/* Divider */}
                                    <div className="divider" />
                                    <div className="summary-row mt-1">
                                        <div className="summary-text text-start">Billed as one payment</div>
                                        <div className="summary-text text-end">₦102,407</div>
                                    </div>
                                </div>
                            </div>
                            {/* Payment Form Wrapper */}
                            <div className="basic-container payment-form-wrap">
                                <TabsDebitPaypal >
                                    <form id="DebitPaymentForm" className="payment-form select-card-wrap">
                                        {/* Select-Card Heading */}
                                        <div className="select-card-head">
                                            <span>Select Card</span>
                                        </div>
                                        {/* Payment Debit Cards */}
                                        {
                                            dataPayment?.map((item:any) => (
                                                <div key={item.id} onClick={()=>onOpenDetails(item.id)} >
                                                    <PaymentDetails deletePaymentCard={deletePaymentCard} id={item.id} img={item.img} detailsOpen={item.id === detailsOpenId ? "d-block" : "d-none"} />
                                                </div>
                                            ))
                                        }
                                        <a href="payment-completion" className="btn btn-primary w-100 mt-0">New Payment Method</a>
                                    </form>
                                </TabsDebitPaypal>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /PAYMENT PAGE */}
            </main>
            {/* / MAIN */}
        </>
    )
}

export default PaymentSelectCard
