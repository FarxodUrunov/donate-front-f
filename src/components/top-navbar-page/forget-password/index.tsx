import Link from "next/link"

const ForgetPassword = () => {
  return (
    <>
          {/* MAIN */}
          <main className="gradient-bg">
              {/* Forgot Password Wrapper */}
              <section className="forgot-password-wrapper">
                  <div className="container">
                      {/* Forgot Password Box */}
                      <div className="forgot-password-box mx-auto">
                          {/* Form */}
                          <form>
                              {/* Title */}
                              <div className="d-flex justify-content-between align-items-center mb-lg-4 mb-3">
                                  <h1>Forgot Password?</h1>
                                  <div>
                                      <Link href="login">Back to Log-in</Link>
                                  </div>
                              </div>
                              <div className="form-help-text">
                                  Enter your email, and we’ll send you instructions on how to reset your password.
                              </div>
                              {/* Email Input */}
                              <div className="form-floating">
                                  <input type="email" className="form-control" id="email" placeholder="Email" required />
                                  <label htmlFor="email">Email</label>
                              </div>
                              {/* Next Button */}
                              <div>
                                  <button type="submit" className="btn btn-primary w-100">Send me reset instructions</button>
                              </div>
                              {/* Forgot Email? */}
                              <div className="text-center mt-3">
                                  <Link href="forgot-email" className="text-muted"><small>Forgot email?</small></Link>
                              </div>
                          </form>
                      </div>
                  </div>
              </section>
              {/* /Forgot Password Wrapper */}
          </main>
          {/* /MAIN */}
    </>
  )
}

export default ForgetPassword
