import { Link } from "react-router-dom";

interface props {
  setcurrentCategory: React.Dispatch<React.SetStateAction<string>>;
  showCart: () => void;
  getCartTally: () => number;
}

const Navbar: React.FC<props> = ({ setcurrentCategory, showCart, getCartTally }) => {
  return (
    <div>
      <Link
        className="navbar-brand text-white d-block d-sm-none container-sm text-center fw-bold m-auto py-3"
        to="/"
      >
        <i className="bi bi-lightning text-warning"></i>
        Lightning PC
      </Link>
      <nav id="nav" className="navbar navbar-expand navbar-dark p-0 py-sm-4 ">
        <div className="container-xxl">
          <Link
            className="hover-underline-animation navbar-brand text-white fw-bold px-sm-3 mx-sm-3 d-none d-sm-block"
            to="/"
          >
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
                <a
                  className="nav-link px-sm-3 mx-sm-3 d-flex justify-content-center"
                  role="button"
                  onClick={showCart}
                >
                  <div className="px-2 hover-underline-animation text-light fw-bold">{`Cart (${getCartTally()})`}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
