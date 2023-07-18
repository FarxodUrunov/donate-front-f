import Link from "next/link"
import Image from "next/image"
import TabsDebitPaypal from "@/components/tobs-debit-paypal"

const PaymentCompletion = () => {
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
                              <Link href="plan-selection" className="go-back-btn">
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
                            <TabsDebitPaypal>
                                <form id="DebitPaymentForm" className="payment-form">
                                    <div className="row">
                                        {/* Card Number Field */}
                                        <div className="col-12">
                                            <div className="form-group mb-4">
                                                <label htmlFor="cardNumber">Card Number</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="cardNumber" placeholder="0000 0000 0000 0000" required />
                                                    {/* Card Logos */}
                                                    <span className="input-group-text">
                                                        <Image height={32} src="/images/visa-logo.png" width={32} alt="Visa" />
                                                        <Image height={32} src="/images/mastercard-logo.png" width={32} alt="Mastercard" />
                                                        <Image height={32} src="/images/verve-logo.png" width={32} alt="Verve" />
                                                    </span>
                                                    {/* Secure Lock Icon */}
                                                    <span className="input-group-text" data-toggle="tooltip" data-placement="top" title="Payments are secured using SSL and client-side encryption.">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height={16} width={14} viewBox="0 0 448 512">
                                                            <path fill="currentColor" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Expiration Date Field */}
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label htmlFor="expirationDate">Expiration Date</label>
                                                <input type="text" className="form-control card-expiry" id="expirationDate" placeholder="MM/YY" required />
                                            </div>
                                        </div>
                                        {/* CVV Field */}
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label htmlFor="cvv">CVV</label>
                                                <input type="text" className="form-control" id="cvv" placeholder={"123"} maxLength={3} required />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Donate Button */}
                                    <button type="submit" className="btn btn-primary w-100">Donate
                                        <span> ₦102,407</span>
                                    </button>
                                    {/* Card Future Use Checkbox */}
                                    <div className="form-check mt-4">
                                        <input className="form-check-input" type="checkbox" id="CardFuturePermission" />
                                        <label className="form-check-label" htmlFor="CardFuturePermission">Use this card for future transactions</label>
                                    </div>
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

export default PaymentCompletion
