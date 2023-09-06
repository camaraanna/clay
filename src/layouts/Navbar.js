import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo_clay.png";

export const Navbar = () => {
  return (
    <div className="container_navbar">
      <div className="container-logo">
        <div className="container-logo">
          <figure>
            <img className="logo" src={logo} alt="" srcset="" />
          </figure>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <h3 className="dropbtn-text">Menu</h3>
        </button>
        <div className="dropdown-content">
          {/*Link is use to connect the navigator to the page Reservation */}

          <Link className="information" smooth="true" to={`/OurHistory`}>
            Our History
          </Link>
          <Link className="information" smooth="true" to={`/About`}>
            About
          </Link>
          <Link className="information" smooth="true" to={`/Shop`}>
            Shop
          </Link>
        </div>
      </div>
      {/*------------------------------------BURGER NAVIGATOR---------------------------------------*/}

      <section className="container-navbar-burger">
        <input id="nav-burger" type="checkbox" name="nav-burger" />
        <label id="burger-label" htmlFor="nav-burger"></label>

        <div className="information">
          <Link className="navbar-title-burger" smooth="true" to={`/OurHistory`}>
            Our History
          </Link>
          <Link className="navbar-title-burger" smooth="true" to={`/About`}>
            About
          </Link>
          <Link className="navbar-title-burger" smooth="true" to={`/Shop`}>
            Shop
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
