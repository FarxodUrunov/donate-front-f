import Image from "next/image"

const PaymentSuccessful = () => {
  return (
    <>
          {/* MAIN */}
          <main className="gradient-bg">
              {/* Select-Screening Section */}
              <section className="payment-successful">
                  <div className="container">
                      <div className="success-box mx-auto">
                          <a className="go-back" href="select-screening.html">
                              {/* <i className="fa-solid fa-xmark" /> */}
                              <svg xmlns="http://www.w3.org/2000/svg" height={32} width={32} viewBox="0 0 384 512">
                                  <path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                              </svg>
                          </a>
                          <div className="success-icon text-center">
                              <img src="images/payment-success-icon.jpg" className="img-fluid" alt="Payment Successful Icon" />
                          </div>
                          <h1>Payment Successful</h1>
                          <h3>Spread the World</h3>
                          <p>Love the service. Go ahead, and share the link with friends--they'll thank you for it.</p>
                          <div className="social-icon-row row">
                              <div className="col-8 mx-auto">
                                  <div className="d-flex">
                                      <a href="#" 
                                    //   onClick="shareOnWhatsapp()" 
                                      className="social-icon"><Image width={56.44} height={56.44} src="/images/whatsapp-icon.jpg" className="img-fluid" alt="Whatsapp" /></a>
                                      <a href="#" 
                                    //   onClick="shareOnFacebook()" 
                                      className="social-icon"><Image width={56.44} height={56.44} src="/images/facebook-icon.jpg" className="img-fluid" alt="Facebook" /></a>
                                      <a href="#" 
                                    //   onClick="shareOnTwitter()"
                                      className="social-icon"><Image width={56.44} height={56.44} src="/images/twitter-icon.jpg" className="img-fluid" alt="Twitter" /></a>
                                  </div>
                              </div>
                          </div>
                          <div>
                              <p>Or Copy Link</p>
                          </div>
                          <div className="link-box input-group">
                              <input type="text" id="linkInput" className="form-control" placeholder="Username" defaultValue="http://mysight.ng.com/" aria-describedby="copyLink" readOnly />
                              <span className="input-group-text p-0" id="copyLink">
                                  <button
                                    //   onClick={copyLink}
                                  >
                                      <svg className="mb-1" xmlns="http://www.w3.org/2000/svg" height={16} width={16} viewBox="0 0 512 512">
                                          <path fill="currentColor" d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z" />
                                      </svg>
                                  </button>
                              </span>
                          </div>
                      </div>
                  </div>
              </section>
              {/* /Select-Screening Section */}
              {/* Toaster Notification */}
              <div className="toast-container">
                  <div id="toastercontainer" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                      <div className="toast-header">
                          <strong className="me-auto">Notification</strong>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
                      </div>
                      <div className="toast-body text-start">
                          Link Copied!
                      </div>
                  </div>
              </div>
          </main>
          {/* / MAIN */}
    </>
  )
}

export default PaymentSuccessful
