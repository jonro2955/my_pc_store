import { ProductType } from "../data/typeModels";
import { useEffect, useState } from "react";
import visaIcon from "../images/icon-visa.svg";

interface props {
  buyNow: any;
  cart: ProductType[];
  getCartTally: () => number;
  getCartTotal: () => number;
  removeFromCart: (index: number) => void;
  incrementCartItem: (index: number) => void;
  decrementCartItem: (index: number) => void;
}

const Checkout3: React.FC<props> = ({
  buyNow,
  cart,
  getCartTally,
  getCartTotal,
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
}) => {

  return (
    <div className="container rounded">
      <p className="display-6 text-white text-center">Checkout</p>
      <div className="row justify-content-center align-items-start bg-white rounded">
        <div className="col-lg-8 p-3 ">
          <h3 className="text-center mb-3">Please confirm and submit your order</h3>
          {/*  */}
          <div className="d-flex flex-column flex-lg-row gap-3 justify-content-between">
            <div className="d-flex flex-column ">
              <p className="fw-bold">Delivery Address</p>
              <div>John Doe</div>
              <div>123 Main Street</div>
              <div>New York</div>
              <div>NY, 12345</div>
              <div>United States</div>
            </div>
            <div className=" d-flex flex-column">
              <p className="fw-bold">Payment Method</p>
              <div className="gap-2">
                <div className="d-flex flex-column flex-lg-row align-items-start">
                  <img height="25" src={visaIcon} alt="visa icon" />
                  <div className="">
                    <div> Visa ...3456</div>
                    <div> exp: 07/2030</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" d-flex flex-column rounded py-2 px-5"
              style={{ boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.35)" }}
            >
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
                Total: <span>${getCartTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="text-center pt-3">
            <a className="btn btn-warning w-100">Submit your order</a>
          </div>

          {/*  */}
        </div>
        {/*  */}
        <h5 className="text-center mb-3">Order Details</h5>
        {cart.map((item, i) => (
          <div className="container w-75 mb-1 bg-primary rounded p-2" key={i}>
            <div className="row">
              {/* left col: item image */}
              <div className="col-sm-3 d-flex justify-content-center align-items-center ">
                <img src={item.image} className="img-fluid w-50" alt={item.name} />
              </div>
              <div className="col">
                {/* right col line 1: item name and price */}
                <div className="d-flex justify-content-between align-items-start text-center">
                  <h5>{item.name}</h5>
                  <div>Price: ${item.price.toFixed(2)}</div>
                </div>
                {/* right col line 2: quantity control buttons */}
                <div className="d-flex justify-content-between align-items-center text-center">
                  <a
                    className="text-white "
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
                      style={{ width: "2em" }}
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
        {/*  */}
      </div>
    </div>
  );
};

export default Checkout3;

/* 
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
*/
