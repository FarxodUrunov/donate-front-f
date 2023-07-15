import LeftMenu from "@/components/layout/left-menu"
import Image from "next/image"
import Link from "next/link"

const DonationPlanDue = () => {
    return (
        <>

            {/* <!-- Main Content --> */}
            <main className="layout-main donation-plan-member">


                {/* <!-- Box --> */}
                <div className="member-box">


                    {/* <!-- Box Header --> */}
                    <div className="header">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <span>Curent Plan</span>
                                <h1>Premium</h1>
                            </div>
                            <div className="col-lg-7">
                                <div className="card-alert ms-lg-auto">
                                    <Image width={24} height={24} src="/images/alert-exclamation.png" alt="Alert" />
                                    You have
                                    insufficient funds on your card,
                                    <Link href="#">change your card</Link> or
                                    <Link href="#"> try again</Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Member's Plan Info --> */}
                    <div className="plan-member-info">

                        {/* <!-- Status --> */}
                        <div className="status-wrap">
                            <h5>Status</h5>
                            <div className="status">
                                {/* <i className="fa-solid fa-circle-exclamation due"></i> */}
                                <svg className="fa-solid fa-circle-exclamation due" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                                </svg>
                                <span>Due</span> <span className="due-announcement">Payment due from september 17, 2023</span>
                            </div>
                        </div>

                        {/* <!-- Inquire-Session --> */}
                        <div className="inquire-session-wrap d-sm-flex">

                            <div className="box">
                                <p>0</p>
                                <span>Inquires</span>
                            </div>

                            <div className="box ms-sm-4 mt-sm-0 mt-3">
                                <p>0</p>
                                <span>Sessions</span>
                            </div>

                        </div>

                        {/* <!-- Date Category --> */}
                        <div className="date-catg">

                            {/* <!-- member Since --> */}
                            <div className="member-since">
                                <h5>Member Since :</h5>
                                <div className="date">January 29, 2020</div>
                            </div>

                            {/* <!-- Renew Plan by --> */}
                            <div className="renew-plan mt-4">
                                <h5>Renew Plan by :</h5>
                                <div className="date">March 29, 2020</div>
                            </div>

                        </div>

                    </div>

                    {/* <!-- Button Group --> */}
                    <div className="button-group">
                        <Link href="plan-selection" className="btn btn-primary me-4">Upgrade Plan</Link>
                        <Link href="cancel-plan" className="btn btn-primary cancel-btn">Cancel Plan</Link>
                    </div>


                </div>


            </main>

        </>
    )
}

export default DonationPlanDue
