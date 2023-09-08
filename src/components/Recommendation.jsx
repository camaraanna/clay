import React from "react";
import { productsArray } from "../data/productsStore";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export const Recommendation = () => {
  // Use slice to get the first three products
  const firstThreeProducts = productsArray.slice(0, 3);
  return (
    <section className="container-recommendation">
      <>
        <section className="container-store-recommendation">
          <div className="container-product-recommendation">
            {/* Map over the first three products */}
            {firstThreeProducts.map((product, index) => (
              <div align="center" key={index}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      </>
    </section>
  );
};

export default Recommendation;
