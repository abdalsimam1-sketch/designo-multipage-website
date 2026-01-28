import React from "react";
import logoDark from "../assets/shared/desktop/logo-dark.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav className="d-flex justify-content-around align-items-center pt-5 ">
        <Link to="/">
          {" "}
          <img
            src={logoDark}
            alt="logo-dark"
            style={{ maxWidth: "10rem", maxHeight: "1.3rem" }}
          />
        </Link>
        <div className="d-none  d-md-flex gap-lg-5 nav-links">
          {" "}
          <Link to="/about">OUR COMPANY</Link>
          <Link>LOCATIONS</Link>
          <Link>CONTACT</Link>
        </div>
        <i className="bi bi-list btn fs-2 d-lg-none"></i>
      </nav>
    </>
  );
};
