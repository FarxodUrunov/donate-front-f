
import Image from "next/image"

const InvoiceActive = () => {
    return (
        <>
            {/* Main Content */}
            <main className="layout-main invoice-active">
                <div className="invoice-box">
                    <h1>Invoice</h1>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Invoice no</th>
                                    <th>Member Name</th>
                                    <th>Amount</th>
                                    <th>Paid On</th>
                                    <th>&nbsp;</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#INV-0019</td>
                                    <td>
                                        <div className="invoice-member-info">
                                            <Image width={38} height={38} src="/images/user-man.png" className="img-fluid user-pic" alt="Avatar" />
                                            <div>
                                                <h5>Lincon Workman</h5>
                                                <p>#PT0016</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>₦150</td>
                                    <td>11 Nov 2023</td>
                                    <td><span className="badge success">Successful</span></td>
                                    <td>
                                        <a className="download-btn" href="#" download="invoice-pdf">
                                            <span className="d-flex justify-content-center align-items-center">
                                                PDF
                                                <svg xmlns="http://www.w3.org/2000/svg" height={14} width={14} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                                                </svg>
                                            </span>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#INV-0019</td>
                                    <td>
                                        <div className="invoice-member-info">
                                            <Image width={38} height={38} src="/images/user-woman.png" className="img-fluid user-pic" alt="Avatar" />
                                            <div>
                                                <h5>Lauretta Williams</h5>
                                                <p>#PT0016</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>₦150</td>
                                    <td>11 Nov 2023</td>
                                    <td><span className="badge decline">Decline</span></td>
                                    <td>
                                        <a className="download-btn" href="#" download="invoice-pdf">
                                            <span className="d-flex justify-content-center align-items-center">
                                                PDF
                                                <svg xmlns="http://www.w3.org/2000/svg" height={14} width={14} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                                                </svg>
                                            </span>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#INV-0019</td>
                                    <td>
                                        <div className="invoice-member-info">
                                            <Image width={38} height={38} src="/images/user-man.png" className="img-fluid user-pic" alt="Avatar" />
                                            <div>
                                                <h5>Lincon Workman</h5>
                                                <p>#PT0016</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>₦150</td>
                                    <td>11 Nov 2023</td>
                                    <td><span className="badge success">Successful</span></td>
                                    <td>
                                        <a className="download-btn" href="#" download="invoice-pdf">
                                            <span className="d-flex justify-content-center align-items-center">
                                                PDF
                                                <svg xmlns="http://www.w3.org/2000/svg" height={14} width={14} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                                                </svg>
                                            </span>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#INV-0019</td>
                                    <td>
                                        <div className="invoice-member-info">
                                            <Image width={38} height={38} src="/images/user-woman.png" className="img-fluid user-pic" alt="Avatar" />
                                            <div>
                                                <h5>Lauretta Williams</h5>
                                                <p>#PT0016</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>₦150</td>
                                    <td>11 Nov 2023</td>
                                    <td><span className="badge decline">Decline</span></td>
                                    <td>
                                        <a className="download-btn" href="#" download="invoice-pdf">
                                            <span className="d-flex justify-content-center align-items-center">
                                                PDF
                                                <svg xmlns="http://www.w3.org/2000/svg" height={14} width={14} viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                                                </svg>
                                            </span>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    )
}

export default InvoiceActive
