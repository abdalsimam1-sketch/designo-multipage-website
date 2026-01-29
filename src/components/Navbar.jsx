import React, { useState } from "react";
import logoDark from "../assets/shared/desktop/logo-dark.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
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
          <Link to="/locations">LOCATIONS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        <i className="bi bi-list btn fs-2 d-md-none" onClick={toggleMenu}></i>
      </nav>
      {isOpen && (
        <div className="d-flex flex-column  gap-3 align-items-center bg-dark mx-auto menu p-5 d-md-none">
          {" "}
          <Link to="/about">OUR COMPANY</Link>
          <Link to="/locations">LOCATIONS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      )}
    </main>
  );
};
