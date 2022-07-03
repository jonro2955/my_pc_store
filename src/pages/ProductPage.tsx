import { useParams } from "react-router-dom";
import allProducts from "../data/products/allProducts";
import Stars from "../components/Stars";
import ImageViewer from "../components/ImageViewer";
import { ProductType } from "../data/typeModels";

interface props {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  showCart: () => void;
  closeCart: () => void;
}

const ProductPage: React.FC<props> = ({ cart, addToCart, showCart, closeCart }) => {
  let productId = useParams().productId;

  let product = allProducts.find((item) => {
    return item.id === productId;
  }) || {
    id: "blankProduct",
    name: "Product not found",
    description: "Product not found",
    category: "None",
    price: 0,
    quantity:0,
    image: "",
    gallery: [""],
  };

  return (
    <div className="pt-5 container-lg mb-3">
      <div className="row g-4 justify-content-center align-items-center">
        {/* left side images */}
        <ImageViewer gallery={product.gallery} />
        {/* right side info/buttons */}
        <div className="col-12 col-md-6 text-center text-white ">
          <div className="row ">
            {/* product name and stars*/}
            <div className="col-12 col-sm-8">
              <div className="display-3 ">{product.name}</div>
              <Stars />
            </div>
            {/* Add and Buy buttons*/}
            <div className="col-12 col-sm-4 d-flex  flex-column justify-content-center ">
              <button
                className="btn btn-success text-white hover-underline-animation m-1"
                id={product.id}
                onClick={() => {
                  addToCart(product);
                  showCart();
                }}
              >
                Add To Cart
              </button>
              <button
                className=" btn btn-primary text-white hover-underline-animation m-1"
                id={product.id}
                onClick={() => {
                  console.log("Buy", product.id);
                }}
              >
                Buy It Now
              </button>
              <h3 className="">${product.price.toFixed(2)}</h3>
              <div>Free Shipping</div>
            </div>
          </div>
          {/* product details */}
          <div className="row text-center mt-5">
            <h3 className="">Product Details:</h3>
            <div className="">{product.description}</div>
          </div>

          {/*  */}

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
