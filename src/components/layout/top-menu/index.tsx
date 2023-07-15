import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from 'react-bootstrap/Navbar';

const inter = Inter({ subsets: ["latin"] });

const TopMenuLayout = ({ children }: any) => {

    const { pathname } = useRouter()

    return (
        <>
            {/* HEADER */}
            <header>
                {/* NAVBAR */}
                <Navbar expand="lg" className="">
                    <div className="container-fluid">
                        {/* LOGO */}
                        <Link href="select-screening" className="navbar-brand">
                            <Image src="/images/logo.png" width={200} height={68.23} alt="Mysight logo" />
                        </Link>
                        {/* Navbar Toggler */}
                        <Navbar.Toggle>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="26" width="22.75" viewBox="0 0 448 512">
                                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                                </svg>
                            </span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <ul className="navbar-nav pt-lg-0 pt-3 ms-auto">
                                <li className="nav-item">
                                    {/* Account Settings */}
                                    <Link className={`nav-link ${pathname === "/account-setting" ? "active" : ""}`} href="account-setting">
                                        Account Settings
                                    </Link>
                                </li>
                                {/* Donation Plan */}
                                <li className="nav-item">
                                    <Link className={`nav-link ${pathname === "/donation-plan" ? "active" : ""}`} href="donation-plan">
                                        Donation Plan
                                    </Link>
                                </li>
                                {/* Invoice */}
                                <li className="nav-item">
                                    <Link className={`nav-link ${pathname === "/about-us" ? "active" : ""}`} href="about-us">
                                        About Us
                                    </Link>
                                </li>
                                {/* Support */}
                                <li className="nav-item">
                                    <Link className={`nav-link ${pathname === "/support" ? "active" : ""}`} href="support">
                                        Support
                                    </Link>
                                </li>
                                {/* Sign out */}
                                <li className="nav-item">
                                    <Link className="nav-link" href="login">
                                        Sign out
                                    </Link>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </header>
            {/* / HEADER */}
            <div className={inter.className}>{children}</div>
        </>
    )
}

export default TopMenuLayout