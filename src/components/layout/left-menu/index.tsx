import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const LeftMenuLayout = ({ children }: any) => {

    const {pathname} = useRouter()
    const [menuLeft, setMenuLeft] = useState('-350px')
    const [width, setWidth] = useState(0)

    const handleResize = () => setWidth(window.innerWidth)
    
    function openNav() {
        setMenuLeft('0')
    }

    function closeNav() {
        setMenuLeft('-350px')
    }
    
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        width <= 992 ? setMenuLeft('-350px') : setMenuLeft('0')
    },[width])

    return (
      <>
            <header className="single-header">
                <div className="container-fluid">

                    <div className="d-flex justify-content-between align-items-center">

                        {/* <!-- LOGO --> */}
                        <Link href="select-screening" className="logo">
                            <Image src="/images/logo.png" width={200} height={68.23} alt="Mysight logo" />
                        </Link>

                        <div className="username">
                            Hello, <span>John Doe</span>
                        </div>

                        {/* <!-- Open-Sidebar-Btn --> */}
                        <button type="button" className="open-sidebar d-lg-none"
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
            </header>

            {/* <!-- Donation-Plan Wrapper --> */}
            <section className="donation-plan-wrapper dashboard-wrapper">

                <div className="container-fluid">

                    <div className="row">

                        <div className="col-lg-3">

                            {/* <!-- Sidebar Main --> */}
                            <aside className="sidebar" style={{ left: `${menuLeft}` }} id="sidebar">

                                {/* <!-- Close Sidebar Button --> */}
                                <div className="close-sidebar-btn">
                                    <button className="d-lg-none border-0 bg-transparent px-0"
                                        onClick={closeNav}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height={26} width={26} viewBox="0 0 384 512">
                                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                        </svg>
                                    </button>
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
                                                <Link className={`${pathname === "/account-setting" && "active"}`} href="account-setting"><Image width={30} height={30} src="/images/account-setting-icon.png" alt="Account Setting" />Account Setting</Link>
                                            </li>

                                            <li>
                                                <Link className={`${pathname.includes("donation") && "active"}`} href="donation-plan"><Image width={30} height={30} src="/images/donation-plan-icon.png" alt="Donation Plan" />Donation Plan</Link>
                                            </li>

                                            <li>
                                                <Link className={`${pathname.includes("invoice") && "active"}`} href="invoice-blank"><Image width={30} height={30} src="/images/invoice-icon.png" alt="Invoice" />Invoice</Link>
                                            </li>

                                            <li>
                                                <Link className={`${pathname === "/support" && "active"}`} href="support"><Image width={30} height={30} src="/images/customer-support-icon.png" alt="Support" />Support</Link>
                                            </li>

                                            <li>
                                                <Link href="/"><Image width={30} height={30} src="/images/sign-out-icon.png" alt="Sign out" />Sign out</Link>
                                            </li>

                                        </ul>

                                    </nav>

                                </div>

                            </aside>

                        </div>


                        <div className="col-lg-9">

                            {/* <!-- Main Content --> */}
                            <div>{children}</div>


                        </div>

                    </div>

                </div>

            </section>
            {/* <!-- /Donation-Plan Wrapper-->  */}
      </>
  )
}

export default LeftMenuLayout
