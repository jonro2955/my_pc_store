import { Link } from "react-router-dom";
import featureImg from "../images/lightning1.webp";

const HomePage: React.FC = () => {
  return (
    <div className="pt-5 container-lg mb-3">
      <div className="row g-4 justify-content-center align-items-center">
        <div className="col-md-5 text-center text-md-start">
          <div className="display-3 text-warning">Dominate your</div>
          <div className="display-3 text-warning">cyberspace</div>
          <div className="display-5 text-danger ">with the power of</div>
          <div className="display-3 text-info">Lightning</div>
          <div className="m-5 text-center">
            <Link className="btn btn-info btn-lg" to="/shop">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="col-md-5 text-center d-block position-relative">
          <Link className="noUnderline text-white position-relative" to="/lightning1">
            <img src={featureImg} className="img-fluid" alt="lightning1" />
            <div className="noUnderline text-info">Lightning 1 Gaming PC</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
