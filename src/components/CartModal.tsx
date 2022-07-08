import { ProductType } from "../data/typeModels";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Offcanvas } from "react-bootstrap";

interface props {
  cart: ProductType[];
  cartOn: Boolean;
  closeCart: () => void;
  removeFromCart: (index: number) => void;
  incrementCartItem: (index: number) => void;
  decrementCartItem: (index: number) => void;
  getCartTotal: () => number;
}

const cartTotal = (cartProp: ProductType[]): number => {
  let total = 0;
  if (cartProp.length > 0) {
    cartProp.forEach((it) => {
      total += it.price * it.quantity;
    });
  }
  return total;
};

const CartModal: React.FC<props> = ({
  cart,
  cartOn,
  closeCart,
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
  getCartTotal,
}) => {
  return (
    <Container className="p-4 ">
      <Offcanvas placement="end" show={cartOn} onHide={closeCart} scroll={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="text-center ">
            {/* Cart items output map: */}
            {cart.map((item, i) => (
              <div className="container mb-1 bg-primary rounded p-2" key={i}>
                <div className="row">
                  {/* left col: item image */}
                  <div className="col-12 col-sm-3 d-flex justify-content-center align-items-center">
                    <img src={item.image} className="img-fluid" alt={item.name} />
                  </div>
                  <div className="col">
                    {/* right col line 1: item name and price */}
                    <div className="d-flex justify-content-between align-items-start text-center  text-black">
                      <h5>{item.name}</h5>
                      <div>Price: ${item.price.toFixed(2)}</div>
                    </div>
                    {/* right col line 2: quantity control buttons */}
                    <div className="d-flex justify-content-between align-items-center text-center">
                      <div
                        className="text-white btn btn-link"
                        onClick={() => {
                          removeFromCart(i);
                        }}
                      >
                        <small>Remove</small>
                      </div>
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
            {/* End of cart list map: */}
            {cartTotal(cart) > 0 ? (
              <>
                {/* Subtotal */}
                <h4 className="p-2">{`Subtotal: $${getCartTotal().toFixed(2)}`}</h4>
                {/* Checkout button */}
                <a
                  className="btn btn-warning w-100"
                  href="/my_pc_store/#/checkout1"
                  onClick={closeCart}
                >
                  Checkout
                </a>
              </>
            ) : (
              "Your cart is empty."
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default CartModal;
