import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import allProducts from "../data/products/allProducts";
import categories from "../data/categories";
import { ProductType } from "../data/typeModels";
import Stars from "../components/Stars";

interface props {
  currentCategory: string;
  setcurrentCategory: React.Dispatch<React.SetStateAction<string>>;
}

const ShopPage: React.FC<props> = ({ currentCategory, setcurrentCategory }) => {
  const [productList, setProductList] = useState<Array<ProductType>>(allProducts);

  // Manage category selection
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
        <div className=" col text-center">
          <p className="display-6 text-white">Shop</p>
          {/* category selectors */}
          {categories &&
            categories.map((category, i) => (
              <p
                className="categoryBtn btn hover-underline-animation text-white "
                key={i}
                id={category.id}
                onClick={() => {
                  setcurrentCategory(category.id);
                }}
              >
                {category.name}
              </p>
            ))}
        </div>
        <div className=" col-12 d-flex flex-wrap justify-content-center ">
          {/* product list */}
          {productList &&
            productList.map((product, i) => (
              <div
                className="zoom text-center d-flex flex-column justify-content-between col-9 col-sm-6 col-md-4 col-lg-3 pb-3 m-1 m-sm-2 m-md-3 m-lg-4"
                key={i}
              >
                <Link className="noUnderline text-white " to={`/${product.id}`}>
                  <img src={product.image} className="img-fluid" alt={product.name} />
                  <div className="fw-bold">{product.name}</div>
                  <Stars />
                  <div>${product.price.toFixed(2)}</div>
                  <small className="text-warning">Free Shipping</small>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
