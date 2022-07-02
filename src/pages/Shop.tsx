import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import allProducts from "../data/products/allProducts";
import categories from "../data/categories";
import { Product } from "../data/typeModels";
import Stars from "../components/Stars"

interface props {
  currentCategory: string;
  setcurrentCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Shop: React.FC<props> = ({ currentCategory, setcurrentCategory }) => {
  const [productList, setProductList] = useState<Array<Product>>(allProducts);

  useEffect(() => {
    let categoryBtnList = document.querySelectorAll(".categoryBtn");
    categoryBtnList.forEach((btn) => {
      if (btn.getAttribute("id") === currentCategory) {
        btn.classList.add("btn-primary");
      } else {
        btn.classList.remove("btn-primary");
      }
    });
    if (currentCategory === "all") {
      setProductList(allProducts);
    } else {
      setProductList(
        allProducts.filter((item) => {
          return item.category === currentCategory;
        })
      );
    }
  }, [currentCategory]);

  return (
    <div className="container-lg">
      <div className="row justify-content-center align-items-start">
        {/* category selector */}
        <div className=" col text-center">
          <p className="display-6 text-white">Shop/</p>
          {categories &&
            categories.map((category, i) => (
              <p
                className="categoryBtn btn hover-underline-animation text-white "
                key={i}
                id={category.id}
                // role="button"
                onClick={() => {
                  setcurrentCategory(category.id);
                }}
              >
                {category.name}
              </p>
            ))}
        </div>
        {/* product list */}
        <div className=" col-12 d-flex flex-wrap justify-content-center ">
          {productList &&
            productList.map((product, i) => (
              <div
                className="zoom text-center d-flex flex-column justify-content-between col-9 col-sm-6 col-md-4 col-lg-3 pb-3 m-1 m-sm-2 m-md-3 m-lg-4"
                key={i}
              >
                <Link className="noUnderLine text-white " to={`/${product.id}`}>
                  <img src={product.image} className="img-fluid" alt={product.name} />
                  <div className="fw-bold">{product.name}</div>
                  <Stars/>
                  <div className="m-2">
                    <small>${product.price.toFixed(2)}</small>
                  </div>
                  <div>Free Shipping</div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
