import { ProductType } from "../data/typeModels";
import visaIcon from "../images/icon-visa.svg";
import { Link } from "react-router-dom";

interface props {
  cart: ProductType[];
  getCartTally: () => number;
  getCartTotal: () => number;
  removeFromCart: (index: number) => void;
  incrementCartItem: (index: number) => void;
  decrementCartItem: (index: number) => void;
  clearCart: () => void;
}

const Checkout3: React.FC<props> = ({
  cart,
  getCartTally,
  getCartTotal,
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
  clearCart,
}) => {
  return (
    <div className="container rounded">
      <p className="display-6 text-white text-center">Checkout</p>
      <div className="row justify-content-center align-items-start bg-white rounded pb-3">
        <div className="col-lg-8 p-3 ">
          <h3 className="text-center mb-3">Please confirm and submit your order</h3>
          {/* flexbox: row when screen is larger than lg, column otherwise*/}
          <div className="d-flex flex-column flex-lg-row gap-3 justify-content-between">
            {/* delivery address */}
            <div className="d-flex flex-column ">
              <p className="fw-bold">Delivery Address</p>
              <div>John Doe</div>
              <div>123 Main Street</div>
              <div>New York</div>
              <div>NY, 12345</div>
              <div>United States</div>
            </div>
            {/* payment method */}
            <div className="d-flex flex-column">
              <p className="fw-bold">Payment Method</p>
              <div className="gap-2">
                <div className="d-flex flex-column align-items-start">
                  <img height="25" src={visaIcon} alt="visa icon" />
                  <div className="">
                    <div> Visa ...3456</div>
                    <div> exp: 07/2030</div>
                  </div>
                </div>
              </div>
            </div>
            {/* order summary */}
            <div className="myBoxShadow d-flex flex-column rounded py-2 px-5">
              <p className="fw-bold">Order Summary</p>
              <div className="d-flex justify-content-between gap-3">
                Sub total: <span>${getCartTotal().toFixed(2)}</span>{" "}
              </div>
              <div className="d-flex justify-content-between gap-3">
                Shipping: <span>0</span>
              </div>
              <div className="d-flex justify-content-between gap-3">
                Tax: <span>0</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold gap-3">
                <span>{`Total (${getCartTally()} items):`}</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="text-center pt-3">
                {getCartTotal() ? (
                  <Link
                    to="/thankyou"
                    className="btn btn-warning w-100 myBoxShadow"
                    onClick={clearCart}
                  >
                    Submit your order
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        {/* order details */}
        <h5 className="text-center mb-3">Order Details</h5>
        {cart.map((item, i) => (
          <div className="container w-75 mb-3 rounded p-2 myBoxShadow" key={i}>
            <div className="row">
              {/* left col: item image */}
              <a
                href={`/my_pc_store/#/${item.id}`}
                className="col-sm-3 d-flex justify-content-center align-items-center "
              >
                <img src={item.image} className="img-fluid w-50" alt={item.name} />
              </a>
              <div className="col">
                {/* right col line 1: item name and price */}
                <div className="d-flex justify-content-between align-items-start text-center">
                  <h5>{item.name}</h5>
                  <div>Price: ${item.price.toFixed(2)}</div>
                </div>
                {/* right col line 2: quantity control buttons */}
                <div className="d-flex justify-content-between align-items-center text-center">
                  <a
                    className=""
                    role="button"
                    onClick={() => {
                      removeFromCart(i);
                    }}
                  >
                    <small>Remove</small>
                  </a>
                  <div className="d-flex text-center">
                    <button
                      className="btn btn-sm btn-info"
                      onClick={() => {
                        decrementCartItem(i);
                      }}
                    >
                      <i className="bi bi-dash"></i>
                    </button>
                    <input
                      className="text-center"
                      type="number"
                      value={item.quantity || 1}
                      style={{ width: "3em" }}
                      readOnly
                    />
                    <button
                      className="btn btn-sm btn-info"
                      onClick={() => {
                        incrementCartItem(i);
                      }}
                    >
                      <i className="bi bi-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {getCartTotal() ? (
          <Link to="/thankyou" className="btn btn-warning w-75 m-3 myBoxShadow" onClick={clearCart}>
            Submit your order
          </Link>
        ) : (
          ""
        )}
        <div className="text-center"></div>
      </div>
    </div>
  );
};

export default Checkout3;
