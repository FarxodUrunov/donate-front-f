import HomeScreen from "@/components/home-screen";
import Image from "next/image"
import Link from "next/link"

interface ScreeningProps {
    title: string;
    description: string;
    progressTitle: string;
    progressDescription?: string;
    progressPhotosLabel: string;
    followingTitle?: string;
    followingText: string[];
    leftBg: string;
    formStr?: string;
    dropdownLabel?: string;
    dropdownOptional?: string[];
    homeScreen?: string;
}

const ScreeningGE = (props: ScreeningProps) => {


    const {
        title,
        description,
        progressTitle,
        progressDescription,
        progressPhotosLabel,
        followingText,
        leftBg,
        formStr,
        dropdownLabel,
        dropdownOptional,
        homeScreen,
        followingTitle,
    } = props

    return (
        <>
            <header className="light-header">
                <div className="container-fluid">

                    {/* <!-- LOGO --> */}
                    <Link href="select-screening" className="logo">
                        <Image width={200} height={68.23} src="/images/logo.png" alt="Mysight logo" />
                    </Link>

                </div>
            </header>
            <div>
                {/* MAIN */}
                <main>
                    {/* Screening Process Section */}
                    <section className="screening-process">
                        <div className="container-fluid">
                            <div className="row align-items-end">
                                {/* First Column */}
                                <div className="col-lg-6">
                                    {/* Screening Text Wrapper */}
                                    <div className="screening-text-wrap">
                                        {/* Background Image */}
                                        <div className={`screening-text-bg ${leftBg}`} />
                                        <h1>{title}</h1>
                                        <p>{description}</p>
                                    </div>
                                </div>
                                {/* Second Column */}
                                <div className="col-lg-6">
                                    <div className="screening-form-wrap">
                                        {/* Cancel-Form Button */}
                                        <Link href="select-screening" className="cancel-form">
                                            {/* <i className="fa fa-x" /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={24} viewBox="0 0 384 512">
                                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                            </svg>
                                        </Link>
                                        {/* Head */}
                                        <h2>Screening Process</h2>
                                        {/* Screening Form */}
                                        <form className="screening-form">
                                            {/* Form Head */}
                                            <div className="form-head">
                                                <h3>{progressTitle}</h3>
                                                <span className="sub-head">{progressDescription}</span>
                                            </div>
                                            <div className="row">
                                                {
                                                    homeScreen === "home" && 
                                                    <div className="form-text pb-3 mt-0 d-flex align-items-center">
                                                        <svg className="fa-solid fa-circle-info me-1 " xmlns="http://www.w3.org/2000/svg" height={14} width={14} viewBox="0 0 512 512">
                                                            <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                                        </svg>
                                                        Original Owner of the house
                                                    </div>
                                                }
                                                {/* First Name Field */}
                                                <div className="col-md-6">
                                                    <div className="form-group mb-4">
                                                        <label className="form-label" htmlFor="first-name">First Name</label>
                                                        <input type="text" className="form-control" id="first-name" />
                                                    </div>
                                                </div>
                                                {/* Last Name Field */}
                                                <div className="col-md-6">
                                                    <div className="form-group mb-4">
                                                        <label className="form-label" htmlFor="last-name">Last Name</label>
                                                        <input type="text" className="form-control" id="last-name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                {/* DOB Field */}
                                                <div className="col-md-6">
                                                    <div className="form-group mb-4">
                                                        <label className="form-label" htmlFor="date-of-birth">Date of Birth</label>
                                                        <input type="date" className="form-control" id="date-of-birth" />
                                                    </div>
                                                </div>
                                                {/* Relationship Field */}
                                                {
                                                    (formStr !== "god" && formStr !== "ministerial") &&
                                                    <div className="col-md-6">
                                                        <div className="form-group mb-4">
                                                            <label className="form-label" htmlFor="relationship">{dropdownLabel}</label>
                                                            <select className="form-select" id="relationship">
                                                                <option value={""}>&nbsp;</option>
                                                                {
                                                                    dropdownOptional?.map(item => {
                                                                        return (
                                                                            <option key={item} value={""}>{item}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                }
                                                {
                                                    formStr === "ministerial" && 
                                                    <div className="col-md-6">
                                                        <div className="form-group mb-4">
                                                            <label className="form-label" htmlFor="churchName">Church Name</label>
                                                            <input type="text" className="form-control" id="churchName" />
                                                        </div>
                                                    </div>
                                                }
                                                {/* Gender Field */}
                                                <div className="col-md-6">
                                                    <div className="form-group mb-4">
                                                        <label className="form-label" htmlFor="gender">Gender</label>
                                                        <select className="form-select" id="gender">
                                                            <option value={""}>&nbsp;</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                {/* State-Origin Field */}
                                                <div className={formStr !== "god" ? "col-md-6" : "col-md-12"}>
                                                    <div className="form-group mb-4">
                                                        <label className="form-label" htmlFor="state-origin">State of Origin and LGA</label>
                                                        <input type="text" className="form-control" id="state-origin" />
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                (formStr !== "ministerial" && formStr !== "request") && 
                                                <div className="row">
                                                    {/* Maternal-Origin Field */}
                                                    <div className="col-md-6">
                                                        <div className="form-group mb-4">
                                                            <label className="form-label" htmlFor="maternal-origin">Maternal State of Origin (optional)</label>
                                                            <input type="text" className="form-control" id="maternal-origin" />
                                                        </div>
                                                    </div>
                                                    {/* Paternal-Origin Field */}
                                                    <div className="col-md-6">
                                                        <div className="form-group mb-4">
                                                            <label className="form-label" htmlFor="paternal-origin">Paternal State of Origin (optional)</label>
                                                            <input type="text" className="form-control" id="paternal-origin" />
                                                        </div>
                                                    </div>
                                                </div>

                                            }

                                            {
                                                formStr !== "request" && (homeScreen === "home" ?
                                                    <HomeScreen />
                                                    :
                                                    <div className="form-group mb-4">
                                                        {/* Photo Upload Field */ }
                                                        <label className="form-label" htmlFor="photos">{progressPhotosLabel} (optional)</label>
                                                        {/* Upload File Box */}
                                                        <div className="upload-file-box" id="uploadBox">
                                                        {/* Box Text */}
                                                            <p className="d-flex justify-content-center align-items-center">
                                                                <svg className="me-3" xmlns="http://www.w3.org/2000/svg" height={29} width={24.5} viewBox="0 0 448 512">
                                                                    <path fill="currentColor" d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z" />
                                                                </svg>
                                                                <span>Drag and drop or <a href="#" id="chooseFileLink">choose file</a> less than 10MB</span>
                                                            </p>
                                                        {/* File Input */}
                                                            <input type="file" className="form-control-file d-none" id="photos" accept="image/*" multiple />
                                                        </div>
                                                        {/* Uploaded File List */}
                                                        <ul className="upload-file-list mt-3" id="fileList" />
                                                    </div>)
                                            }

                                    {/* Questioning Section */}
                                    <div className="question-section">
                                        {/* Head */}
                                        <h5>{followingTitle}</h5>
                                        {/* Question Container */}
                                        <div className="question-container ms-sm-4">
                                            {/* Existing Questions */}
                                            {
                                                followingText.map(item => {
                                                    return (
                                                        <p key={item} className="sample-question removable-question"><Image height={25} width={25} alt="minus" className="me-3 remove-question" src="/images/minus-img.png" />{item}</p>
                                                    )
                                                })
                                            }

                                            {/* Type Question Area */}
                                            <div className="input-group">
                                                <span className="input-group-text p-0 border-0 bg-white"><Image width={25} height={25} src="/images/minus-img.png" alt="Type Question" /></span>
                                                <textarea id="new-question" className="form-control ms-2" placeholder="Type your question here..." maxLength={100} defaultValue={""} />
                                            </div>
                                            {/* Add Question Button */}
                                            <button id="add-question-btn" type="button" className="add-question-btn"><Image width={25} height={25} className="me-3" src="/images/plus-img.png" alt="Add New Question" /> Add New Question</button>
                                        </div>
                                        {/* Question Limits  */}
                                        <div className="question-limit ms-sm-3 mt-3">
                                            <ul className="m-0">
                                                <li>The maximum word count is 100 words per inquiry</li>
                                                <li>Maximum of 7 questions</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Donate Button */}
                                    <button type="submit" className="btn btn-primary">Proceed to Donate</button>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </section >
            {/* /Screening Process Section */ }
                </main >
    {/* / MAIN */ }
{/*  Toaster Notification */ }
<div id="toaster-container" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
    {/* Upper Block */}
    <div className="toast-header justify-content-between">
        <strong className="mr-auto">Notification</strong>
        <button type="button" className="btn-close pe-3" data-bs-dismiss="toast" aria-label="Close" />
    </div>
    {/* Message */}
    <div className="toast-body d-flex align-items-center">
        <i className="fa-solid fa-circle-exclamation text-warning me-2" /> <span>You have reached the maximum number of questions.</span>
    </div>
</div>
            </div >
        </>
    )
}

export default ScreeningGE

ScreeningGE.defaultProps = {
    followingTitle: "I would like to know the following"
}
