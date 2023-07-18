import TabsDebitPaypal from "@/components/tobs-debit-paypal"
import Image from "next/image"
import Link from "next/link"

const PaymentDecline = () => {
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
                                  <form id="DebitPaymentForm" className="payment-form">
                                      <div className="row">
                                          {/* OTP Declined Field */}
                                          <div className="col-12">
                                              <div className="form-group transaction-declined-alert mb-4">
                                                  {/* Declined Alert */}
                                                  <div className="d-flex align-items-center mb-3">
                                                      <Image src="/images/transaction-declined-icon.png" width={34} height={34} alt="Transaction Declined" />
                                                      <span className="ms-2">Transaction Declined</span>
                                                  </div>
                                                  <label htmlFor="OtpVerifiation">OTP Verification</label>
                                                  <input type="text" className="form-control" id="OtpVerifiation" placeholder="Enter OTP" defaultValue={12312} required />
                                              </div>
                                          </div>
                                      </div>
                                      {/* Submit Button */}
                                      <button type="submit" className="btn btn-primary w-100">Submit</button>
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

export default PaymentDecline
