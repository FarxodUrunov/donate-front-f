import Image from "next/image"
import { useState } from "react"

interface PaymentDetailsProps{
    id: number;
    img: string;
    detailsOpen: string;
    deletePaymentCard: Function;
}

const PaymentDetails = (props: PaymentDetailsProps) => {
    
  return (
          <div className="payment-card mb-4">
              {/* Card Details */}
            <div className="card-details">
                <div className="d-flex justify-content-between align-items-center">
                    <Image width={48} height={48} src={props.img} className="img-fluid" alt="visa" />
                    <span className="card-ending">Card ending with 2717</span>
                    <button onClick={()=>props.deletePaymentCard(props.id)} type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" height={26} width={24} viewBox="0 0 384 512">
                            <path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Card Open */}
          <div className={`card-active-block ${props.detailsOpen}`}>
                <div className="row">
                    {/* Card Expiry Field */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="card-expiry">Card Expiry</label>
                            <input type="text" className="form-control card-expiry" id="card-expiry" placeholder="MM/YY" maxLength={5} />
                        </div>
                    </div>
                    {/* CVV Field */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" className="form-control cvv" id="cvv" placeholder={"123"} maxLength={3} />
                        </div>
                    </div>
                </div>
                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100 grey-btn" disabled>Submit</button>
            </div> 
          </div>
  )
}

export default PaymentDetails
