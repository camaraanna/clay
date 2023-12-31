import { productsArray } from "../data/productsStore";
import ProductCard from "../components/ProductCard";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
function Store() {
  return (
    <>
      <div className="container-title-store">
        <h1 className="title-store">Shop </h1>
      </div>

      <section className="container-store">
        <div className="container-product">
          {/*product is looking at the product we are mapping over  */}
          {productsArray.map((product, index) => (
            <div align="center" key={index}>
              <ProductCard product={product} />

              {/* This product is defining a property */}
            </div>
          ))}
          {/*Map allow us to go to every single element in the array and import the data we want. In this case we are mapping over our product */}
          {/*We are going to return a jsx immdeditely */}
        </div>

       
      </section>
    </>
  );
}
export default Store;
