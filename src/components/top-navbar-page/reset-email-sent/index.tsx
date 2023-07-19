import Link from "next/link"

const ResetEmailSent = () => {
  return (
    <>
          {/* MAIN */}
          <main className="gradient-bg">
              {/* Forgot Password Wrapper */}
              <section className="forgot-password-wrapper">
                  <div className="container">
                      {/* Forgot Password Box */}
                      <div className="forgot-password-box mx-auto">
                          {/* Title */}
                          <div className="d-flex justify-content-between align-items-center mb-lg-4 mb-3">
                              <h1>Password Reset</h1>
                              <div>
                                  <Link href="/">Back to Log-in</Link>
                              </div>
                          </div>
                          <div className="form-help-text">
                              Enter your email, and we’ll send you instructions on how to reset your password.
                          </div>
                          {/* Alert Success Container */}
                          <div className="alert-success-container d-flex">
                              <div>
                                  <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} viewBox="0 0 512 512">
                                      <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                  </svg>
                              </div>
                              <div className="text">
                                  {"If there's a MySight account connected to this email address, we'll email you password reset instructions."}
                                  <br />
                                  {"If you don't receive the email, please try again and make sure you enter the email address associated with your MySight account."}
                              </div>
                          </div>
                          {/* Next Button */}
                          <div>
                              <Link href="/" className="btn btn-primary w-100">Back to Log-in</Link>
                          </div>
                          {/* Forgot Email? */}
                          <div className="text-center mt-3">
                              <Link href="forgot-email" className="text-muted"><small>Forgot email?</small></Link>
                          </div>
                      </div>
                  </div>
              </section>
              {/* /Forgot Password Wrapper */}
          </main>
          {/* /MAIN */}
    </>
  )
}

export default ResetEmailSent
