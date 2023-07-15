import LeftMenu from "@/components/layout/left-menu"
import Link from "next/link"
import { useState } from "react"

const AccountSetting = () => {
    const [menuLeft, setMenuLeft] = useState('-350px')
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

                          {/* <!-- Main Content --> */}
                          <main className="layout-main account-setting-main">

                              {/* <!-- Heading --> */}
                              <h1>Account Settings</h1>

                              {/* <!-- Profile Section --> */}
                              <div className="profile-section">

                                  {/* <!-- Head --> */}
                                  <h3>Profile</h3>

                                  {/* <!-- Name Update --> */}
                                  <div className="profile-item">
                                      <p>Name</p>
                                      <div className="d-flex align-items-center">
                                          <p className="user-data">John Doe</p>
                                          <button type="button" className="update-btn" data-bs-toggle="modal" data-bs-target="#UpdateNameModal">Update</button>
                                      </div>
                                  </div>

                                  {/* <!-- Email Update --> */}
                                  <div className="profile-item">
                                      <p>Email</p>
                                      <div className="d-flex align-items-center">
                                          <p className="user-data">johndoe@mail.com</p>
                                          <button type="button" className="update-btn" data-bs-toggle="modal" data-bs-target="#UpdateEmailModal">Update</button>
                                      </div>
                                  </div>

                                  {/* <!-- Password Update --> */}
                                  <div className="profile-item">
                                      <p>Password</p>
                                      <div className="d-flex align-items-center">
                                          <p className="user-data">•••••••</p>
                                          <button type="button" className="update-btn" data-bs-toggle="modal" data-bs-target="#UpdatePasswordModal">Update</button>
                                      </div>
                                  </div>

                              </div>

                              {/* <!-- Delete Account Section --> */}
                              <div className="delete-ac-section">
                                  <h3>
                                      <Link href="delete-account">Delete Account
                                          {/* <i className="fa-solid fa-trash-can text-muted ms-2"></i> */}
                                          <svg className="fa-solid fa-trash-can text-muted ms-3 mb-1" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 448 512">
                                              <path fill="rgb(34 38 42 / 75%)" d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                                          </svg>
                                      </Link>
                                  </h3>
                                  <p>This account will no longer be available, and all your saved data will be permanently deleted.</p>
                              </div>


                          </main>






          {/* <!-- ==================================== */}
          {/* # MODALS/POPUPS  Starts */}
        {/* ========================================--> */}

          {/* <!-- MODAL / Update Name --> */}
          <div className="modal fade" id="UpdateNameModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="update-info-modal modal-dialog modal-dialog-centered">
                  <div className="modal-content">

                      {/* <!-- Form --> */}
                      <form>

                          {/* <!-- Modal Header --> */}
                          <div className="modal-header">
                              <h1>Update name</h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>

                          {/* <!-- Modal Body --> */}
                          <div className="modal-body">

                              {/* <!-- First Name Input --> */}
                              <div className="mb-3">
                                  <input type="text" className="form-control" id="UpdateFirstname" placeholder="First Name" value="John"/>
                              </div>

                              {/* <!-- Last Name Input --> */}
                              <div>
                                  <input type="text" className="form-control" id="UpdateLastname" placeholder="Last Name" value="Doe"/>
                              </div>

                          </div>

                          {/* <!-- Modal Footer --> */}
                          <div className="modal-footer">
                              <button type="button" className="btn btn-link" data-bs-dismiss="modal">Cancel</button>

                              {/* <!-- Submit Button --> */}
                              <button type="submit" className="btn btn-primary">Update</button>
                          </div>

                      </form>

                  </div>
              </div>
          </div>



          {/* <!-- MODAL / Update Email --> */}
          <div className="modal fade" id="UpdateEmailModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="update-info-modal modal-dialog modal-dialog-centered">
                  <div className="modal-content">

                      {/* <!-- Form --> */}
                      <form>

                          {/* <!-- Modal Header --> */}
                          <div className="modal-header">
                              <h1>Update Email</h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>

                          {/* <!-- Modal Body --> */}
                          <div className="modal-body">

                              <div className="mb-4">
                                  <p className="modal-upper-text">Please verify that your email address is correct.</p>
                              </div>

                              {/* <!-- Email Address Input --> */}
                              <div className="mb-3">
                                  <input type="email" className="form-control" id="UpdateEmailAddress" placeholder="New email address"/>
                              </div>

                              {/* <!-- Password Input --> */}
                              <div>
                                  <div className="input-group">
                                      <input className="form-control" id="EmaiUpdatePassword" type="password" placeholder="For security, please confirm your password" required/>
                                      <span className="input-group-text UpdateEmail-password-toggle"
                                        //   onClick={EmaiUpdatePassword('EmaiUpdatePassword')}
                                      >
                                              <i className="far fa-eye"></i>
                                          </span>
                                  </div>
                              </div>
                          </div>

                          {/* <!-- Modal Footer --> */}
                          <div className="modal-footer">
                              <button type="button" className="btn btn-link" data-bs-dismiss="modal">Cancel</button>

                              {/* <!-- Submit Button --> */}
                              <button type="submit" className="btn btn-primary">Update</button>
                          </div>

                      </form>
                  </div>
              </div>
          </div>



          {/* <!-- MODAL / Update Password --> */}
          <div className="modal fade" id="UpdatePasswordModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="update-info-modal modal-dialog modal-dialog-centered">
                  <div className="modal-content">

                      {/* <!-- Form --> */}
                      <form>
                          {/* <!-- Modal Header --> */}
                          <div className="modal-header">
                              <h1>Update Password</h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>

                          {/* <!-- Modal Body --> */}
                          <div className="modal-body">

                              {/* <!-- Current Password Input --> */}
                              <div className="input-group mb-3">
                                  <input className="form-control" id="currentPassword" type="password" placeholder="Current Password" required/>
                                  <span className="input-group-text password-toggle-current"
                                    //   onClick="toggleCurrentPassword('currentPassword')"
                                  >
                                          <i className="far fa-eye"></i>
                                      </span>
                              </div>

                              {/* <!-- New Password Input --> */}
                              <div className="input-group">
                                  <input className="form-control" id="newPassword" type="password" placeholder="New Password" required/>
                                  <span className="input-group-text password-toggle-new"
                                    //   onclick="toggleNewPassword('newPassword')"
                                  >
                                          <i className="far fa-eye"></i>
                                      </span>
                              </div>
                          </div>

                          {/* <!-- Modal Footer --> */}
                          <div className="modal-footer">
                              <button type="button" className="btn btn-link" data-bs-dismiss="modal">Cancel</button>

                              {/* <!-- Submit Button --> */}
                              <button type="submit" className="btn btn-primary">Update</button>
                          </div>

                      </form>

                  </div>
              </div>
          </div>

          {/* <!-- ====================================
          # MODALS/POPUPS  Ends
        ========================================--> */}
      </>
  )
}

export default AccountSetting
