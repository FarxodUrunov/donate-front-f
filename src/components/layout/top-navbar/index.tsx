import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

interface TopNavbarLayoutProps{
    children: any;
    line?: boolean;
    userName?: string;
}

const inter = Inter({ subsets: ["latin"] });

const TopNavbarLayout = (props:TopNavbarLayoutProps) => {
    
    return (
        <>
            {/* HEADER */}
            <header className={`single-header position-relative ${props.line ? 'border-bottom-0' : ''}`}>
                <div className="container-fluid">

                    <div className="d-flex justify-content-between align-items-center">

                        {/* <!-- LOGO --> */}
                        <Link href="select-screening" className="logo">
                            <Image src="/images/logo.png" width={200} height={68.23} alt="Mysight logo" />
                        </Link>

                        {
                            props.userName && 
                            <div className="username">
                                Hello, <span>{props.userName}</span>
                            </div>
                        }

                    </div>

                </div>
            </header>
            {/* / HEADER */}
            <div className={inter.className}>{props.children}</div>
        </>
    )
}

export default TopNavbarLayout

TopNavbarLayout.defaultProps = {
    line: false
}