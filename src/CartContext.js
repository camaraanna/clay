import { createContext, useState } from "react";
import { productsArray } from "./data/productsStore";
import { getProductData } from "./data/productsStore";

// createContext allow us to store the cart data ( example: Id and quantities of what item we have in our cart ) it also allows us to store function that we can call anywhere in our entire application//

//Context ( cart, addToCart, removeCart)//
// Provider -> gives your React app access to all the things in your context //
//To initialize that context by creating an object in this create context //

//We don't define the function right inside of the context all all the context is saying is that we can define a function to get our  product quantity//

//We create a function getProductQuantity were we can pass to our provider //

// To give the application access to this context we add export  //
export const CartContext = createContext({
  //The functions in the createContext are  just saying " we have room for a function to exist here "//
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  //We are defining items so we  to create a specific state to our provider  //
  const [cartProducts, setCartProducts] = useState([]);

  // { id: 1, quantity: 2}
  //.find gives us access to the current element that we are looping over//
  // here we can see if the product.id is equal to the ID that we passed into this function it will find an actual object of data //

  function getProductQuantity(id) {
    const quantity = cartProducts.find((product) => product.id === id)?.quantity; // with .quantity means : " is we find the product with q certain Id we want to get its quantity " we add '? ' right before the dot it's mean "if this dot find and undefined object ( the is no product) then return 0"
    if (quantity === undefined) {
      return 0;
    }
    return quantity; //If we have a quantity return the quantity//
  }

  //This function allow us to add to the cart the Id we selected //

  function addOneToCart(id) {
    //Initially we are going to ask for the quantity of certain product //
    //We need to see if the's zero elements or if there's one element //
    //The logic here is " product it's not in the cart and the else statement is product is in cart in cart"//

    const quantity = getProductQuantity(id);

    //If the quantity is equal to  0 we know we have no object in the cart //
    if (quantity === 0) {
      setCartProducts(
        // product is not in cart
        // We setCartProducts equal to an array of elements and we can use the spread operator //
        // The logic is " take all of the objects that are already in our cart and put them to the front of this array then on top of all the object that ar already in our cart we want to add another one which is going to have an Id of the Id we passed in here because that's the item we are adding to the cart and it's going to have an initial quantity of one. "
        [
          ...cartProducts,
          {
            id: id,
            quantity: 1,
          },
        ]
      );
    } else {
      // product is in cart

      // If the product is in the cart we are then going to uses setCartProducts again inside

      // We are going to go trough every single object inside of cartProducts//

      setCartProducts(
        cartProducts.map((product) =>
          //We are taking the product we are currently mapping over and if the product.id is equal to the Id we are passing in we can then use a ternary operator method//
          // we are using the ternary operator and "?" which means " if the product we are currently on is of a certain Id then we want to change that object and add a different property to it  "
          product.id === id
            ? { ...product, quantity: product.quantity + 1 } // Means "all the different properties of product put them in here" // The spread operator method gives us the Id of the product and the quantity. We overwritten the quantity because with the map operator we have access to the current product we are at//
            : //We want to add ine to our quantity so we can way +1, like that we can add an new object with an extra one on top of the already existing quantity//

              //Now we want to add our array like normal so we can use the regular product object//
              //We are mapping over cartProducts //
              product
        )
      );
    }
  }
  // We take the Id so we can get the quantity of a certain item by using a const quantity is equal to getProductQuantity//

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
    //if the quantity is currently to 1 we are going  to delete the product fully from our cart by saying "delete from cart certain Id "//
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(cartProducts.map((product) => (product.id === id ? { ...product, quantity: product.quantity - 1 } : product)));
    }
    // We are defining setCartProducts we are changing the car state so we can map over the cartProducts//
  }

  // This function is going to totally wipe out the amount of products from our cart of a certain Id  //
  function deleteFromCart(id) {
    // We are getting the value of our state  //
    setCartProducts(
      // We use the value of cartProducts and we filter over it. We start with an empty array and if an object meets a condition then it's going to add the object to array //
      // We passe in the filter "as long as the product doesn't have an Id of  "
      (cartProducts) =>
        cartProducts.filter((currentProduct) => {
          //The actual condition is going to return the current product.id  doesn't equal Id  if this is true the current product is going to get passed to our new array  //
          //if it's false it's not going to add it to our new array //
          return currentProduct.id !== id;
        })
    );
  }

  // We are gonna use external data //
  //We don't need a parameter because it's going to get the total cost of all the different items in our cart //

  function getTotalCost() {
    //We are initializing a total cost equal to 0 so if we want to get the cost of a certain item we need to get the data of a certain item//
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      //This productData object gives us access tot the price and we can see how many of a certain price do we have in our cart by looking at the quantity  //
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  //In const contextValue We are gonna define all the different function  //
  const contextValue = {
    items: cartProducts, // We create an empty array of carProducts  state to manipulate what our provider is giving to the rest of our application because it's referencing this [cartProducts] state   //
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  //These functions we are going to use this [CarProduct] function to manipulate what our provider is giving to the rest of our application  //

  //We return CartContext.Provider value={contextValue} //
  // We are passing the children //
  //Provider//
  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
export default CartProvider;
