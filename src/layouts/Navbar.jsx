import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container_navbar">
      <button>
        Menu
        <input id="nav-burger" type="checkbox" name="nav-burger" />
        <label id="burger-label" htmlFor="nav-burger"></label>
      </button>

      <div className="information">
        {/*Link is use to connect the navigator to the page Reservation */}

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
    </div>
  );
};

export default Navbar;
