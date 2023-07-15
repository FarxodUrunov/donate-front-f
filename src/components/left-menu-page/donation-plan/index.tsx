import Image from "next/image"
import Link from "next/link"

const DonationPlan = () => {
    return (
        <>

            {/* <!-- Main Content --> */}
            <main className="layout-main donation-plan">

                {/* <!-- Head --> */}
                <h1>Donation Plan</h1>

                <div className="para-group">
                    <p>We’re a group of Holy Spirt filled, bible-believing, gifted seers. We're here to ensure you get a clear, detailed, and precise spiritual report to help you, your family, and the body of Christ.
                    </p>
                    <p>We stand on the word in 1 Timothy 5:18 and Ecclesiastes 3:13. Our subscription plans are seeds given to support the ministerial work.</p>
                </div>


                {/* <!-- Plan Box Wrapper --> */}
                <div className="plan-box-wrapper">

                    <div className="row gy-4">


                        <div className="col-lg-6">

                            {/* <!-- Donation Plan Box --> */}
                            <div className="donation-plan-box">

                                <span className="top-head">FOR INDIVIDUALS</span>

                                {/* <!-- Plan title --> */}
                                <h2>
                                    <Image className="me-3" src="/images/pay-as-you-go-icon.png" width={40} height={40} alt="Pay-as-you-go" />
                                    Pay-as-you-go
                                </h2>

                                <div className="divider"></div>

                                <p>Insightful, thorough, and Comprehensive spiritual report. What to expect</p>

                                {/* <!-- Plan Features --> */}
                                <div className="plan-feature">

                                    <ul className="list-unstyled m-0 p-0">

                                        <li>
                                            <span>
                                                <svg className="fa-solid fa-circle-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                            </span>
                                            <span>Clarity</span>
                                        </li>

                                        <li>
                                            <span>
                                                <svg className="fa-solid fa-circle-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                            </span>
                                            <span>Comprehensive</span>
                                        </li>

                                        <li>
                                            <span>
                                                <svg className="fa-solid fa-circle-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                            </span>
                                            <span>Thorough</span>
                                        </li>

                                        <li>
                                            <span>
                                                <svg className="fa-solid fa-circle-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                            </span>
                                            <span>Explanatory</span>
                                        </li>

                                        <li>
                                            <span>
                                                <svg className="fa-solid fa-circle-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                            </span>
                                            <span>Profound Discovery ( Family, Gifts, Purposes, Foundations)</span>
                                        </li>

                                    </ul>

                                </div>

                                {/* <!-- Button --> */}
                                <Link href="plan-selection" className="btn btn-primary w-100">Get Started</Link>

                            </div>

                        </div>


                        <div className="col-lg-6">

                            {/* <!-- Donation Plan Box --> */}
                            <div className="donation-plan-box">

                                <span className="top-head">FOR INDIVIDUALS</span>

                                {/* <!-- Plan title --> */}
                                <h2>
                                    <Image className="me-2" src="/images/diamond-icon.png" width={40} height={40} alt="Premium" />
                                    Premium
                                    <span> (Monthly)</span>
                                </h2>

                                <div className="divider"></div>

                                <p>In-depth, well-detailed, and solution- driven spiritual report</p>

                                {/* <!-- Plan Features --> */}
                                <div className="plan-feature">

                                    <ul className="list-unstyled m-0 p-0">

                                        <li>
                                            <span>
                                                <svg className="fa-solid fa-circle-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                            </span>
                                            <span className="fw-bold">Everything in Pay-as-you-go</span>
                                        </li>

                                        <li>
                                            <span>
                                                <svg className="fa-solid fa-circle-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                            </span>
                                            <span>Full Detailed spiritual report</span>
                                        </li>

                                        <li>
                                            <span>
                                                <svg className="fa-solid fa-circle-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                            </span>
                                            <span>1on1 Live Session (1 session)</span>
                                        </li>

                                        <li>
                                            <span>
                                                <svg className="fa-solid fa-circle-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                            </span>
                                            <span>Spiritual Detections</span>
                                        </li>

                                        <li>
                                            <span>
                                                <svg className="fa-solid fa-circle-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                            </span>
                                            <span>Tailored Solutions</span>
                                        </li>

                                        <li>
                                            <span>
                                                <svg className="fa-solid fa-circle-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                            </span>
                                            <span>Divine Targeted Prayers</span>
                                        </li>

                                    </ul>

                                </div>

                                {/* <!-- Button --> */}
                                <Link href="plan-selection" className="btn btn-primary w-100">Get Started</Link>

                            </div>

                        </div>


                    </div>

                </div>



            </main>

        </>
    )
}

export default DonationPlan
