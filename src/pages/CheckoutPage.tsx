import { ProductType } from "../data/typeModels";

interface props {
  cart: ProductType[];
  getCartTotal: () => number;
}

const CheckoutPage: React.FC<props> = ({ cart, getCartTotal }) => {
  return (
    <div className="container-lg">
      <div className="row justify-content-center align-items-start">
        <div className=" col text-center">
          <p className="display-6 text-white">Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
