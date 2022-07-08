import { Link } from "react-router-dom";

const ThankPage: React.FC = () => {
  return (
    <div className="container rounded">
      <p className="display-6 text-white text-center">Thank you</p>
      <div className="row justify-content-center align-items-start bg-white rounded pb-3">
        <div className="col-lg-8 p-3 text-center">
          <h3 className="">Thank you for your order.</h3>
          <div className="">
            Your order will be shipped shortly. We will send you an email notification when your
            order ships. 
          </div>
          <div>Have a nice day.</div>
          <div className="mt-3">
            <Link className="btn btn-success" to="/shop">Continue shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThankPage;
