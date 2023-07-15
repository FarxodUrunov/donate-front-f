import LeftMenuLayout from "@/components/layout/left-menu"
import LeftMenu from "@/components/layout/left-menu"
import DonationPlan from "@/components/left-menu-page/donation-plan"
import Image from "next/image"
import Link from "next/link"

const DonationPlanPage = () => {
  return (
    <>
          <LeftMenuLayout>
              <DonationPlan />
          </LeftMenuLayout>
    </>
  )
}

export default DonationPlanPage
