import React from "react";
import ScrollToTop from "react-scroll-to-top";
import logo from "../assets/img/Logo_clay.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="container-footer">
      <div className="container-logo footer">
        <div className="container-logo">
          <figure className="logo-container">
            <Link smooth="true" to={`/`}>
              <img className="logo" src={logo} alt="" srcset="" />
            </Link>
          </figure>
        </div>
      </div>
      <div className="container-link-footer">
        <div>
          <Link style={{ textDecoration: "none", color: "black", margin:"20px", display:"flex"}} smooth="true" to={`/`}>
            Home page
          </Link>
          {/*Link is use to connect the navigator to other pages */}

          <Link style={{ textDecoration: "none", color: "black", margin:"20px", display:"flex"}} smooth="true" to={`/OurHistory`}>
            Our History
          </Link>
          <Link style={{ textDecoration: "none", color: "black", margin:"20px", display:"flex"}} smooth="true" to={`/About`}>
            About
          </Link>
          <Link style={{ textDecoration: "none", color: "black", margin:"20px", display:"flex"}} smooth="true" to={`/Store`}>
            Shop
          </Link>
        </div>
      </div>

      <ScrollToTop smooth="true" />
    </div>
  );
};
export default Footer;
