import { CartContext } from "../CartContext";
import { useContext, useEffect, useState } from "react";
import { getProductData } from "../data/productsStore";

export const ArticleSheet = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Call getProductData with the provided id to get the product data
    const productData = getProductData(id);

    // Update selectedProduct with the product data
    setSelectedProduct(productData);
  }, [id]);

  console.log("ID passed to getProductData:", id);
  const productData = getProductData(id);
  console.log("Product Data:", productData);
  return (
    <div>
      {selectedProduct ? (
        <>
          <h2>{selectedProduct.title}</h2>
          <p>{selectedProduct.description_Product}</p>
          {/* Add more product details as needed */}
        </>
      ) : (
        <p>Product not found for ID: {id}</p>
      )}
    </div>
  );
};

export default ArticleSheet;
