import React from "react";
import Clay from "../assets/img/Clay-picture.png";
import WhiteLogo from "../assets/img/Logo-white-clay.png";


export const Carousel = () => {
  return (
    <section className="container-carousel">
    <div className="logoWhite">

  </div>
      <figure className="clay-img">
        <img src={Clay} alt="" srcset="" />
      </figure>
    </section>
  );
};

export default Carousel;
