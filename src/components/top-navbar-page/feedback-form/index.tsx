import Link from "next/link"

const FeedbackForm = () => {
    return (
        <>
            {/* MAIN */}
            <main className="gradient-bg">
                {/* Feedback Wrapper */}
                <section className="feedback-wrapper">
                    <div className="container">
                        {/* Feedback Form Box */}
                        <div className="feedback-form-box mx-auto">
                            {/* Form */}
                            <form>
                                {/* Title */}
                                <h1>Give Feedback</h1>
                                <p>What do you think of the website?</p>
                                {/* Emoji Ratings */}
                                <div className="emoji-rating">
                                    <div className="form-check">
                                        <input className="form-check-input" name="rating" type="radio" id="rating1" />
                                        <label className="form-check-label" htmlFor="rating1">
                                            <span className="red" >
                                                <svg xmlns="http://www.w3.org/2000/svg" height={28} width={28} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" name="rating" type="radio" id="rating2" />
                                        <label className="form-check-label" htmlFor="rating2">
                                            <span className="red">
                                                <svg xmlns="http://www.w3.org/2000/svg" height={28} width={28} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM182.4 382.5c-12.4 5.2-26.5-4.1-21.1-16.4c16-36.6 52.4-62.1 94.8-62.1s78.8 25.6 94.8 62.1c5.4 12.3-8.7 21.6-21.1 16.4c-22.4-9.5-47.4-14.8-73.7-14.8s-51.3 5.3-73.7 14.8zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" name="rating" type="radio" id="rating3" />
                                        <label className="form-check-label" htmlFor="rating3">
                                            <span className="yellow">
                                                <svg xmlns="http://www.w3.org/2000/svg" height={28} width={28} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM184 328c-13.3 0-24 10.7-24 24s10.7 24 24 24H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H184z" />
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" name="rating" type="radio" id="rating4" />
                                        <label className="form-check-label" htmlFor="rating4">
                                            <span className="green">
                                                <svg xmlns="http://www.w3.org/2000/svg" height={28} width={28} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" name="rating" type="radio" id="rating5" />
                                        <label className="form-check-label" htmlFor="rating5">
                                            <span className="green">
                                                <svg xmlns="http://www.w3.org/2000/svg" height={28} width={28} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="feedbackTextarea">{"Do you have any thoughts you'd like to share?"}</label>
                                    <textarea id="feedbackTextarea" className="form-control" rows={5} defaultValue={""} />
                                </div>
                                <div className="follow-permission-wrap form-group mt-lg-5 mt-4">
                                    <label>May we follow up on your feedback?</label>
                                    <div className="d-flex align-items-center mt-3">
                                        <div className="form-check me-md-4 me-3">
                                            <input className="form-check-input" type="radio" name="follow" id="yesRadio" defaultValue="yes" />
                                            <label className="form-check-label" htmlFor="yesRadio">Yes</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="follow" id="noRadio" defaultValue="no" />
                                            <label className="form-check-label" htmlFor="noRadio">No</label>
                                        </div>
                                    </div>
                                </div>
                                {/* Button Group */}
                                <div className="mt-lg-5 mt-4">
                                    {/* Submit Button */}
                                    <button type="submit" className="btn btn-primary me-md-3">Send</button>
                                    {/* Cancel Btn-link */}
                                    <Link href="#" className="btn btn-primary cancel-btn">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                {/* /Feedback Wrapper */}
            </main>
            {/* /MAIN */}
        </>
    )
}

export default FeedbackForm
