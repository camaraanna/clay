import React from "react";
import History from "../assets/img/OurHistory.jpg";
import { Link } from "react-router-dom";

export const OurHistory = () => {
  return (
    <>
      <div>
        <div className="container-title-store">
          <h1 className="title-store">Our history </h1>
        </div>
        <section className="container-description-brand">
          <article>
            <figure>
              <img src={History} width="1000" style={{ borderRadius: "10px" }} />
            </figure>
            <div className="description-brand">
              <p className="description-brand-text">In a digital landscape, Clay emerged as an extraordinary e-commerce platform, uniting artists and art enthusiasts alike. Its mission was clear: empower artists to shine and make art accessible to every budget. From a humble beginning, Clay became the stage where emerging talents and seasoned artists found their spotlight. It curated a diverse collection of artworks, from paintings to sculptures, enriching the global art scene. Clay challenged the exclusivity of art, ensuring that everyone, regardless of their budget, could own a piece of creativity that spoke to their hearts. </p>
            </div>
          </article>
        </section>
        <section className="container-intro">
          <article>
            <div className="description-intro">
              <p className="description-intro-text">Clay is more than just a marketplace; it's a community that empowers emerging and established artists alike. We provide a platform where artists from around the world can showcase their talent, gain visibility, and connect with a global audience. </p>

              <div className="container-btn-shop ">
                <Link to={`/Store`}>
                  <button className="btn-shop">Shop </button>
                </Link>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default OurHistory;
