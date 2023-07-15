import Image from 'next/image'
import Link from 'next/link'

const ThankyouBox = () => {
  return (
    <>
          {/* MAIN */}
          <main className="gradient-bg">
              {/* Select-Screening Section */}
              <section className="team-submission-box">
                  <div className="container">
                      {/* Thank-you Box */}
                      <div className="thankyou-box mx-auto">
                          {/* Icon */}
                          <div className="message-icon text-center">
                              <Image width={100} height={102} src="/images/thankyou-submit-icon.jpg" className="img-fluid" alt="Thank-you Icon" />
                          </div>
                          <h1>Thank you</h1>
                          <p>Your submission has been recieved. <br /> We will be in touch and contact you soon!</p>
                          {/* Button Link */}
                          <div>
                              <Link href="select-screening" className="btn btn-primary btn-grey w-100">Back to site</Link>
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

export default ThankyouBox
