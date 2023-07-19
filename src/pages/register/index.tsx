import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Register = () => {

    const [userEmail, setUserEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userPasswordRepeat, setUserPasswordRepeat] = useState('')

    return (
        <>
            <header className="light-header">
                <div className="container-fluid">
                    {/* LOGO */}
                    <Link href="/" className="logo">
                        <Image src="/images/logo.png" width={200} height={68.23} alt="Mysight logo" />
                    </Link>
                </div>
            </header>
            {/* MAIN */}
            <main>
                {/* <!-- Auth Wrapper --> */}
                <section className="auth-wrapper d-flex align-items-center">

                    <div className="container-fluid">

                        <div className="row align-items-end">


                            <div className="col-lg-6 z-1">

                                {/* <!-- Auth Text --> */}
                                <div className="auth-text">

                                    <span>Join Our Marketplace</span>

                                    <h1>Company</h1>

                                    <p>The next generation social network & community! Connect with your friends and play with our
                                        quests and badges gamification system!</p>

                                    {/* <!-- Buttons --> */}
                                    <div className="form-switch-btns">
                                        <Link href="/" className="btn btn-primary">Login</Link>
                                        <Link href="register" className="btn btn-primary ms-2 active">Register</Link>
                                    </div>

                                </div>
                            </div>


                            {/* <!-- Column 2 --> */}
                            <div className="col-lg-6 z-1">

                                {/* <!-- Signup Form --> */}
                                <form id="register-form" className="auth-form mx-auto" method="">

                                    {/* <!-- Heading --> */}
                                    <h2 className="form-title">Create your Account!</h2>

                                    {/* <!-- Email Input --> */}
                                    <div className="form-floating mb-4">
                                        <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="email" id="signup-email" placeholder="Your Email" className="form-control" />
                                        <label htmlFor="signup-email">Your Email</label>
                                    </div>

                                    {/* <!-- Username Input --> */}
                                    <div className="form-floating mb-4">
                                        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" id="signup-username" placeholder="Username" className="form-control" />
                                        <label htmlFor="signup-username">Username</label>
                                    </div>

                                    {/* <!-- Password Input --> */}
                                    <div className="form-floating mb-4">
                                        <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="password" id="signup-password" placeholder="Password" className="form-control" />
                                        <label htmlFor="signup-password">Password</label>
                                    </div>

                                    {/* <!-- Confirm Password Input --> */}
                                    <div className="form-floating mb-4">
                                        <input value={userPasswordRepeat} onChange={(e) => setUserPasswordRepeat(e.target.value)} type="password" id="confirm-password" placeholder="Repeat Password" className="form-control" />
                                        <label htmlFor="confirm-password">Repeat Password</label>
                                    </div>

                                    {/* <!-- Send Updates Checkbox --> */}
                                    <div className="form-check send-updates">
                                        <input className="form-check-input" type="checkbox" id="AgreeOnTerms" />
                                        <label className="form-check-label" htmlFor="AgreeOnTerms">I agree to the Mysight <Link href="terms-and-condition">Terms and Privacy Policy</Link></label>
                                    </div>

                                    {/* <!-- Register Button --> */}
                                    <button type="submit" className="btn btn-primary w-100">Register Now!</button>

                                    {/* <!-- Form Help Text --> */}
                                    <div className="form-help-text">
                                        {"You'll receive a confirmation email in your inbox with a link to activate your account. If you have any problems,"}
                                        <Link href="support">contact us!</Link>
                                    </div>

                                </form>


                            </div>
                        </div>
                    </div>
                </section>




            </main>
        </>
    );
}
export default Register