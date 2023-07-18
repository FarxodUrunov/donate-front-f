import Image from "next/image"
import Link from "next/link"
import { Accordion } from "react-bootstrap"

const DonationDisbursement = () => {
    return (
        <>
            {/* <!-- MAIN --> */}
            <main>



                <div className="container">

                    {/* <!-- Donation Hero-Section --> */}
                    <section className="donation-hero-section d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                {/* <!-- Hero-Content Column --> */}
                                <div className="col-xl-7 col-lg-9 col-md-10 mx-auto">
                                    <Image width={85} height={85} src="/images/Disburse-icon-green.png" className="img-fluid Donation-icon" alt="Donatin Disbursement Icon" />
                                    <h1>Donation Disbursement is
                                        <span>Transparent</span>,
                                        <span>Fair</span>, and
                                        <span>Just</span>
                                    </h1>
                                    <p> <span>We sow more when you donate more</span> </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- /Donation Hero-Section --> */}
                </div>




                {/* <!-- Disbursement Section --> */}
                <section className="disbursement-section">
                    <div className="container">

                        <h2>Where does your Donations go ?</h2>

                        <div className="disbursement-box-wrapper mx-auto">
                            <div className="row gy-4">

                                {/* <!-- Disbursement-box --> */}
                                <div className="col-lg-6">
                                    <div className="disbursement-box">
                                        <span>For Tithe</span>
                                        <h3>10% NGN</h3>
                                        <ul>
                                            <li>
                                                {/* <i className="fa fa-check-circle"></i> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width={54} height={24} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={54} height={24} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- Disbursement-box --> */}
                                <div className="col-lg-6">
                                    <div className="disbursement-box">
                                        <span>For Orphans</span>
                                        <h3>10% NGN</h3>
                                        <ul>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={54} height={24} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={54} height={24} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- Disbursement-box --> */}
                                <div className="col-lg-6">
                                    <div className="disbursement-box">
                                        <span>For Widows</span>
                                        <h3>10% NGN</h3>
                                        <ul>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={54} height={24} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={54} height={24} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- Disbursement-box --> */}
                                <div className="col-lg-6">
                                    <div className="disbursement-box">
                                        <span>For Poor and Needy</span>
                                        <h3>10% NGN</h3>
                                        <ul>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={54} height={24} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={54} height={24} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- Disbursement-box --> */}
                                <div className="col-lg-6">
                                    <div className="disbursement-box">
                                        <span>For Ministerial Provision </span>
                                        <h3>10% NGN</h3>
                                        <ul>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={54} height={24} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={54} height={24} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- Disbursement-box --> */}
                                <div className="col-lg-6">
                                    <div className="disbursement-box">
                                        <span>For Website Maintenance</span>
                                        <h3>50% NGN</h3>
                                        <ul>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={54} height={24} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={54} height={24} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- /Disbursement Section --> */}






                {/* <!-- FAQ Section --> */}
                <section className="faq-section">

                    <div className="container">


                        <h2>Frequently Asked Questions</h2>


                        {/* <!-- FAQ Item Wrapper & Accordion --> */}
                        <Accordion defaultActiveKey="0">

                            <div className="row gx-5">
                                <div className="col-lg-6">
                                {
                                    [1, 2, 3].map(item => (
                                        <Accordion.Item key={item} eventKey={`${item}`} className="accordion-item">
                                                <Accordion.Header>
                                                    <svg className="fa fa-question-circle" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                                                    </svg>
                                                    Lorem ipsum dolor sit amet adipisicing ?
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quos voluptatum at, quibusdam blanditiis saepe soluta laborum, repellendus nemo id porro dolor eveniet perspiciatis veritatis doloremque aliquam nam! Libero, nostrum!
                                                </Accordion.Body>
                                            </Accordion.Item>
                                    ))
                                }
                                </div>
                                <div className="col-lg-6">
                                {
                                    [4, 5, 6].map(item => (
                                        <Accordion.Item key={item} eventKey={`${item}`} className="accordion-item">
                                                <Accordion.Header>
                                                    <svg className="fa fa-question-circle" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                                                    </svg>
                                                    Lorem ipsum dolor sit amet adipisicing ?
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quos voluptatum at, quibusdam blanditiis saepe soluta laborum, repellendus nemo id porro dolor eveniet perspiciatis veritatis doloremque aliquam nam! Libero, nostrum!
                                                </Accordion.Body>
                                            </Accordion.Item>
                                    ))
                                }
                                </div>
                            </div>
                        </Accordion>

                    </div>


                </section>
                {/* <!-- /FAQ Section --> */}





                {/* <!-- Cannot-Find-Question Section --> */}
                <section className="cannot-find-question mx-auto">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 mx-auto">
                                <p>{"Can’t find answers you are looking for?"} <br /> Please Contact to <Link href="support">Our Support</Link></p>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!-- Cannot-Find-Question Section --> */}





            </main>
            {/* <!-- / MAIN-->  */}
        </>
    )
}

export default DonationDisbursement
