import TopNavbarLayout from "@/components/layout/top-navbar"
import SupportMessageSent from "@/components/top-navbar-page/support-message-sent"
import Image from "next/image"
import Link from "next/link"

const SupportMessageSentPage = () => {
  return (
    <>
          <TopNavbarLayout userName="John Doe">
              <SupportMessageSent />
          </TopNavbarLayout>
    </>
  )
}

export default SupportMessageSentPage
