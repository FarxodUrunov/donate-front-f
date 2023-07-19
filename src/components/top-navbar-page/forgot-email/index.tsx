import Link from "next/link"

const ForgotEmail = () => {
  return (
    <>
          {/* MAIN */}
          <main className="gradient-bg">
              {/* Reset Password Wrapper */}
              <section className="forgot-email-wrapper">
                  <div className="container">
                      {/* Reset Password Box */}
                      <div className="forgot-email-box mx-auto">
                          <div>
                              <Link href="/">Back to Log-in</Link>
                          </div>
                          <h1>Retrieving the email you used to Register for MySight</h1>
                          <p>{"Search every email account you use for the word “MySight” to find any emails we’ve sent you."}</p>
                          <h5>You can also try this:</h5>
                          <ul className="ps-3">
                              <li>Try logging in with any and all email addresses / passwords you may have used to create an account, or that you regularly use elsewhere.</li>
                              <li>Enter all email addresses you use into our <Link href="reset-password">password reset</Link>  form (you must be logged out). If an account exists, you’ll receive an email with further details.</li>
                          </ul>
                          <p>{"If you still can’t locate your MySight log-in details, please "}<Link href="support">contact support</Link> and provide the following information: last four digits of the debit card number you used for MySight, card network type (e.g., VISA), the charge date, the charge amount, your PayPal email address (if you paid with PayPal).</p>
                      </div>
                  </div>
              </section>
              {/* /Reset Password Wrapper */}
          </main>
          {/* /MAIN */}
    </>
  )
}

export default ForgotEmail
