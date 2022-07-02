import { Link } from "react-router-dom";
import { useEffect } from "react";

interface props {
  setcurrentCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<props> = ({ setcurrentCategory }) => {
  useEffect(() => {
    
  }, []);

  return (
    <div>
      <Link
        className="navbar-brand  d-block d-sm-none container-sm text-center fw-bold m-auto py-3"
        to="/"
      >
        <i className="bi bi-lightning text-warning"></i>
        Lightning PC
      </Link>
      <nav id="nav" className="navbar navbar-expand navbar-dark p-0 py-sm-4 ">
        <div className="container-xxl">
          <Link className="hover-underline-animation navbar-brand fw-bold px-sm-3 mx-sm-3 d-none d-sm-block" to="/">
            <i className="bi bi-lightning text-warning"></i>
            Lightning PC
          </Link>
          <div className="m-1 p-1 container  row" id="main-nav">
            <ul className="navbar-nav justify-content-around justify-content-sm-end">
              <li className=" text-center col-6 col-sm-4 col-lg-3 nav-item">
                <Link
                  className="nav-link px-sm-3 mx-sm-3  d-flex justify-content-center"
                  to="/shop"
                  onClick={() => {
                    setcurrentCategory("all");
                  }}
                >
                  <div className="px-2 hover-underline-animation text-light fw-bold">Shop</div>
                </Link>
              </li>
              <li className=" text-center col-6 col-sm-4 col-lg-3 nav-item ">
                <Link
                  className="nav-link px-sm-3 mx-sm-3 d-flex justify-content-center"
                  to="/"
                >
                <div className="px-2 hover-underline-animation text-light fw-bold">Cart</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
