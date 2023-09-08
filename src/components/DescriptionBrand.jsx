import React from "react";
import Description from "../assets/img/Description-picture.jpg";

export const DescriptionBrand = () => {
  return (
    <section className="container-description-brand">
      <article>
        <figure>
          <img src={Description} width="1000" style={{borderRadius:"10px"}}/>
        </figure>
        <div className="description-brand">
          <p className="description-brand-text">We understand that art should not be limited to the elite. Clay offers a curated selection of artwork that caters to a wide range of budgets. Whether you're a seasoned art collector or a first-time buyer, you'll find a treasure trove of artwork that speaks to you and fits within your financial means.Explore our extensive collection of paintings, sculptures, pottery, photography, and more. With a diverse range of artistic styles, themes, and mediums, Clay is your window to the global art scene. </p>
        </div>
      </article>
    </section>
  );
};

export default DescriptionBrand;
