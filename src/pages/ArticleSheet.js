import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductData } from "../data/productsStore";
import { CartContext } from "../CartContext";
import { useContext } from "react";

export const ArticleSheet = () => {
  const { id } = useParams(); // Use useParams to get the 'id' parameter
  const [selectedCard, setSelectedCard] = useState(null);
  const cart = useContext(CartContext);

  useEffect(() => {
    // Fetch the data for the selected product based on the 'id' parameter
    const fetchProduct = async () => {
      try {
        const product = await getProductData(id);

        if (product) {
          setSelectedCard(product);
        } else {
          // Handle the case where the product is not found
          console.error(`Product not found for ID: ${id}`);
        }
      } catch (error) {
        // Handle any fetch errors here
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  // Render the product information here
  return (
    <div className="display selectedcard" style={{ marginTop: "100px", zIndex: "10" }}>
      {selectedCard ? (
        <section className="container-description-product">
          <div className="container-title-store">
            <h1 className="title-store">Product </h1>
          </div>

          <article>
            <figure>
              <img src={selectedCard.imgProduct} alt={selectedCard.title} />
            </figure>
            <div className="description-product">
              <div className="container-information">
                <div className="container-title-product">
                  <h2 className="description-product-text">{selectedCard.title}</h2>
                </div>
                <h3>{selectedCard.description_Product}</h3>
                <h3>Artist: {selectedCard.Artistname}</h3>
                <h2>${selectedCard.price}</h2>
                <div>
                  <div>
                    In Cart: {cart.getProductQuantity(selectedCard.id)}
                    <button onClick={() => cart.addOneToCart(selectedCard.id)} className="addOneToCart">
                      +
                    </button>
                    <button onClick={() => cart.removeOneFromCart(selectedCard.id)} className="removeOneFromCart">
                      -
                    </button>
                  </div>
                </div>
                <button onClick={() => cart.deleteFromCart(selectedCard.id)} className="deleteFromCart">
                  Remove from cart
                </button>
                <button className="addOneToCar-btn" onClick={() => cart.addOneToCart(selectedCard.id)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
        </section>
      ) : (
        <p>Loading...</p> // You can add a loading message or spinner here
      )}
    </div>
  );
};
export default ArticleSheet;
