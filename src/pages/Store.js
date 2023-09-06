import { productsArray } from "../data/productsStore";
import ProductCard from "../components/ProductCard";
function Store() {
  return (
    <>
      <h1 className="p-3">Welcome to the store !</h1>
      <div className="g-4">
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
    </>
  );
}
export default Store;
