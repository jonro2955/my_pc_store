import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link
        className="navbar-brand text-light d-block 
        d-sm-none container-sm text-center fw-bold m-auto py-3"
        to="/"
      >
        <i className="bi bi-lightning text-warning"></i>
        Lightning PC
      </Link>
      <nav id="nav" className="navbar navbar-expand navbar-dark p-0 py-sm-4">
        <div className="container-xxl">
          <Link className="navbar-brand fw-bold px-sm-3 mx-sm-3 d-none d-sm-block" to="/">
            <i className="bi bi-lightning text-warning"></i>
            Lightning PC
          </Link>
          <div className="m-1 p-1 container  row" id="main-nav">
            <ul className="navbar-nav justify-content-around justify-content-sm-end">
              <li className=" text-center col-6 col-sm-4 col-lg-3 nav-item">
                <Link className="nav-link px-sm-3 mx-sm-3 text-light fw-bold d-flex justify-content-center" to="/shop">
                  <span>Shop</span>
                </Link>
              </li>
              <li className=" text-center col-6 col-sm-4 col-lg-3 nav-item ">
                <Link className="nav-link px-sm-3 mx-sm-3 text-light fw-bold  d-flex justify-content-center" to="/">
                  <span>Cart</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
