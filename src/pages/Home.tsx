import { Link } from "react-router-dom";
import featureImg from "../images/lightning1.webp";
// import { useEffect } from "react";
// import bg from "../images/bg.jpg";

export default function Home() {
  // // set bg image for body on mount and remove it on dismount
  // useEffect(() => {
  //   document.body.style.backgroundImage = `url('${bg}')`;
  //   return function cleanup() {
  //     document.body.style.backgroundImage = ``;
  //   };
  // });

  return (
    <div className="Page container-lg mb-3">
      <div className="row g-4 justify-content-center align-items-center">
        <div className="col-md-5 text-center text-md-start">
          <div className="display-3 text-white">Dominate your cyberspace</div>
          <p className="display-5 text-muted ">
            with the power of <span className="text-warning">lightning</span>
          </p>
          <Link className="btn btn-primary btn-lg" to="/shop">
            Shop Now
          </Link>
        </div>
        <div className="col-md-5 text-center d-block">
          <Link to="/products:lightning1">
            <img src={featureImg} className="img-fluid" alt="lightning1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
