import { useState } from "react"

const HomeScreening = () => {

    const [file1, setFile1] = useState<string[]>([])
    const [file2, setFile2] = useState<string[]>([])

    const onUpload1 = (e: any) => {
        setFile1([...file1, e.target.files[0].name])
    }
    const onUpload2 = (e: any) => {
        setFile2([...file2, e.target.files[0].name])
    }
        return (
            <>
                <div className="border-top my-3 pb-2"></div>
                <div>
                    <div className="row">
                        {/* Form Head */}
                        <div className="form-head mb-3">
                            <h3>House Address <span>(Optional)</span></h3>
                        </div>
                        {/* Address Field */}
                        <div className="col-md-12">
                            <div className="form-group mb-4">
                                <label className="form-label" htmlFor="house-address">Address</label>
                                <input type="text" className="form-control" id="house-address" placeholder="Type full address" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* City Field */}
                        <div className="col-md-6">
                            <div className="form-group mb-4">
                                <label className="form-label" htmlFor="city">City</label>
                                <input type="text" className="form-control" id="city" />
                            </div>
                        </div>
                        {/* landmark Field */}
                        <div className="col-md-6">
                            <div className="form-group mb-4">
                                <label className="form-label" htmlFor="landmark">Landmark</label>
                                <input type="text" className="form-control" id="landmark" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* State Field */}
                        <div className="col-md-6">
                            <div className="form-group mb-4">
                                <label className="form-label" htmlFor="state">State</label>
                                <select className="form-select" id="state">
                                    <option value={""}>&nbsp;</option>
                                    <option value={1}>Lagos</option>
                                    <option value={2}>Kano</option>
                                    <option value={3}>Kaduna</option>
                                    <option value={4}>Katsina</option>
                                    <option value={5}>Oyo</option>
                                    <option value={6}>Rivers</option>
                                    <option value={7}>Bauchi</option>
                                    <option value={8}>Jigawa</option>
                                    <option value={9}>Benue</option>
                                    <option value={10}>Anambra</option>
                                </select>
                            </div>
                        </div>
                        {/* LGA Field */}
                        <div className="col-md-6">
                            <div className="form-group mb-4">
                                <label className="form-label" htmlFor="LGA">LGA</label>
                                <select className="form-select" id="LGA">
                                    <option value={""}>&nbsp;</option>
                                    <option value="male">Alimosho LGA</option>
                                    <option value="female">Abuja Municipal LGA </option>
                                    <option value="male">Abuja Municipal LGA </option>
                                    <option value="female">Port Harcourt LGA </option>
                                    <option value="male">Surulere LGA</option>
                                    <option value="female">Asokoro LGA</option>
                                    <option value="male">Asokoro LGA</option>
                                    <option value="female">Kaduna North LGA</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* House-Front-Photo Field */}
                    <div className="col-md-6">
                        <div className="form-group mb-4">
                            <label className="form-label" htmlFor="photos">Front House Photo (optional)</label>
                            <div className="upload-file-box">
                                <p className="d-flex justify-content-center align-items-center">
                                    <svg className="me-3" xmlns="http://www.w3.org/2000/svg" height={29} width={24.5} viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z" />
                                    </svg>
                                    <span>Drag and drop or <a href="#" onClick={() => document.querySelector<any>(".file-1").click()} id="chooseFileLink">choose file</a> less than 10MB
                                    </span>
                                </p>
                                <input onChange={(e) => onUpload1(e)} type="file" className="file-1 form-control-file d-none" id="photos1" accept="image/*" multiple />
                            </div>
                                <div className="form-text pb-3 mt-2 d-flex align-items-center">
                                    <svg className="fa-solid fa-circle-info me-1 " xmlns="http://www.w3.org/2000/svg" height={14} width={14} viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                    </svg>
                                    Upload front house pictures
                                </div>
                            <ul className="mt-2">
                                {
                                    file1?.map((item, i) => (
                                        <li key={i} >{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* House-Back-Photo Field */}
                    <div className="col-md-6">
                        <div className="form-group mb-4">
                            <label className="form-label" htmlFor="photos">Back House Photo (optional)</label>
                            <div className="upload-file-box">
                                <p className="d-flex justify-content-center align-items-center">
                                    <svg className="me-3" xmlns="http://www.w3.org/2000/svg" height={29} width={24.5} viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z" />
                                    </svg>
                                    <span>Drag and drop or <a href="#" onClick={() => document.querySelector<any>(".file-2").click()} id="chooseFileLink">choose file</a> less than 10MB
                                    </span>
                                </p>
                                <input onChange={(e) => onUpload2(e)} type="file" className="file-2 form-control-file d-none" id="photos2" accept="image/*" multiple />
                            </div>
                                <div className="form-text pb-3 mt-2 d-flex align-items-center">
                                    <svg className="fa-solid fa-circle-info me-1 " xmlns="http://www.w3.org/2000/svg" height={14} width={14} viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                    </svg>
                                    Upload back house pictures
                                </div>
                            <ul className="mt-2">
                                {
                                    file2?.map((item, i) => (
                                        <li key={i} >{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    export default HomeScreening
