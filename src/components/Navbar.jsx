import React from "react";
import logoDark from "../assets/shared/desktop/logo-dark.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav>
        <img src={logoDark} alt="logo-dark" />
        <div>
          {" "}
          <Link>OUR COMPANY</Link>
          <Link>LOCATIONS</Link>
          <Link>CONTACT</Link>
        </div>
      </nav>
    </>
  );
};
