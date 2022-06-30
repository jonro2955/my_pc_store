import { Link } from "react-router-dom";
import allProducts from "../data/products/all";
import categories from "../data/categories";

// import { useEffect } from "react";

export default function Shop() {
  // useEffect(() => {
  //   let nav = document.getElementById("nav") as HTMLTextAreaElement;
  //   return function cleanup() {
  //   };
  // });

  return (
    <div className="container-lg  mb-3">
      <div className="row justify-content-center align-items-start">
        <div className="col text-center">
          <p className="display-6 text-white">Shop</p>
          <p className="display-7 text-primary ">All Products</p>
          {categories &&
            categories.map((category, i) => (
              <p className="text-white" key={i}>
                {category.name}
              </p>
            ))}
        </div>
        <div className="col-12 col-md-10 d-flex flex-wrap justify-content-center ">
          {allProducts &&
            allProducts.map((product, i) => (
              <Link
                className="noUnderline text-light col-7 col-md-6 col-xl-4 text-center pb-5"
                to={`/product:${product.id}`}
                key={i}
              >
                <img src={product.image} className="img-fluid" alt="lightning 1" />
                <div className="display-6">{product.name}</div>
                <div className="fw-bold">{product.description}</div>
                <div className="">${product.price.toFixed(2)}</div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
