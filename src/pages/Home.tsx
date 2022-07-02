import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import featureImg from "../images/lightning1.webp";
import bgImg from "../../images/bg.jpg";

const Home: React.FC = () => {
  useEffect(() => {
    // document.body.style.backgroundImage = bgImg;

  }, []);

  return (
    <div className="pt-5 container-lg mb-3">
      <div className="row g-4 justify-content-center align-items-center">
        <div className="col-md-5 text-center text-md-start">
          <div className="display-3 text-white">Dominate your cyberspace</div>
          <p className="display-5 text-muted ">
            with the power of <span className="text-warning">lightning</span>
          </p>
          <div className="m-5 text-center">
            <Link className="btn btn-primary btn-lg" to="/shop">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="col-md-5 text-center d-block position-relative">
          <Link to="/shop">
            <img src={featureImg} className="img-fluid" alt="lightning1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
