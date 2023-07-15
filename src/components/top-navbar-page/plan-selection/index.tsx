import Image from "next/image"

const PlanSelection = () => {
  return (
    <>
          {/* MAIN */}
          <main className="gradient-bg">
              {/* Plan Selection Section */}
              <section className="plan-selection">
                  {/* Steps Wrapper */}
                  <div className="steps-wrapper d-md-block d-none">
                      {/* Progress Bar */}
                      <ul className="progressbar">
                          {/* Step 1 */}
                          <li className="active">
                              <span className="step-number">1</span>
                              <span className="step-text">Plan Selection</span>
                          </li>
                          {/* Step 2 */}
                          <li>
                              <span className="step-number">2</span>
                              <span className="step-text">Payment Completion</span>
                          </li>
                      </ul>
                  </div>
                  <div className="container">
                      {/* Plans Wrapper */}
                      <div className="plans-wrapper mx-auto">
                          {/* Main Heading */}
                          <h1>Choose Your Plan</h1>
                          {/* Plan Items */}
                          <div className="plan-items">
                              {/* Plan Items Heading */}
                              <h2>Donation Plan (Individual)</h2>
                              {/* Plan */}
                              <div className="normal-plan plan">
                                  {/* Plan title */}
                                  <div className="upper-block d-flex align-items-center justify-content-between">
                                      <h3> <Image width={28} height={28} src="/images/leaf.png" alt="Pay-as-you-go Plan" /> Pay-as-you-go</h3>
                                  </div>
                                  <div className="main-block d-flex justify-content-between align-items-center">
                                      {/* Price */}
                                      <div className="price">
                                          <span className="value">₦5,000 ($6.57 USD)</span>
                                      </div>
                                      {/* Donate Btn */}
                                      <div className="btn-block">
                                          <button type="button" className="btn btn-primary">Donate</button>
                                      </div>
                                  </div>
                              </div>
                              {/* Plan */}
                              <div className="monthly-plan plan">
                                  {/* Plan title */}
                                  <div className="upper-block d-flex align-items-center justify-content-between">
                                      <h3> <Image width={28} height={28} src="/images/leaves.png" alt="Monthly Plan" /> Monthly</h3>
                                  </div>
                                  <div className="main-block d-flex justify-content-between align-items-center">
                                      {/* Price */}
                                      <div className="price">
                                          <span className="value">₦20,000 ($26.30 USD)</span>
                                          <span className="duration">per month</span>
                                      </div>
                                      {/* Donate Btn */}
                                      <div className="btn-block">
                                          <button type="button" className="btn btn-primary">Donate</button>
                                      </div>
                                  </div>
                              </div>
                              {/* Plan */}
                              <div className="annual-plan plan">
                                  {/* Plan title */}
                                  <div className="upper-block d-flex align-items-center justify-content-between">
                                      <div className="d-flex align-items-center">
                                          <h3> <Image width={28} height={28} src="/images/three-leaf.png" alt="Annual Plan" /> Annual</h3>
                                          <span className="popular-plan-box ms-2">Most Popular</span>
                                      </div>
                                      <div className="saving-block">
                                          <span>Save 60%</span>
                                      </div>
                                  </div>
                                  <div className="main-block d-flex justify-content-between align-items-center">
                                      {/* Price */}
                                      <div className="price">
                                          <span className="value">₦8,500 ($11.03 USD)</span>
                                          <span className="duration">per month</span>
                                          <p>Billed as one donation of N102,000 ($132.36 USD)</p>
                                      </div>
                                      {/* Donate Btn */}
                                      <div className="btn-block">
                                          <button type="button" className="btn btn-primary">Donate</button>
                                      </div>
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

export default PlanSelection
