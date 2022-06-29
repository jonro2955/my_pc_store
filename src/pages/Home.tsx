import { Link } from "react-router-dom";
import l1 from "../images/l1.webp";
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
    <div id="Home" className="container-lg mb-3">
      <div className="row g-4 justify-content-center align-items-center">
        <div className="col-md-5 text-center text-md-start">
          <div className="display-3 text-white">Dominate the Cyberspace</div>
          <p className="display-5 text-muted ">Get the power of lightning.</p>
          <Link className="btn btn-info btn-lg" to="/shop">
            Shop Now
          </Link>
          <img src={l1} className="img-fluid d-md-none" alt="lightning1" />
        </div>
        <div className="col-md-5 text-center d-none d-md-block">
          <img src={l1} className="img-fluid" alt="lightning1" />
        </div>
      </div>
    </div>
  );
}
