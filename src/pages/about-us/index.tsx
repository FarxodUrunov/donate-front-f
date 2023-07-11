import Header from "@/components/header";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      {/* MAIN */}
      <main>
        <div className="container-fluid">
          {/* Mission Section */}
          <section className="mission-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <h1 className="display-5">Our Mission</h1>
                </div>
                <div className="col-lg-7 pt-lg-0 pt-5">
                  <p className="main-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim commodo consequat. Duis aute irure
                    dolor.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="pb-lg-0 pb-3">
                        Lorem ipsum dolor sit amet, consectetur dipg elit, sed
                        do eiusmod tempor incididunt ut ore et dolore magna
                        aliqua. Ut enim ad minim. magna aliqua. Ut enim ad
                        minim.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        Lorem ipsum dolor sit amet, adipien elit, sed do eiusmod
                        tempor incidut labore et dolore magna aliqua. Ut enim ad
                        minim. magna aliqua. Ut enim ad minim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Mission Section */}
        </div>
        {/* Video Section */}
        <section className="video-wrapper">
          <div className="container">
            <div className="video-container">
              <Image
                src="/images/video-banner.jpg"
                width={1296}
                height={657.81}
                className="img-fluid"
                alt="About Us Video"
              />
              <div className="play-icon-wrapper">
                <a
                  href="#"
                  className="video_lightbox-link"
                  data-bs-toggle="modal"
                  data-bs-target="#video-popup"
                >
                  <svg
                    className="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 104 104"
                    fill="none"
                  >
                    <path
                      d="M71.5 49.4848C73.5 50.6027 73.5 53.3973 71.5 54.5152L44.5 69.6066C42.5 70.7244 40 69.3271 40 67.0913L40 36.9087C40 34.6729 42.5 33.2756 44.5 34.3934L71.5 49.4848Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* /Video Section */}
        {/* Story Section */}
        <section className="story-wrapper">
          <div className="container">
            <div className="wrapper-content">
              <div className="row">
                <div className="col-lg-5">
                  <h1 className="dipslay-5">Our Story</h1>
                </div>
                <div className="col-lg-7 pt-lg-0 pt-5">
                  <p className="main-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim commodo consequat. Duis aute irure
                    dolor.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="pb-lg-0 pb-3">
                        Lorem ipsum dolor sit amet, consectetur dipg elit, sed
                        do eiusmod tempor incididunt ut ore et dolore magna
                        aliqua. Ut enim ad minim. magna aliqua. Ut enim ad
                        minim.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        Lorem ipsum dolor sit amet, adipien elit, sed do eiusmod
                        tempor incidut labore et dolore magna aliqua. Ut enim ad
                        minim. magna aliqua. Ut enim ad minim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Story Section */}
        {/* Quote Section */}
        <section className="quote-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4">
                <div className="quote-img-wrap pe-md-2">
                  <Image
                    width={298}
                    height={298}
                    src="/images/quote-bible-img.png"
                    className="img-fluid pb-md-0 pb-4"
                    alt="Quote Bible Image"
                  />
                </div>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="quote-text">
                  <Image
                    width={100}
                    height={114}
                    src="/images/quote-img.png"
                    className="img-fluid"
                    alt="Quote Image"
                  />
                  <p>
                    {"Have faith in the LORD your God and you will be upheld; have faith in his prophets and you will be successful. 2 Chronicles 20:20"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Quote Section */}
        {/* featurette Section */}
        <section className="featurette-section">
          {/* featurette Block 1 */}
          <div className="featurette-wrapper has-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 pe-lg-4">
                  <Image
                    width={624}
                    height={487.5}
                    src="/images/placeholder-img.png"
                    className="img-fluid pb-lg-0 pb-3"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 ps-lg-4">
                  <h2 className="display-5">First Subheading here</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* featurette Block 2 */}
          <div className="featurette-wrapper">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 ps-lg-4 order-lg-2 order-1">
                  <Image
                    width={624}
                    height={487.5}
                    src="/images/placeholder-img.png"
                    className="img-fluid pb-lg-0 pb-3"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 pe-lg-4 order-lg-1 order-2">
                  <h2 className="display-5">Second Subheading here</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* featurette Block 3 */}
          <div className="featurette-wrapper has-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 pe-lg-4">
                  <Image
                    width={624}
                    height={487.5}
                    src="/images/placeholder-img.png"
                    className="img-fluid pb-lg-0 pb-3"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 ps-lg-4">
                  <h2 className="display-5">Third Subheading here</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* featurette Block 4 */}
          <div className="featurette-wrapper">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 ps-lg-4 order-lg-2 order-1">
                  <Image
                    width={624}
                    height={487.5}
                    src="/images/placeholder-img.png"
                    className="img-fluid pb-lg-0 pb-3"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 pe-lg-4 order-lg-1 order-2">
                  <h2 className="display-5">Fourth Subheading here</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Quote Section */}
        {/* Donation Section */}
        <section className="donation-section d-lg-flex align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 donation-image" />
          <div className="container">
            <div className="row gx-0">
              <div className="col-lg-6 ms-auto">
                {/* Donation Section Text */}
                <div className="donation-section-right ps-lg-5">
                  {/* Disbursement Icon */}
                  <Image
                    width={80}
                    height={80}
                    src="/images/donation-disburse-icon.png"
                    className="img-fluid"
                    alt="Donation Disbursement Icon"
                  />
                  <h2>Where Your Donations Go?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  {/* Button Link */}
                  <a
                    href="donation-disbursement.html"
                    className="btn btn-primary"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Donation Section */}
        {/* Join-Team Section */}
        <section className="join-team-section">
          <div className="container">
            <div className="box-container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="display-5">Join Eagle Team</h2>
                  <p>
                    The dedicated team at Mysight is driven by a shared mission
                    to serve and support the Christian community. With
                    unwavering commitment and passion, we work tirelessly to
                    provide resources, guidance, and assistance to those seeking
                    spiritual growth and transformation.
                  </p>
                  <a href="join-eagle-team.html" className="btn btn-primary">
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Join-Team Section */}
        {/* ===========
      # MODAL 
  ==============*/}
        {/* Video Popup Modal */}
        <div
          className="modal fade"
          id="video-popup"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-content rounded-0">
                <div className="modal-body">
                  <div className="embed-responsive">
                    <iframe
                      src="https://www.youtube.com/embed/mLwlGsRhNIU"
                      title="YouTube video player"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
