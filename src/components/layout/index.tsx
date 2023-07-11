import { Inter } from "next/font/google";
import Header from "@/components/header";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: any) => {

    const router = useRouter()

    return (
        <div>
            <Header main={router.pathname === "/login" || router.pathname === "/register" || router.pathname !== "about-us"} />
            <div className={inter.className}>{children}</div>
        </div>
    )
}

export default Layout