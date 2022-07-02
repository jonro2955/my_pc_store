import { useParams } from "react-router-dom";
import allProducts from "../data/products/allProducts";
import Stars from "../components/Stars";

const Product: React.FC = () => {
  // document.body.style.backgroundImage="url('')"
  let productId = useParams().productId;
  let product = allProducts.find((item) => {
    return item.id === productId;
  });

  return (
    <div className="pt-5 container-lg mb-3">
      {/*Grid */}
      <div className="row g-4 justify-content-center align-items-center">
        {/* left side images block */}
        <div className="col-12 col-md-6 text-center d-block position-relative">
          <img src={product!.image} className="img-fluid" alt="lightning1" />
        </div>
        {/* right side info/buttons grid */}
        <div className="col-12 col-md-6 text-center text-white ">
          <div className="row ">
            {/* name and stars block*/}
            <div className="col-12 col-sm-8">
              <div className="display-3 ">{product!.name}</div>
              <Stars />
            </div>
            {/* shopping buttons block*/}
            <div className="col-12 col-sm-4 d-flex flex-column justify-content-center ">
              <button
                className="btn btn-success hover-underline-animation m-1"
                id={product!.id}
                onClick={() => {
                  console.log("Add", product!.id);
                }}
              >
                Add To Cart
              </button>
              <button
                className=" btn btn-primary hover-underline-animation m-1"
                id={product!.id}
                onClick={() => {
                  console.log("Buy", product!.id);
                }}
              >
                Buy Now
              </button>
              <h3 className="">${product!.price.toFixed(2)}</h3>
              <div>Free Shipping</div>
            </div>
          </div>
          {/* details block*/}
          <div className="row text-center mt-5">
            <h3 className="">Product Details:</h3>
            <div className="">{product!.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
