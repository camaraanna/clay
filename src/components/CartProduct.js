import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../data/productsStore";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <img src={productData.imgProduct} style={{ width: "40%" }} alt="" />
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>${(quantity * productData.price).toFixed(2)}</p>
      <button className="removeOneFromCart" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </button>
      <hr></hr>
    </>
  );
}

export default CartProduct;
