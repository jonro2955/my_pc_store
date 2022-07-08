import CountrySelector from "../components/CountrySelector";
import StateSelector from "../components/StateSelector";

const Checkout1: React.FC = () => {
  return (
    <div className="container rounded">
      <p className="display-6 text-white text-center">Checkout</p>
      <div className="row justify-content-center align-items-start bg-white rounded">
        <div className="col-8  p-3">
          {/* Form */}
          <form className="d-flex flex-column gap-1" action="#" method="get ">
            {/* <h3 className="text-center">Customer Information (Sample)</h3> */}
            <div>
              <label htmlFor="name" title="Required">
                Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="w-100"
                id="name"
                value="John Doe"
                title="Required"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="email" title="Required">
                Email Address<span className="text-danger">*</span>
              </label>
              <input type="text" className="w-100" id="name" value="johndoe@email.com" readOnly />
            </div>
            <div className="fw-bold pt-2">Delivery Address:</div>
            <div>
              <label htmlFor="country" title="Required">
                Country<span className="text-danger">*</span>
              </label>
              <CountrySelector />
            </div>
            <div>
              <label htmlFor="address" title="Required">
                Street Address<span className="text-danger">*</span>
              </label>
              <input type="text" className="w-100" id="address" value="123 Main Street" readOnly />
            </div>
            <div>
              <label htmlFor="apt">Apt/Suite/Unit</label>
              <input type="number" className="w-100" id="apt" value="" readOnly />
            </div>
            <div>
              <label htmlFor="city" title="Required">
                City<span className="text-danger">*</span>
              </label>
              <input type="text" className="w-100" id="city" value="New York" readOnly />
            </div>
            <div>
              <label htmlFor="state" title="Required">
                State<span className="text-danger">*</span>
              </label>
              <StateSelector />
            </div>
            <div>
              <label htmlFor="zip" title="Required">
                Zip Code<span className="text-danger">*</span>
              </label>
              <input type="text" className="w-100" id="zip" value="12345" readOnly />
            </div>
            <a className="btn btn-warning m-1" href="/my_pc_store/#/checkout2">
              Continue to Fake Payment
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout1;
