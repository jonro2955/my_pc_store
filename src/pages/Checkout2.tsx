import { Link } from "react-router-dom";
import amexIcon from "../images/icon-amex.svg";
import discoverIcon from "../images/icon-discover.svg";
import mcIcon from "../images/icon-mc.svg";
import visaIcon from "../images/icon-visa.svg";
import paypalIcon from "../images/icon-paypal.svg";
import btcIcon from "../images/icon-bitcoin.png";

const Checkout2: React.FC = () => {
  return (
    <div className="container rounded">
      <p className="display-6 text-white text-center">Checkout</p>
      <div className="row justify-content-center align-items-start bg-white rounded">
        <div className="col-8">
          {/* Form start*/}
          <form className="d-flex flex-column gap-3 p-3">
            <h3 className="text-center">Choose a payment method</h3>
            {/* payment type radio selectors */}
            <div className="d-flex flex-column ">
              {/* credit card */}
              <div className="row border-top p-1" role="button">
                <input
                  className="col-1"
                  type="radio"
                  id="card"
                  name="payment_type"
                  value="PayPal"
                  onChange={() => {}}
                  checked
                />
                <label className="col" htmlFor="card">
                  Credit Card
                </label>
                <label className="col d-flex" htmlFor="card">
                  <img className="" height="25" src={visaIcon} alt="visa icon" />
                  <img className="" height="25" src={mcIcon} alt="mastercard icon" />
                  <img className="" height="25" src={amexIcon} alt="amex icon" />
                  <img className="" height="25" src={discoverIcon} alt="discover icon" />
                </label>
              </div>
              {/* paypal */}
              <div className="row border-top p-1">
                <input
                  className="col-1"
                  type="radio"
                  id="paypal"
                  name="payment_type"
                  disabled
                />
                <label className="col" htmlFor="paypal">
                  PayPal
                </label>
                <label className="col d-flex" htmlFor="paypal">
                  <img className="" height="25" src={paypalIcon} alt="paypal icon" />
                </label>
              </div>
              {/* bitcoin */}
              <div className="row border-top border-bottom p-1">
                <input
                  className="col-1"
                  type="radio"
                  id="bitcoin"
                  name="payment_type"
                  disabled
                />
                <label className="col" htmlFor="bitcoin">
                  Bitcoin
                </label>
                <label className="col d-flex" htmlFor="bitcoin">
                  <img className="" height="25" src={btcIcon} alt="bitcoin icon" />
                </label>
              </div>
            </div>
            {/* Credit card form */}
            <div>
              <label htmlFor="cardName" title="Required">
                Name on card<span className="text-danger">*</span>
              </label>
              <input type="text" className="w-100" id="cardName" value="John Doe" readOnly />
            </div>
            <div>
              <label htmlFor="cardNumber" title="Required">
                Card Number<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="w-100"
                id="cardNumber"
                value="1234 5678 9012 3456"
                onChange={() => {}}
                readOnly
              />
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="expirationDate" title="Required">
                  Expiration date<span className="text-danger">*</span>
                </label>
                <div>
                  <select
                    value="Jul"
                    className=""
                    name="expMonth"
                    id="expirationDate"
                    onChange={() => {}}
                  >
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                  </select>
                  <select value="30" className="" id="expirationDate" onChange={() => {}}>
                    <option value="23">2023</option>
                    <option value="24">2024</option>
                    <option value="25">2025</option>
                    <option value="26">2026</option>
                    <option value="27">2027</option>
                    <option value="28">2028</option>
                    <option value="29">2029</option>
                    <option value="30">2030</option>
                    <option value="31">2031</option>
                    <option value="32">2032</option>
                    <option value="33">2033</option>
                    <option value="34">2034</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <label htmlFor="cvv" title="Required">
                  Security code<span className="text-danger">*</span>
                </label>
                <div>
                  <input type="text" size={3} id="cvv" value="123" onChange={() => {}} />
                </div>
              </div>
            </div>
            {/* billing address checkbox  */}
            <div className="row">
              <input className="col-1" type="checkbox" id="billing" defaultChecked />
              <label className="col" htmlFor="billing">
                My billing address is the same as my delivery address
              </label>
            </div>
            {/* Back and submit buttons */}
            <Link className="btn btn-warning" to="/Checkout3">
              Review your order before submitting
            </Link>
            <Link className=" text-center" to="/checkout1">
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout2;
