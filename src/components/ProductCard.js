import { CartContext } from "../CartContext";
import { useContext } from "react";
//This hook allow us to access all the cart object//

import { Link } from "react-router-dom";

function ProductCard(props) {
  // prop.product is the product we are selling and it gives us access to all the different information of that certain product  //
  // props is going to be a list of all the different properties on our component and that product is going to be that object, that the reason we can say const product equal to props.poduct and then get different properties from that object.  //
  const product = props.product;

  // Give us access to all the different properties of our context, which are being defined over in our CartContext.js
  const cart = useContext(CartContext);

  //It's allow us to see if we have an item that is in our cart or not
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <section className="container-box-product">
      <article className="box-product">
        <div className="container-btn-view">
          <Link to={`/Article/${product.id}`} key={props.id}>
            {" "}
            <button className="btn-view">VIEW</button>
          </Link>
        </div>
        <img src={product.imgProduct} alt="" />
        <h2>{product.title}</h2>
        {/* <h5 className="product-legend">{product.description_Product}</h5> */}
        {/* <Link style={{ textDecoration: "none", color: "black" }} to={`/ArtistsPage/${product.id}`} key={props.id}>
         
        </Link> */}
        <h3>{product.Artistname}</h3>
        <h2>${product.price}</h2>
        {/* If the quantity is equal to 0 it's going to show add to cart but if it's at least one item then we will show a different interface  */}
        {productQuantity > 0 ? (
          <>
            {/* We will show interactive data to our user */}
            <div>
              <div>
                In Cart: {productQuantity}
                <div>
                  <button onClick={() => cart.addOneToCart(product.id)} className="addOneToCart">
                    +
                  </button>
                  <button onClick={() => cart.removeOneFromCart(product.id)} className="removeOneFromCart">
                    -
                  </button>
                </div>
              </div>
            </div>
            <button onClick={() => cart.deleteFromCart(product.id)} className=" deleteFromCart">
              Remove from cart
            </button>
          </>
        ) : (
          <button className=" addOneToCar-btn" onClick={() => cart.addOneToCart(product.id)}>
            Add To Cart
          </button>
        )}
      </article>
    </section>
  );
}
export default ProductCard;
