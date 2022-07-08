import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import featureImg from "../images/lightning1.webp";

const HomePage: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  // set isMounted to true when the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="pt-5 container-lg mb-3 rounded">
      <div className="row g-4 justify-content-center align-items-center">
        <div className="zoom col-md-5 text-center text-md-start">
          <div className={`display-3 text-warning homeText1 ${isMounted && "homeTextslide"}`}>
            Dominate your
          </div>
          <div className={`display-3 text-warning homeText1 ${isMounted && "homeTextslide"}`}>
            cyberspace
          </div>
          <div className={`display-5 text-danger homeText2 ${isMounted && "homeTextslide"}`}>
            with the power of
          </div>
          <div className={`display-3 text-info homeText3 ${isMounted && "homeTextslide"}`}>
            Lightning
          </div>
          <div className="m-5 text-md-end ">
            <Link
              className={`btn btn-info btn-lg w-75 homeText3 ${isMounted && "homeTextslide"}`}
              to="/shop"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div
          className={`col-md-6 text-center d-block position-relative homeImg ${
            isMounted && "homeImgSlide"
          }`}
        >
          <img src={featureImg} className={`img-fluid rounded`} alt="lightning1" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
