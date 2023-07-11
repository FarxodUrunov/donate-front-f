import Image from "next/image";
import { useState } from "react";

const Support = () => {

    const [menuLeft, setMenuLeft] = useState('0')

    function openNav() {
        setMenuLeft('0')
        // document.getElementById("sidebar").style.left = "0";
    }

    function closeNav() {
        setMenuLeft('-350px')
        // document.getElementById("sidebar").style.left = "-350px";
    }


  return (
    <>
          {/* <!-- HEADER --> */}
          {/* <header className="single-header">
              <div className="container-fluid">

                  <div className="d-flex justify-content-between align-items-center"> */}

                      {/* <!-- LOGO --> */}
                      {/* <a href="select-screening.html" className="logo">
                          <img src="images/logo.png" alt="Mysight logo"/>
                      </a>

                      <div className="username">
                          Hello, <span>John Doe</span>
                      </div> */}

                      {/* <!-- Open-Sidebar-Btn --> */}
                      {/* <button type="button" className="open-sidebar d-lg-none"
                          onClick={openNav}
                      >
                          <span>
                              <svg xmlns="http://www.w3.org/2000/svg" height="26" width="22.75" viewBox="0 0 448 512">
                                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                              </svg>
                          </span>
                      </button>

                  </div>

              </div>
          </header> */}
          {/* <!-- / HEADER --> */}

          {/* <!-- Account Setting Wrapper --> */}
          <section className="support-wrapper dashboard-wrapper">

              <div className="container-fluid">

                  <div className="row">


                      <div className="col-lg-3">

                          {/* <!-- Sidebar Main --> */}
                          <aside className="sidebar" style={{ left: `${menuLeft}` }} id="sidebar">

                              {/* <!-- Close Sidebar Button --> */}
                              <div className="close-sidebar-btn">
                                  <a href="javascript:void(0)" className="d-lg-none"
                                      onClick={closeNav}
                                  >
                                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                      </svg>
                                  </a>
                              </div>

                              {/* <!-- User Info --> */}
                              <div className="user-info">
                                  <h2 className="username">John Doe</h2>
                                  <div className="useremail">johndoe@mail.com</div>
                              </div>

                              {/* <!-- Sidebar Menu Wrap--> */}
                              <div className="sidebar-menu-wrap">

                                  <h2>MY ACCOUNT</h2>

                                  {/* <!-- Sidebar-Menu --> */}
                                  <nav className="sidebar-menu">

                                      <ul className="list-unstyled">

                                          <li>
                                              <a href="account-setting.html"><Image width={30} height={30} src="/images/account-setting-icon.png" alt="Account Setting"/>Account Setting</a>
                                          </li>

                                          <li>
                                              <a href="donation-plan.html"><Image width={30} height={30} src="/images/donation-plan-icon.png" alt="Donation Plan"/>Donation Plan</a>
                                          </li>

                                          <li>
                                              <a href="invoice-blank.html"><Image width={30} height={30} src="/images/invoice-icon.png" alt="Invoice"/>Invoice</a>
                                          </li>

                                          <li>
                                              <a className="active" href="support.html"><Image width={30} height={30} src="/images/customer-support-icon.png" alt="Support"/>Support</a>
                                          </li>

                                          <li>
                                              <a href="#"><Image width={30} height={30} src="/images/sign-out-icon.png" alt="Sign out"/>Sign out</a>
                                          </li>

                                      </ul>

                                  </nav>

                              </div>

                          </aside>

                      </div>



                      <div className="col-lg-9">

                          {/* <!-- Main Content --> */}
                          <main className="layout-main support-main">


                              <div className="support-text-box">

                                  <h1>Support</h1>

                                  <h3>Hi! We are here to help you</h3>

                                  <p>When Customers have problems, they open support ticket or contact us.</p>

                                  <div className="support-info">
                                      <span>24 Hours Support 09981-8372-2323</span>
                                  </div>

                              </div>


                              <div className="create-ticket-box">

                                  <h2>Create New Ticket</h2>

                                  <p>Fill up the Information here , then click the submit button</p>

                                  <div className="ticket-form-wrapper">

                                      <form className="ticket-form" id="supportForm">

                                          <div className="row">

                                              {/* <!-- Full-name Field --> */}
                                              <div className="col-lg-5">

                                                  <div className="form-group mb-4">

                                                      <label className="form-label" htmlFor="TicketFullName">Full Name</label>

                                                      <input type="text" className="form-control" id="TicketFullName" placeholder="John Doe"/>

                                                  </div>

                                              </div>

                                              {/* <!-- Email Field --> */}
                                              <div className="col-lg-7">

                                                  <div className="form-group mb-4">

                                                      <label className="form-label" htmlFor="TicketEmail">Your Email</label>

                                                      <input type="email" className="form-control" id="TicketEmail" placeholder="name@mail.com"/>

                                                  </div>

                                              </div>

                                              {/* <!-- Select Date Field --> */}
                                              <div className="col-lg-5">

                                                  <div className="form-group mb-4">

                                                      <label className="form-label" htmlFor="Ticketdate">Select date</label>

                                                      <input type="date" className="form-control" id="Ticketdate" placeholder=""/>

                                                  </div>

                                              </div>

                                              {/* <!-- Ticket Subject Field --> */}
                                              <div className="col-lg-7">

                                                  <div className="form-group mb-4">

                                                      <label className="form-label" htmlFor="TicketSubject">Ticket Subject</label>

                                                      <input type="text" className="form-control" id="TicketSubject" placeholder=""/>

                                                  </div>

                                              </div>


                                              {/* <!-- Ticket Description Field --> */}
                                              <div className="col-lg-12">

                                                  <div className="form-group">

                                                      <label htmlFor="TicketDescription" className="form-label">Ticket Description</label>

                                                      <textarea className="form-control" id="TicketDescription" rows={5} placeholder="Describe your ticket subject and issues."></textarea>

                                                  </div>

                                              </div>


                                          </div>

                                          {/* <!-- Submit Button --> */}
                                          <button type="submit" className="btn btn-primary">Submit</button>

                                      </form>

                                  </div>

                              </div>


                          </main>


                      </div>

                  </div>

              </div>

          </section>
          {/* <!-- /Support Wrapper-->  */}
    </>
  )
}

export default Support
