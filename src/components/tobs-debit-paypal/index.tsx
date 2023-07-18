import Image from 'next/image';
import { Children } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

interface TabsDebitPaypalProps {
    cardVariant?: string;

}

const TabsDebitPaypal = ({ children }: any) => {
    return (
        <>
            <Tabs
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Debit Card">
                    {/* <!-- Debit-Payment Tab -->  */}
                    <div className="tab-pane show active">
                        {children}
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Paypal">
                    {/* <!-- Paypal Payment tab  --> */}
                    <div className="tab-pane">

                        <form id="PaypalPaymentForm" className="payment-form">

                            <div className="row">


                                {/* <!-- Country Select Field --> */}
                                <div className="col-md-8">

                                    <div className="form-group mb-4">

                                        <label htmlFor="PayPalSelectCountry">Country/Region</label>

                                        <select id="PayPalSelectCountry" required className="form-select"
                                            name="country">
                                            <option value="" disabled>----------</option>
                                            <option label="Select Country" disabled></option>
                                            <option value="AU">Australia</option>
                                            <option value="BR">Brazil</option>
                                            <option value="CA">Canada</option>
                                            <option value="CN">China</option>
                                            <option value="DE">Germany</option>
                                            <option value="HK">Hong Kong</option>
                                            <option value="IN">India</option>
                                            <option value="JP">Japan</option>
                                            <option value="NZ">New Zealand</option>
                                            <option value="SA">Saudi Arabia</option>
                                            <option value="SG">Singapore</option>
                                            <option value="ZA">South Africa</option>
                                            <option value="KR">South Korea</option>
                                            <option value="AE">United Arab Emirates</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="US">United States</option>
                                        </select>

                                    </div>

                                </div>


                                {/* <!-- Zip Code Field --> */}
                                <div className="col-md-4">

                                    <div className="form-group mb-4">

                                        <label htmlFor="zipcode">ZIP Code</label>

                                        <input type="text" className="form-control" id="zipcode" required />

                                    </div>

                                </div>


                            </div>

                            {/* <!-- Donate Button --> */}
                            <button type="submit" className="btn btn-primary w-100">
                                <Image width={100} height={25.78} src="/images/paypal-logo.png" alt="Paypal" /><span className="ms-2">Donate</span>
                            </button>

                            {/* <!-- Paypal Support Text --> */}
                            <div className="text-center pt-1"><small>The safer, easier way to pay</small></div>

                        </form>

                    </div>
                </Tab>
            </Tabs>
        </>
    )
}

export default TabsDebitPaypal
