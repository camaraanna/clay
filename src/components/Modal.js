import { useState, useContext } from "react";
//useState all us to have local variables //
import { CartContext } from "../CartContext";
import CartProduct from "../components/CartProduct";

function Modal({ setOpenModal }) {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false); // We initially have the modal not showing at first //

  const handleClose = () => setShow(false); // If the close event happens or the hide event happens we hide the modal//

  const handleShow = () => setShow(true);
  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };
  // If we want to show the modal we set the show variable to true //
  // We are Looping through the cart items and get the total amounts of all the different products quantities from our cart   //
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0); // With an arrow function we define the sum in the product so "whenever we go trough an item of our list we are going to reduce and go to that product and we are going to add a count up sum that running every single time" //

  // We want the counter to start at 0 //

  //reduce is gonna give us access to all the different products.quantities, summing up all the different product.quantities and then this entire statement is going to return a number  and we can access that number through productsCount//
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div>
            <div className="justify-content-end">
              {/* Here we add a onClick to handle show to store the show variable  */}
              {/*  Our Navbar with productsCount is going to refresh and show the latest up-to-date product count value  */}
              <button className="Purchase">Cart ({productsCount} Items)</button>
            </div>
          </div>
          {/* We hide property so whenever the hide event happens we can go all a certain function I'm going to make a function in a second called handle close and when we click on the cart cart button we actually want it to show   */}

          <div>
            <div> Shopping Cart </div>
          </div>
          <div>
            {/* If productsCount is greater than 0 we show what it's in it  */}
            {productsCount > 0 ? (
              <>
                {/*Items data  */}
                {/*We are listing the items below */}
                <p> Items in your cart:</p>
                {cart.items.map((currentProduct, index) => (
                  <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                ))}
                {/* We only add two values after the decimal because JS haw a problem with long and repetitive numbers*/}
                {/* All off the information will be send to stripe*/}
                <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                <button className="Purchase" onClick={checkout}>
                  Purchase items!
                </button>
              </>
            ) : (
              <h1>There are no items in your cart! </h1>
            )}
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="removeOneFromCart"
            >
              Cancel
            </button>
            <button className="addOneToCart">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
