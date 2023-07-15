import Image from "next/image"

const InvoiceBlank = () => {
    return (
        <>
            {/* Main Content */}
            <main className="layout-main invoice-blank">
                <div className="invoice-box d-flex align-items-center">
                    <div className="row w-100">
                        <div className="col-xl-7">
                            <div className="text-container">
                                <h1>Invoice</h1>
                                <p>No available upcoming Member’s Invoice right now</p>
                                <p>New Member’s Invoice will appear here automatically without page reload</p>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="img-container">
                                <Image width={334} height={320} src="/images/invoice-blank-img.png" alt="Invoice Blank" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default InvoiceBlank
