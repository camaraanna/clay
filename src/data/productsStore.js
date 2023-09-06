// this Js component will allow us to import productSore.js and grab the products array from it a  //

const productsArray = [
  {
    id: "1",
    title: "Coffee",
    price: 4.99,
    artist: "cora",
  },
  {
    id: "2",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "3",
    title: "Sunglasses",
    price: 39.99,
  },
];

//This function help us get the data of a product from only the ID  //
function getProductData(id) {
  // .find allow us to loop though every single element //
  //In this case the current element is looping through the product and then we will see if the product.id is equal to the ID that was past in from our parameters and is going to return the full object //
  let productData = productsArray.find((product) => product.id === id);

  //If the ID doesn't exist//
  if (productData == undefined) console.log("Product data does not exist for ID: " + id);

  // If productData is undefine we are just gonna return undefined  //
  return productData;
}

export { productsArray, getProductData }; // This "{}"" allow us to give this array of data to any component inside of our Javascript project//
// We are exporting productData this will allow us to call this function anywhere else in the React application //
