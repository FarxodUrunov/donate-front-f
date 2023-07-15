import Image from "next/image"
import Link from "next/link"

const SupportMessageSent = () => {
  return (
    <>
          {/* MAIN */}
          <main className="gradient-bg">
              {/* Select-Screening Section */}
              <section className="support-message-sent">
                  <div className="container">
                      {/* Message Box */}
                      <div className="message-box mx-auto">
                          {/* Back Button */}
                        <Link className="go-back" href="support">
                              <svg className="fa-solid" xmlns="http://www.w3.org/2000/svg" height={36} width={24} viewBox="0 0 384 512">
                                  <path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                              </svg>
                        </Link>
                          {/* Icon */}
                          <div className="message-icon text-center">
                              <Image width={140} height={140} src="/images/support-message-icon.jpg" className="img-fluid" alt="Support Message Icon" />
                          </div>
                          <h1>Message Sent!</h1>
                          <p>Mysight Support responds within 1 Hour. <br />
                              An email will be sent to you once they reply.</p>
                          {/* Buttion Link */}
                          <div>
                              <Link href="support" className="btn btn-primary w-100">Got it</Link>
                          </div>
                          {/* Button Link */}
                          <div>
                              <Link href="select-screening" className="btn btn-primary btn-grey w-100">Go Back</Link>
                          </div>
                      </div>
                  </div>
              </section>
              {/* /Select-Screening Section */}
          </main>
          {/* / MAIN */}
    </>
  )
}

export default SupportMessageSent
