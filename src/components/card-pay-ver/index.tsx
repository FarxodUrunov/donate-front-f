import Link from 'next/link'
import React from 'react'
import TabsDebitPaypal from '../tobs-debit-paypal';

interface CardPayVerProps {
    title: string;
    cardVariant: string;
    backButtonLink: string;

}

const CardPayVer = (props: CardPayVerProps) => {

    const {
        title,
        cardVariant,
        backButtonLink
    } = props

    return (
        <>
            <main>

                {/* <!-- PAYMENT PAGE --> */}
                <section className="payment-page">

                    {/* <!-- Steps Wrapper --> */}
                    <div className="steps-wrapper d-md-block d-none">

                        {/* <!-- Progress Bar --> */}
                        <ul className="progressbar">

                            {/* <!-- Step 1 --> */}
                            <li>
                                <span className="step-number">1</span>
                                <span className="step-text">Plan Selection</span>
                            </li>

                            {/* <!-- Step 2 --> */}
                            <li className="active">
                                <span className="step-number">2</span>
                                <span className="step-text">Payment Completion</span>
                            </li>

                        </ul>

                    </div>


                    <div className="container">

                        {/* <!-- Payment-Main Wrapper --> */}
                        <div className="payment-main-wrapper mx-auto">

                            {/* <!-- Payment Header --> */}
                            <div className="payment-header d-flex align-items-center">

                                {/* <!-- Go-back button --> */}
                                <Link href={backButtonLink} className="go-back-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                                    </svg>
                                </Link>

                                <div className="header-content mx-auto text-center">

                                    {/* <!-- Plan Details --> */}
                                    <div className="plan-details">
                                        <span>MySight Premium</span>
                                        <h1>{title}</h1>
                                    </div>

                                    <span>Cancel anytime.</span>

                                </div>

                            </div>


                            {/* <!-- Order Summary Wrapper --> */}
                            <div className="order-summary-wrap">

                                {/* <!-- Head --> */}
                                <span>Order summary</span>

                                {/* <!-- Summary Box --> */}
                                <div className="basic-container mt-2">

                                    <div className="summary-row">
                                        <div className="summary-text">₦8500/month x 12 months</div>
                                        <div className="summary-text">₦102,000</div>
                                    </div>

                                    <div className="summary-row mt-1">
                                        <div className="summary-text">Donation Plan</div>
                                        <div className="summary-text">Annual</div>
                                    </div>

                                    <div className="summary-row mt-1">
                                        <div className="summary-text">Tax</div>
                                        <div className="summary-text">₦407</div>
                                    </div>

                                    {/* <!-- Divider --> */}
                                    <div className="divider"></div>

                                    <div className="summary-row mt-1">
                                        <div className="summary-text">Billed as one payment</div>
                                        <div className="summary-text">₦102,407</div>
                                    </div>

                                </div>

                            </div>


                            {/* <!-- Payment Form Wrapper --> */}
                            <div className="basic-container payment-form-wrap">

                                <TabsDebitPaypal >
                                    {
                                        cardVariant === "vert" ?
                                            <form id="DebitPaymentForm" className="payment-form">

                                                <div className="row">


                                                    {/* <!-- OTP Verification Field --> */}
                                                    <div className="col-12">

                                                        <div className="form-group mb-4">

                                                            <label htmlFor="OtpVerifiation">OTP Verification</label>

                                                            <input type="text" className="form-control" id="OtpVerifiation" placeholder="Enter OTP" required />

                                                            <div className="mt-2"><small>Enter the OTP code sent to your phone and complete the transaction.</small></div>

                                                        </div>

                                                    </div>


                                                </div>

                                                {/* <!-- Submit Button --> */}
                                                <button type="submit" className="btn btn-primary w-100">Submit</button>

                                            </form>
                                            :
                                            <form className="payment-form">

                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group mb-4">
                                                            <label htmlFor="cardpin">Enter Pin</label>

                                                            <input type="text" className="form-control" id="cardpin" placeholder="● ● ● ●" required />
                                                        </div>
                                                    </div>

                                                </div>

                                                {/* <!-- Submit Button --> */}
                                                <button type="submit" className="btn btn-primary w-100">Submit</button>

                                            </form>
                                    }
                                </TabsDebitPaypal>

                            </div>


                        </div>

                    </div>

                </section>
            </main>
        </>
    )
}

export default CardPayVer
