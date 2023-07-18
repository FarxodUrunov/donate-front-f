import LeftMenu from "@/components/layout/left-menu"
import Link from "next/link"
import { useState } from "react"
import { Button, Modal } from "react-bootstrap"

const AccountSetting = () => {
    const [menuLeft, setMenuLeft] = useState('-350px')
    const [showName, setShowName] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleClose = (str: string) => {
        if (str === "name") setShowName(false)
        if (str === "email") setShowEmail(false)
        if (str === "password") setShowPassword(false)
    }
    const handleShow = (str: string) => {
        if (str === "name") setShowName(true)
        if (str === "email") setShowEmail(true)
        if (str === "password") setShowPassword(true)
    }

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
                            <button onClick={() => handleShow("name")} type="button" className="update-btn">Update</button>
                        </div>
                    </div>

                    {/* <!-- Email Update --> */}
                    <div className="profile-item">
                        <p>Email</p>
                        <div className="d-flex align-items-center">
                            <p className="user-data">johndoe@mail.com</p>
                            <button onClick={() => handleShow("email")} type="button" className="update-btn">Update</button>
                        </div>
                    </div>

                    {/* <!-- Password Update --> */}
                    <div className="profile-item">
                        <p>Password</p>
                        <div className="d-flex align-items-center">
                            <p className="user-data">•••••••</p>
                            <button onClick={() => handleShow("password")} type="button" className="update-btn">Update</button>
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
            <Modal
                className="update-info-modal"
                show={showName}
                onHide={() => handleClose("name")}
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h1>Update name</h1>
                    </Modal.Title>
                </Modal.Header>
                <form>
                    <Modal.Body>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="UpdateFirstname" placeholder="First Name" value="John" />
                        </div>
                        {/* <!-- Last Name Input --> */}
                        <div>
                            <input type="text" className="form-control" id="UpdateLastname" placeholder="Last Name" value="Doe" />
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-link" onClick={() => handleClose("name")}>Cancel</button>
                        <button type="submit" className="btn btn-primary" onClick={() => handleClose("name")}>Update</button>
                    </Modal.Footer>
                </form>
            </Modal>


            {/* <!-- MODAL / Update Email --> */}
            <Modal
                className="update-info-modal"
                show={showEmail}
                onHide={() => handleClose("email")}
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h1>Update Email</h1>
                    </Modal.Title>
                </Modal.Header>
                <form>
                    <Modal.Body>

                        <div className="mb-4">
                            <p className="modal-upper-text">Please verify that your email address is correct.</p>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="UpdateEmailAddress" placeholder="New email address" />
                        </div>
                        <div>
                            <div className="input-group">
                                <input className="form-control" id="EmaiUpdatePassword" type="password" placeholder="For security, please confirm your password" required />
                                <span className="input-group-text UpdateEmail-password-toggle"
                                //   onClick={EmaiUpdatePassword('EmaiUpdatePassword')}
                                >
                                    {
                                        true ?
                                            <svg xmlns="http://www.w3.org/2000/svg" height={16} width={18} viewBox="0 0 576 512">
                                                <path fill="currentColor" d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" height={16} width={18} viewBox="0 0 640 512">
                                                <path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
                                            </svg>
                                    }
                                </span>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={() => handleClose("email")} type="button" className="btn btn-link">Cancel</button>

                        {/* <!-- Submit Button --> */}
                        <button onClick={() => handleClose("email")} type="submit" className="btn btn-primary">Update</button>
                    </Modal.Footer>
                </form>
            </Modal>



            {/* <!-- MODAL / Update Password --> */}
            <Modal
                className="update-info-modal"
                show={showPassword}
                onHide={() => handleClose("password")}
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h1>Update Password</h1>
                    </Modal.Title>
                </Modal.Header>
                <form>
                    <Modal.Body>
                        <div className="input-group mb-3">
                            <input className="form-control" id="currentPassword" type="password" placeholder="Current Password" required />
                            <span className="input-group-text password-toggle-current"
                            //   onClick="toggleCurrentPassword('currentPassword')"
                            >
                                {
                                    true ?
                                        <svg xmlns="http://www.w3.org/2000/svg" height={16} width={18} viewBox="0 0 576 512">
                                            <path fill="currentColor" d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" height={16} width={18} viewBox="0 0 640 512">
                                            <path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
                                        </svg>
                                }
                            </span>
                        </div>

                        {/* <!-- New Password Input --> */}
                        <div className="input-group">
                            <input className="form-control" id="newPassword" type="password" placeholder="New Password" required />
                            <span className="input-group-text password-toggle-new"
                            //   onclick="toggleNewPassword('newPassword')"
                            >
                                {
                                    true ?
                                        <svg xmlns="http://www.w3.org/2000/svg" height={16} width={18} viewBox="0 0 576 512">
                                            <path fill="currentColor" d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" height={16} width={18} viewBox="0 0 640 512">
                                            <path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
                                        </svg>
                                }
                            </span>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={() => handleClose("password")} type="button" className="btn btn-link">Cancel</button>

                        {/* <!-- Submit Button --> */}
                        <button onClick={() => handleClose("password")} type="submit" className="btn btn-primary">Update</button>
                    </Modal.Footer>
                </form>
            </Modal>

            {/* <!-- ====================================
          # MODALS/POPUPS  Ends
        ========================================--> */}
        </>
    )
}

export default AccountSetting
