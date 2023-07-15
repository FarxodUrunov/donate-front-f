import Link from "next/link"

const AccountCancelled = () => {
    return (
        // < !--MAIN -- >
        <main className="gradient-bg">



            {/* <!-- Account Cancelled Page --> */}
            <section className="account-cancel-wrapper">

                <div className="container">


                    {/* <!-- Cancel Box --> */}
                    <div className="cancel-box mx-auto">

                        {/* <!-- Checkmark icon --> */}
                        <div className="cancel-check">
                            <svg xmlns="http://www.w3.org/2000/svg" height="85" viewBox="0 0 512 512">
                                <path fill="#72bd2f" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                            </svg>
                            {/* <i className="fa-solid fa-circle-check"></i> */}
                        </div>

                        {/* <!-- Heading --> */}
                        <h1>Account Cancelled</h1>

                        {/* <!-- Description --> */}
                        <p>Your account has been successfully cancelled.</p>

                        {/* <!-- Confirmation button --> */}
                        <Link href="select-screening" className="btn btn-primary w-100">Got it!</Link>

                    </div>


                </div>

            </section>
            {/* <!-- /Account Cancelled Page --> */}





        </main>
        // <!-- / MAIN -->
    )
}

export default AccountCancelled
