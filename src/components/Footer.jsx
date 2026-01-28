import logolight from "../assets/shared/desktop/logo-light.png";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <>
        <footer className=" footer p-5 text-center text-md-start">
          <div className="card-body d-flex flex-column flex-md-row justify-content-around pt-5 gap-3">
            <img src={logolight} alt="" className="mx-auto m-md-0 " />{" "}
            <div className="d-flex gap-md-5 gap-3 flex-column flex-md-row ">
              {" "}
              <Link to="/about">OUR COMPANY</Link>
              <Link to="/locations">LOCATIONS</Link>
              <Link to="/contact">CONTACT</Link>
            </div>
          </div>
          <hr className="card-line mx-md-5" />
          <div className="card-footer d-flex flex-column flex-md-row justify-content-around px-5 gap-3">
            <div>
              <p className="fw-bold"> Designo Central Office</p>
              <p>3886 Wellington Street </p>
              <p> Toronto Ontario M9C 3J5</p>
            </div>
            <div>
              {" "}
              <p className="fw-bold"> Contact Us (Central Office) </p>
              <p>P : +1 253-863-8967</p>
              <p> M : contact@designo.co</p>
            </div>
            <div className="fs-5 icons d-flex gap-3 mx-auto m-md-0">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-pinterest"></i>
              <i className="bi bi-instagram"></i>
            </div>
          </div>
        </footer>
      </>
    </>
  );
};
