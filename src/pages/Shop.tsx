import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import allProducts from "../data/products/allProducts";
import categories from "../data/categories";
import { Product } from "../data/typeModels";

const Shop: React.FC = () => {
  const [currentCategory, setcurrentCategory] = useState<string>("all");
  const [productList, setProductList] = useState<Array<Product>>(allProducts);

  useEffect(() => {
    let categoryBtnList = document.querySelectorAll(".categoryBtn");
    categoryBtnList.forEach((btn) => {
      if (btn.getAttribute("id") === currentCategory) {
        btn.classList.add( "btn", "btn-primary");
      } else {
        btn.classList.remove( "btn", "btn-primary");
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
    <div className="container-lg  mt-md-5">
      <div className="row justify-content-center align-items-start">
        {/* category selector column */}
        <div className="col text-center">
          <p className="display-6 text-white">Shop/</p>
          {categories &&
            categories.map((category, i) => (
              <p
                className="categoryBtn text-white "
                key={i}
                id={category.id}
                role="button"
                onClick={() => {
                  setcurrentCategory(category.id);
                }}
              >
                {category.name}
              </p>
            ))}
        </div>
        {/* product list column */}
        <div className="col-12 col-md-10 d-flex flex-wrap justify-content-center ">
          {productList &&
            productList.map((product, i) => (
              <Link
                className="noUnderline shopDisplayImage text-light col-7 col-md-6 col-xl-4 text-center pb-5"
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
};

export default Shop;
