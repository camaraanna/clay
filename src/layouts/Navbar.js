import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import logo from "../assets/img/Logo_clay.png";
import { CartContext } from "../CartContext";
import CartProduct from "../components/CartProduct";

export const Navbar = () => {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false); // We initially have the modal not showing at first //

  const handleClose = () => setShow(false); // If the close event happens or the hide event happens we hide the modal//

  const handleShow = () => setShow(true);

  // If we want to show the modal we set the show variable to true //
  // We are Looping through the cart items and get the total amounts of all the different products quantities from our cart   //
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0); // With an arrow function we define the sum in the product so "whenever we go trough an item of our list we are going to reduce and go to that product and we are going to add a count up sum that running every single time" //

  // We want the counter to start at 0 //

  //reduce is gonna give us access to all the different products.quantities, summing up all the different product.quantities and then this entire statement is going to return a number  and we can access that number through productsCount//

  return (
    <div className="container_navbar">
      <div className="container-logo">
        <div className="container-logo">
          <figure>
            <img className="logo" src={logo} alt="" srcset="" />
          </figure>
        </div>
      </div>
      <div>
        {/* Here we add a onClick to handle show to store the show variable  */}
        {/*  Our Navbar with productsCount is going to refresh and show the latest up-to-date product count value  */}
        <button onClick={handleShow}>Cart ({productsCount} Items)</button>
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
