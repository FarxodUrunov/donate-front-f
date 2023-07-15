import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardPayVerProps {
    title: string;
    cardVariant: string;
    backButtonLink: string;

}

const CardPayVer = (props:CardPayVerProps) => {

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


                                {/* <!-- Payment Tabs --> */}
                                <ul className="nav nav-tabs" id="myTab" role="tablist">

                                    {/* <!-- Debit-Payment Tab Button --> */}
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="debit-tab" data-bs-toggle="tab" data-bs-target="#Debit-Payment" type="button" role="tab" aria-controls="Debit-Payment" aria-selected="true">Debit Card</button>
                                    </li>

                                    {/* <!-- Payal-Payment Tab Button --> */}
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="paypal-tab" data-bs-toggle="tab" data-bs-target="#Paypal-Payment" type="button" role="tab" aria-controls="Paypal-Payment" aria-selected="false">Paypal</button>
                                    </li>

                                </ul>



                                {/* <!-- Tab Content --> */}
                                <div className="tab-content" id="PaymentTabContent">


                                    {/* <!-- Debit-Payment Tab -->  */}
                                    <div className="tab-pane show active" id="Debit-Payment" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>

                                        {/* <!-- Payment Form --> */}
                                        <form id="DebitPaymentForm" className="payment-form">

                                            <div className="row">

                                                {
                                                    cardVariant !== "vert" ? 
                                                        <>
                                                            {/* <!-- Card Pin Field --> */ }
                                                        <div className="col-12">
                                                            <div className="form-group mb-4">
                                                                <label htmlFor="cardpin">Enter Pin</label>

                                                                <input type="text" className="form-control" id="cardpin" placeholder="● ● ● ●" required />
                                                            </div>
                                                        </div>
                                                        </>
                                                        :
                                                        <>
                                                            {/* OTP Verification Field */}
                                                            <div className="col-12">
                                                                <div className="form-group mb-4">
                                                                    <label htmlFor="OtpVerifiation">OTP Verification</label>
                                                                    <input type="text" className="form-control" id="OtpVerifiation" placeholder="Enter OTP" required />
                                                                    <div className="mt-2"><small>Enter the OTP code sent to your phone and complete the transaction.</small></div>
                                                                </div>
                                                            </div>
                                                        </>
                                                }
                                                
                                            </div>

                                            {/* <!-- Submit Button --> */}
                                            <button type="submit" className="btn btn-primary w-100">Submit</button>

                                        </form>

                                    </div>



                                    {/* <!-- Paypal Payment tab  --> */}
                                    <div className="tab-pane" id="Paypal-Payment" role="tabpanel" aria-labelledby="Paypal-tab" tabIndex={0}>

                                        <form id="PaypalPaymentForm" className="payment-form">

                                            <div className="row">


                                                {/* <!-- Country Select Field --> */}
                                                <div className="col-md-8">

                                                    <div className="form-group mb-4">

                                                        <label htmlFor="PayPalSelectCountry">Country/Region</label>

                                                        <select id="PayPalSelectCountry" required className="form-select"
                                                            name="country">
                                                            <option value="" disabled>----------</option>
                                                            <option label="Select Country" disabled></option>
                                                            <option value="AU">Australia</option>
                                                            <option value="BR">Brazil</option>
                                                            <option value="CA">Canada</option>
                                                            <option value="CN">China</option>
                                                            <option value="DE">Germany</option>
                                                            <option value="HK">Hong Kong</option>
                                                            <option value="IN">India</option>
                                                            <option value="JP">Japan</option>
                                                            <option value="NZ">New Zealand</option>
                                                            <option value="SA">Saudi Arabia</option>
                                                            <option value="SG">Singapore</option>
                                                            <option value="ZA">South Africa</option>
                                                            <option value="KR">South Korea</option>
                                                            <option value="AE">United Arab Emirates</option>
                                                            <option value="GB">United Kingdom</option>
                                                            <option value="US">United States</option>
                                                        </select>

                                                    </div>

                                                </div>


                                                {/* <!-- Zip Code Field --> */}
                                                <div className="col-md-4">

                                                    <div className="form-group mb-4">

                                                        <label htmlFor="zipcode">ZIP Code</label>

                                                        <input type="text" className="form-control" id="zipcode" required />

                                                    </div>

                                                </div>


                                            </div>

                                            {/* <!-- Donate Button --> */}
                                            <button type="submit" className="btn btn-primary w-100">
                                                <Image width={100} height={25.78} src="/images/paypal-logo.png" alt="Paypal" /><span className="ms-2">Donate</span>
                                            </button>

                                            {/* <!-- Paypal Support Text --> */}
                                            <div className="text-center pt-1"><small>The safer, easier way to pay</small></div>

                                        </form>

                                    </div>


                                </div>



                            </div>


                        </div>

                    </div>



                </section>










            </main>
        </>
    )
}

export default CardPayVer
