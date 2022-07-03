import { ProductType } from "../data/typeModels";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Offcanvas } from "react-bootstrap";
import { useEffect, useState } from "react";

interface props {
  cart: ProductType[];
  cartOn: Boolean;
  showCart: () => void;
  closeCart: () => void;
  removeFromCart: (index: number) => void;
}

const CartModal: React.FC<props> = ({ cart, cartOn, showCart, closeCart, removeFromCart }) => {
  // For updating the modal only because the prop cart changes are not get transmitted
  const [modalCart, setModalCart] = useState(cart);

  const removeFromModal = (index: number) => {
    let tempCart = modalCart;
    tempCart.splice(index, 1);
    setModalCart(tempCart);
  };

  return (
    <Container className="p-4">
      <Offcanvas placement="end" show={cartOn} onHide={closeCart} scroll={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            {
              modalCart.map((item, i) => (
                <div key={i}>
                  <span>{item.name}</span>
                  <span>: ${item.price}</span>
                  <div>Quantity: {item.quantity}</div>
                  <span>
                    <button
                      onClick={() => {
                        removeFromCart(i);
                        removeFromModal(i);
                      }}
                    >
                      Remove
                    </button>
                  </span>
                </div>
              ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default CartModal;
