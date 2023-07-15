
const Support = () => {
    return (
        <>

            {/* <!-- Main Content --> */}
            <main className="layout-main support-main">


                <div className="support-text-box">

                    <h1>Support</h1>

                    <h3>Hi! We are here to help you</h3>

                    <p>When Customers have problems, they open support ticket or contact us.</p>

                    <div className="support-info">
                        <span>24 Hours Support 09981-8372-2323</span>
                    </div>

                </div>


                <div className="create-ticket-box">

                    <h2>Create New Ticket</h2>

                    <p>Fill up the Information here , then click the submit button</p>

                    <div className="ticket-form-wrapper">

                        <form className="ticket-form" id="supportForm">

                            <div className="row">

                                {/* <!-- Full-name Field --> */}
                                <div className="col-lg-5">

                                    <div className="form-group mb-4">

                                        <label className="form-label" htmlFor="TicketFullName">Full Name</label>

                                        <input type="text" className="form-control" id="TicketFullName" placeholder="John Doe" />

                                    </div>

                                </div>

                                {/* <!-- Email Field --> */}
                                <div className="col-lg-7">

                                    <div className="form-group mb-4">

                                        <label className="form-label" htmlFor="TicketEmail">Your Email</label>

                                        <input type="email" className="form-control" id="TicketEmail" placeholder="name@mail.com" />

                                    </div>

                                </div>

                                {/* <!-- Select Date Field --> */}
                                <div className="col-lg-5">

                                    <div className="form-group mb-4">

                                        <label className="form-label" htmlFor="Ticketdate">Select date</label>

                                        <input type="date" className="form-control" id="Ticketdate" placeholder="" />

                                    </div>

                                </div>

                                {/* <!-- Ticket Subject Field --> */}
                                <div className="col-lg-7">

                                    <div className="form-group mb-4">

                                        <label className="form-label" htmlFor="TicketSubject">Ticket Subject</label>

                                        <input type="text" className="form-control" id="TicketSubject" placeholder="" />

                                    </div>

                                </div>


                                {/* <!-- Ticket Description Field --> */}
                                <div className="col-lg-12">

                                    <div className="form-group">

                                        <label htmlFor="TicketDescription" className="form-label">Ticket Description</label>

                                        <textarea className="form-control" id="TicketDescription" rows={5} placeholder="Describe your ticket subject and issues."></textarea>

                                    </div>

                                </div>


                            </div>

                            {/* <!-- Submit Button --> */}
                            <button type="submit" className="btn btn-primary">Submit</button>

                        </form>

                    </div>

                </div>


            </main>
        </>
    )
}

export default Support
