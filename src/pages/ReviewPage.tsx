import { ProductType } from "../data/typeModels";

interface props {
  cart: ProductType[];
  getCartTotal: () => number;
}

const ReviewPage: React.FC<props> = ({ cart, getCartTotal }) => {
  return (
    <div className="container rounded">
      <p className="display-6 text-white text-center">Checkout</p>
      <div className="row justify-content-center align-items-start bg-white rounded">
        <div className="col-8">
          {/* Form start*/}
          <form className="d-flex flex-column gap-3 p-3">
            <h3>Please confirm and submit your order</h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
