import BaseIcons from "@/components/base-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Login = () => {
  
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  return (
    <> 
      <header className="light-header">
        <div className="container-fluid">
          {/* LOGO */}
          <Link href="select-screening" className="logo">
            <Image src="/images/logo.png" width={200} height={68.23} alt="Mysight logo" />
          </Link>
        </div>
      </header>
      {/* MAIN */}
      <main>
        {/* Auth Wrapper */}
        <section className="auth-wrapper d-flex align-items-center">
          <div className="container-fluid">
            <div className="row align-items-end">
              {/* Column 1 */}
              <div className="col-lg-6 z-1">
                {/* Auth Text */}
                <div className="auth-text">
                  <span>Join Our Marketplace</span>
                  <h1>Company</h1>
                  <p>
                    The next generation social network &amp; community! Connect
                    with your friends and play with our quests and badges
                    gamification system!
                  </p>
                  {/* Buttons */}
                  <div className="form-switch-btns">
                    <Link href="/" className="btn btn-primary active">
                      Login
                    </Link>
                    <Link href="register" className="btn btn-primary ms-2">
                      Register
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 z-1">
                {/* Login Form */}
                <form id="login-form" className="auth-form mx-auto">
                  {/* Heading */}
                  <h2 className="form-title">Account Login</h2>
                  {/* Username Input */}
                  <div className="form-floating mb-4">
                    <input
                      value={userName}
                      onChange={(e)=>setUserName(e.target.value)}
                      type="text"
                      className="form-control"
                      id="login-username"
                      placeholder="Username"
                      required
                    />
                    <label htmlFor="login-username">Username</label>
                  </div>
                  {/* Password Input */}
                  <div className="form-floating mb-4">
                    <input
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                      type="password"
                      className="form-control"
                      id="login-password"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="login-password">Password</label>
                  </div>
                  <div className="d-flex justify-content-between">
                    {/* Remember Me Checkbox */}
                    <div className="form-check rememberme">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="RemembermeCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="RemembermeCheckbox"
                      >
                        Remember Me
                      </label>
                    </div>
                    {/* Forget Password */}
                    <Link href="forget-password" className="forgetpass">
                      Forgot Password
                    </Link>
                  </div>
                  {/* Login Button */}
                  <button type="submit" className="btn btn-primary w-100">
                    Login to your Account!
                  </button>
                  {/* Social Login Wrapper */}
                  <div className="social-login-wrapper">
                    {/* Head */}
                    <div className="social-login-head text-center">
                      <span>Login with your Social Account</span>
                    </div>
                    {/* Social Icon Row */}
                    <div className="social-icons-wrap d-flex justify-content-center">
                      {/* Facebook */}
                      <a className="social-icon fb" href="#">
                        <BaseIcons name="facebook" viewBox="0 0 512 512" class="fa-brands fa-facebook" width="1em" height="1em" />
                      </a>
                      {/* Twitter */}
                      <a className="social-icon tw" href="#">
                        <BaseIcons name="tw" viewBox="0 0 512 512" class="" width="1em" height="1em" />
                      </a>
                      {/* Instagram */}
                      <a className="social-icon ig" href="#">
                        <BaseIcons name="ig" viewBox="0 0 448 512" class="" width="1em" height="1em" />
                      </a>
                      {/* TikTok */}
                      <a className="social-icon tt" href="#">
                        <BaseIcons name="tt" viewBox="0 0 448 512" class="" width="1em" height="1em" />
                      </a>
                    </div>
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
export default Login