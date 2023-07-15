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
                    <Link href="login" className="btn btn-primary active">
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
                        <svg className="fa-brands fa-facebook" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                          <path fill="#fff" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                        </svg>
                      </a>
                      {/* Twitter */}
                      <a className="social-icon tw" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                          <path fill="#fff" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </a>
                      {/* Instagram */}
                      <a className="social-icon ig" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                          <path fill="#fff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                      {/* TikTok */}
                      <a className="social-icon tt" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                          <path fill="#fff" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                        </svg>
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