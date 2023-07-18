import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

const JoinEagleTeam = () => {
    const [counters,setCounters] = useState<any[]>([])
    async function fetchCountries() {
        const response = await fetch("https://restcountries.com/v2/all");
        const countries = await response.json();
        setCounters(countries)
    }
    useEffect(() => {
        fetchCountries()
    },[])

    return (
        <>
            {/* MAIN */}
            <main>
                {/* Join Team Wrapper */}
                <section className="join-team-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            {/* Page Left Column */}
                            <div className="col-lg-5">
                                {/* Join-Team Form Wrapper */}
                                <div className="join-form-wrapper">
                                    <Link href="select-screening">
                                        <Image width={140} height={47.77} src="/images/logo.png" className="img-fluid form-logo" alt="Logo" />
                                    </Link>
                                    <h1>Join Our Eagle Team</h1>
                                    {/* FORM  */}
                                    <form>
                                        <div className="row">
                                            {/* First-Name Field */}
                                            <div className="col-sm-6">
                                                <div className="form-group mb-4">
                                                    <label className="form-label" htmlFor="TeamFirstName">First Name</label>
                                                    <input type="text" className="form-control" id="TeamFirstName" />
                                                </div>
                                            </div>
                                            {/* Last-Name Field */}
                                            <div className="col-sm-6">
                                                <div className="form-group mb-4">
                                                    <label className="form-label" htmlFor="TeamLastName">Last Name</label>
                                                    <input type="text" className="form-control" id="TeamLastName" />
                                                </div>
                                            </div>
                                            {/* Email Field */}
                                            <div className="col-lg-12">
                                                <div className="form-group mb-4">
                                                    <label className="form-label" htmlFor="TeamEmail">Email</label>
                                                    <input type="text" className="form-control" id="TeamEmail" />
                                                </div>
                                            </div>
                                            {/* Are-You Baptized Field */}
                                            <div className="col-lg-12">
                                                <div className="form-group mb-4">
                                                    <label className="form-label">Are you Born Again and Baptized by the HOLY  GHOST?</label>
                                                    <div className="d-flex align-items-center">
                                                        {/* Radio Check */}
                                                        <div className="form-check me-3">
                                                            <input className="form-check-input" type="radio" name="Baptized" id="Baptizedyes" />
                                                            <label className="form-check-label" htmlFor="Baptizedyes">Yes</label>
                                                        </div>
                                                        {/* Radio Check */}
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="Baptized" id="BaptizedNo" />
                                                            <label className="form-check-label" htmlFor="BaptizedNo">No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Baptized-Year Field */}
                                            <div className="col-lg-12">
                                                <div className="form-group mb-4">
                                                    <label className="form-label" htmlFor="BaptizedYear">What year were you Baptized?</label>
                                                    <input type="date" className="form-control" id="BaptizedYear" />
                                                </div>
                                            </div>
                                            {/* Intercede-Desire Field */}
                                            <div className="col-lg-12">
                                                <div className="form-group mb-4">
                                                    <label className="form-label">Do have the Desire to intercede for people?</label>
                                                    <div className="d-sm-flex align-items-center">
                                                        {/* Radio Check */}
                                                        <div className="form-check me-xl-4 me-3 mb-sm-0 mb-3">
                                                            <input className="form-check-input" type="radio" name="Intercede" id="IntercedeYes" />
                                                            <label className="form-check-label" htmlFor="IntercedeYes">Yes, I do</label>
                                                        </div>
                                                        {/* Radio Check */}
                                                        <div className="form-check me-xl-4 me-3  mb-sm-0 mb-3">
                                                            <input className="form-check-input" type="radio" name="Intercede" id="IntercedeNo" />
                                                            <label className="form-check-label" htmlFor="IntercedeNo">{"No, I don't"}</label>
                                                        </div>
                                                        {/* Radio Check */}
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="Intercede" id="IntercedeSometimes" />
                                                            <label className="form-check-label" htmlFor="IntercedeSometimes">Sometimes</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Church-Denomination Field */}
                                            <div className="col-lg-12">
                                                <div className="form-group mb-4">
                                                    <label className="form-label" htmlFor="ChurchDenominationSelect">{"What's your church denomination"}</label>
                                                    <select id="ChurchDenominationSelect" className="form-select" name="ChurchDenomination">
                                                        <option value="" />
                                                        <option value={1}>Roman Catholic</option>
                                                        <option value={2}>Protestant</option>
                                                        <option value={3}>Anglicans</option>
                                                        <option value={4}>Baptists</option>
                                                        <option value={5}>Calvinists</option>
                                                        <option value={6}>Charismatics</option>
                                                        <option value={7}>Evangelicals</option>
                                                        <option value={8}>Methodists</option>
                                                        <option value={9}>Pentecostals</option>
                                                        <option value={10}>Presbyterianism</option>
                                                        <option value={11}>{"Jehovah's Witnesses"}</option>
                                                        <option value={12}>Mormons/Latter-Day Saints</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* Spiritual-Gifts Field */}
                                            <div className="col-lg-12">
                                                <div className="form-group mb-4">
                                                    <label className="form-label" htmlFor="SpiritualGiftsSelect">Spiritual Gifts</label>
                                                    <select id="SpiritualGiftsSelect" className="form-select" name="SpiritualGifts">
                                                        <option value="" />
                                                        <option value={1}>Word of Wisdom</option>
                                                        <option value={2}>Word of knowledge</option>
                                                        <option value={3}>Prophecy</option>
                                                        <option value={4}>Visions/revelations</option>
                                                        <option value={5}>Discernment of spirits</option>
                                                        <option value={6}>Gifts of healing</option>
                                                        <option value={7}>Prayer</option>
                                                        <option value={8}>Miracles</option>
                                                        <option value={9}>Counsel</option>
                                                        <option value={10}>Fortitude (Might)</option>
                                                        <option value={11}>Piety (Devotion - Delight in the Lord)</option>
                                                        <option value={12}>Fear of the Lord</option>
                                                        <option value={13}>Dreams and interpretation</option>
                                                        <option value={14}>Gifts of Speaking</option>
                                                        <option value={15}>Gifts of Serving</option>
                                                        <option value={16}>Giving</option>
                                                        <option value={17}>Mercy</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* Experience-Level Field */}
                                            <div className="col-lg-12">
                                                <div className="form-group mb-4">
                                                    <label className="form-label">Experience of Level</label>
                                                    <div className="d-xl-flex align-items-center">
                                                        {/* Radio Check */}
                                                        <div className="form-check me-4 mb-xl-0 mb-3">
                                                            <input className="form-check-input" type="radio" name="Experience" id="EntryLevel" />
                                                            <label className="form-check-label" htmlFor="EntryLevel">Entry</label>
                                                            <span data-toggle="tooltip" data-placement="top" title="You're relatively new to this field">
                                                                <svg className="text-muted mb-1 ms-1" xmlns="http://www.w3.org/2000/svg" height={16} width={16} viewBox="0 0 512 512">
                                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        {/* Radio Check */}
                                                        <div className="form-check me-4 mb-xl-0 mb-3">
                                                            <input className="form-check-input" type="radio" name="Experience" id="IntermediateLevel" />
                                                            <label className="form-check-label" htmlFor="IntermediateLevel">Intermediate</label>
                                                            <span data-toggle="tooltip" data-placement="top" title="You have a substantial experience in this field">
                                                                <svg className="text-muted mb-1 ms-1" xmlns="http://www.w3.org/2000/svg" height={16} width={16} viewBox="0 0 512 512">
                                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        {/* Radio Check */}
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="Experience" id="ExpertLevel" />
                                                            <label className="form-check-label" htmlFor="ExpertLevel">Expert</label>
                                                            <span data-toggle="tooltip" data-placement="top" title="You have comprehensive and deep expertise in this field">
                                                                <svg className="text-muted mb-1 ms-1" xmlns="http://www.w3.org/2000/svg" height={16} width={16} viewBox="0 0 512 512">
                                                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Location Field */}
                                            <div className="col-lg-12">
                                                <div className="form-group mb-4">
                                                    <label className="form-label" htmlFor="LocationSelectCountry">{"What's your location"}</label>
                                                    <select id="LocationSelectCountry" className="form-select">
                                                        <option value="" />
                                                        {
                                                            counters?.map((item, i) => (
                                                                <option value={i+1} >{item.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            {/* Interest Field */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label className="form-label">{"I'm interested in"}</label>
                                                    <div className="d-xxl-flex align-items-center">
                                                        {/* Radio Check */}
                                                        <div className="form-check me-xl-4 mb-xxl-0 mb-2">
                                                            <input className="form-check-input" type="radio" name="InterestedIn" id="FullTime" />
                                                            <label className="form-check-label" htmlFor="FullTime">Full-time intercessory role</label>
                                                        </div>
                                                        {/* Radio Check */}
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="InterestedIn" id="PartTime" />
                                                            <label className="form-check-label" htmlFor="PartTime">Part-time intercessory role</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Submit Button */}
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                    {/* /Form */}
                                </div>
                            </div>
                            {/* /Page Left Column */}
                            {/* Page Right Column */}
                            <div className="col-lg-7">
                                {/* Form Image */}
                                <div className="form-image d-flex align-items-end">
                                    {/* Image Content */}
                                    <div className="image-content">
                                        <h2>Our Mission is Simple</h2>
                                        <p className="pe-lg-2">
                                            {"We're a remote team of diverse believers, Holy Spirt Filled, passionate, committed ministers driven to edify the body of Christ, believers, and families through Gifts of the Spirit"}
                                        </p>
                                        <div className="row align-items-center">
                                            <div className="col-xxl-9 col-lg-12 col-md-8 d-xl-flex">
                                                {/* Text Box */}
                                                <div className="text-box d-flex align-items-center me-xl-3 me-0">
                                                    <div className="pe-3">
                                                        <Image width={30.41} height={34.59} src="/images/eagle-icon.png" className="img-fluid" alt="Eagle Icon" />
                                                    </div>
                                                    <div>
                                                        <p>
                                                            {"We're fully remote and 100% committed to rendering spiritual solutions through the help of the Holy Spirit"}
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* Text Box */}
                                                <div className="text-box d-flex align-items-center mt-xl-0 mt-3">
                                                    <div className="pe-3">
                                                        <Image width={30.48} height={38} src="/images/bible-icon.png" className="img-fluid" alt="Eagle Icon" />
                                                    </div>
                                                    <div>
                                                        <p>
                                                            {"We're not Pschyics, diviners, or sorceries. We believe in God, the Father Almighty, Creator of Heaven and Earth."}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* About-us Link */}
                                            <div className="col-xxl-3 text-xxl-end pt-xxl-0 pt-3">
                                                <Link href="about-us">Learn more about us
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#ffffff" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Page Right Column */}
                        </div>
                    </div>
                </section>
                {/* /Join Team Wrapper */}
            </main>
            {/* / MAIN */}
        </>
    )
}

export default JoinEagleTeam
