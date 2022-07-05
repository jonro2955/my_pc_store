import { ProductType } from "../data/typeModels";
import CountrySelector from "../components/CountrySelector";
import StateSelector from "../components/StateSelector";

interface props {
  cart: ProductType[];
  getCartTotal: () => number;
}

const CheckoutPage: React.FC<props> = ({ cart, getCartTotal }) => {
  return (
    <div className="container-lg rounded">
      <p className="display-6 text-white text-center">Checkout</p>
      <div className="row justify-content-center align-items-start bg-white rounded">
        <div className="col-8">
          {/* Form */}
          <form className="d-flex flex-column gap-3" action="#" method="get ">
            <h3>{`(Sample Form)`}</h3>
            <div>
              <label htmlFor="name">
                Full Name<span className="text-danger">*</span>
              </label>
              <input type="text" className="w-100" id="name" value="John Doe" readOnly />
            </div>
            <div>
              <label htmlFor="email">
                Email Address<span className="text-danger">*</span>
              </label>
              <input type="text" className="w-100" id="name" value="johndoe@email.com" readOnly />
            </div>
            <div className="">Shipping Address</div>
            <div>
              <label htmlFor="country">
                Country<span className="text-danger">*</span>
              </label>
              <CountrySelector />
            </div>
            <div>
              <label htmlFor="address">
                Street Address<span className="text-danger">*</span>
              </label>
              <input type="text" className="w-100" id="address" value="123 Main Street" readOnly />
            </div>
            <div>
              <label htmlFor="apt">Apt/Suite/Unit</label>
              <input type="number" className="w-100" id="apt" value="10" readOnly />
            </div>
            <div>
              <label htmlFor="city">
                City<span className="text-danger">*</span>
              </label>
              <input type="text" className="w-100" id="city" value="New York" readOnly />
            </div>
            <div>
              <label htmlFor="state">
                State<span className="text-danger">*</span>
              </label>
              <StateSelector />
            </div>
            <div>
              <label htmlFor="zip">
                Zip Code<span className="text-danger">*</span>
              </label>
              <input type="text" className="w-100" id="zip" value="12345" readOnly />
            </div>
            <button
              className="btn btn-warning mb-5"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Continue to fake payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
