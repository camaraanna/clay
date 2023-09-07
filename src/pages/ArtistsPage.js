import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductData } from "../data/productsStore";

export const ArtistsPage = () => {
  const { id } = useParams(); // Use useParams to get the 'id' parameter
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    // Fetch the data for the selected product based on the 'id' parameter
    const product = getProductData(id);

    if (product) {
      setSelectedCard(product);
    } else {
      // Handle the case where the product is not found
      console.error(`Product not found for ID: ${id}`);
    }
  }, [id]);

  // Render the product information here
  return (
    <div className="display selectedcard" style={{ marginTop: "100px", zIndex: "10" }}>
      {selectedCard && (
        <div className="container-page">
          {/* Render product details */}
          <div>
            <figure>
              <img className="img-page" src={selectedCard.imgProduct} alt="" />
            </figure>
            {/* Render other product details */}
          </div>
          {/* Other components */}

          <div>
            <h3>{selectedCard.Artistname}</h3>
            <h2>${selectedCard.description_Artist}</h2>
          </div>
        </div>
      )}
    </div>
  );
};
export default ArtistsPage;
