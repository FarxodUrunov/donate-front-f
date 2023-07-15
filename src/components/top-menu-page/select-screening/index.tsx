
import Image from "next/image";
import Link from "next/link";

const SelectScreening = () => {
    return (
        <main>


            {/* <!-- Select-Screening Section --> */}
            <section className="select-screening d-flex align-items-center">

                <div className="container">

                    <div className="row align-items-center">


                        <div className="col-lg-6">

                            {/* <!-- Left Section --> */}
                            <div className="screening-left">

                                <h1>Select your preferred <span>screening.</span></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusamus tenetur impedit temporibus quod alias. Repellendus nesciunt aspernatur exercitationem voluptas? Tenetur nesciunt eaque iste molestiae quia.</p>

                                {/* <!-- Client Area --> */}
                                <div className="client-area">

                                    <h5>Work with top Companies</h5>

                                    <div className="row gy-3">

                                        <div className="col-4">
                                            <Image width={157.83} height={36.06} src="/images/logoipsum.svg" className="img-fluid" alt="" />
                                        </div>

                                        <div className="col-4">
                                            <Image width={157.83} height={36.06} src="/images/logoipsum.svg" className="img-fluid" alt="" />
                                        </div>

                                        <div className="col-4">
                                            <Image width={157.83} height={36.06} src="/images/logoipsum.svg" className="img-fluid" alt="" />
                                        </div>

                                        <div className="col-4">
                                            <Image width={157.83} height={36.06} src="/images/logoipsum.svg" className="img-fluid" alt="" />
                                        </div>

                                        <div className="col-4">
                                            <Image width={157.83} height={36.06} src="/images/logoipsum.svg" className="img-fluid" alt="" />
                                        </div>

                                        <div className="col-4">
                                            <Image width={157.83} height={36.06} src="/images/logoipsum.svg" className="img-fluid" alt="" />
                                        </div>

                                    </div>
                                </div>

                                {/* <!-- Divider with Text --> */}
                                <div className="or-divider"> <span>or</span> </div>

                                {/* <!-- Intro Button --> */}
                                <button className="btn btn-primary w-100">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                            <path fill="#fff" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                        </svg>
                                    </span>
                                    Quick Intro
                                </button>

                            </div>

                        </div>



                        <div className="col-lg-6">

                            {/* <!-- Screening Right --> */}
                            <div className="screening-right">

                                {/* <!-- Heading --> */}
                                <h2>Select your Preferred <span>Screening.</span></h2>

                                {/* <!-- Slider Main Wrapper --> */}
                                <div id="carouselExampleIndicators" className="carousel slide">

                                    <div className="carousel-inner">

                                        {/* <!-- Slide 1 --> */}
                                        <div className="carousel-item active">

                                            <div className="row gy-3">

                                                <div className="col-md-4 col-6">
                                                    {/* <!-- General Screening--> */}
                                                    <div className="screening-box" data-page="general-screening.html">
                                                        <Image width={65} height={65} src="/images/general-screening.png" className="img-fluid" alt="General Screening" />
                                                        <h5>General Screening</h5>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 col-6">
                                                    {/* <!-- Employment Screening--> */}
                                                    <div className="screening-box" data-page="employment-screening.html">
                                                        <Image width={65} height={65} src="/images/employment-screening.png" className="img-fluid" alt="Employment Screening" />
                                                        <h5>Employment Screening</h5>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 col-6">
                                                    {/* <!-- Matial Screening--> */}
                                                    <div className="screening-box" data-page="marital-screening.html">
                                                        <Image width={65} height={65} src="/images/marital-screening.png" className="img-fluid" alt="Marital Screening" />
                                                        <h5>Marital Screening</h5>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 col-6">
                                                    {/* <!-- Ministerial Screening--> */}
                                                    <div className="screening-box" data-page="ministerial-screening.html">
                                                        <Image width={65} height={65} src="/images/ministerial-screening.png" className="img-fluid" alt="Ministerial Screening" />
                                                        <h5>Ministerial Screening</h5>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 col-6">
                                                    {/* <!-- House/Home Screening--> */}
                                                    <div className="screening-box" data-page="home-screening.html">
                                                        <Image width={65} height={65} src="/images/house-home-screening.png" className="img-fluid" alt="House/Home Screening" />
                                                        <h5>Home Screening</h5>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 col-6">
                                                    {/* <!-- God-Will Screening--> */}
                                                    <div className="screening-box" data-page="godswill-screening.html">
                                                        <Image width={65} height={65} src="/images/god-will-screening.png" className="img-fluid" alt="God's Will" />
                                                        <h5>{"God's Will"}</h5>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                        {/* <!-- Slide 2 --> */}
                                        <div className="carousel-item">

                                            <div className="row gy-3">

                                                <div className="col-md-4 col-6">
                                                    {/* <!-- Request-pray Screening--> */}
                                                    <div className="screening-box" data-page="request-pray-screening.html">
                                                        <Image width={65} height={65} src="/images/request-pray-screening.png" className="img-fluid" alt="Request For Prayer" />
                                                        <h5>Request For Prayer</h5>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Slider Control Dots --> */}
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    </div>
                                </div>

                                {/* <!-- Next Button --> */}
                                <Link href="employment-screening" className="btn btn-primary w-100 d-flex align-items-center justify-content-center" id="next-button">
                                    Next
                                    <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path fill="#fff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                    </svg>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* <!-- Report Bug or Request Feature Pop-up --> */}

            <div className="popup-container">

                <Link href="#" id="popupToggle" className="btn btn-primary plus-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path fill="#fff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                    </svg>
                </Link>


                <div className="report-bug-box" id="popupBox">

                    <Link href="#" id="popupClose">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                        </svg>
                    </Link>

                    {/* <!-- Form --> */}
                    <form>

                        {/* <!-- Title --> */}

                        <h1>Report a bug or request a feature</h1>

                        <div className="form-group d-flex align-items-center mb-3">
                            <label htmlFor="bugfeature" className="form-label w-50">I would like to</label>
                            <select className="form-select" id="bugfeature">
                                <option value="">Select an option</option>
                                <option value="1">Report a bug</option>
                                <option value="2">Request a feature</option>
                            </select>
                        </div>

                        {/* <!-- Bug Title Input --> */}
                        <div className="form-group mb-3">
                            <label htmlFor="bugTitle" className="form-label">Title</label>
                            <input type="text" className="form-control" id="bugTitle" placeholder="Enter a Title" required/>
                        </div>

                        {/* <!-- Bug Description Textarea --> */}
                        <div className="form-group">
                            <label htmlFor="bugDescription" className="form-label">Description</label>
                            <textarea id="bugDescription" className="form-control" rows={3} placeholder="Enter a Description"></textarea>
                        </div>


                        {/* <!-- Submit Button --> */}
                        <div>
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </div>


                    </form>

                </div>


            </div>






        </main>
    )
}

export default SelectScreening
