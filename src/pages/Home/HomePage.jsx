import React from "react";
import Navbar from "../../layouts/Navbar";
import Carousel from "../../components/Carousel";
import Introduction from "../../components/Introduction";
import Recommendation from "../../components/Recommendation";
import DescriptionBrand from "../../components/DescriptionBrand";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="container-home-page">
      <div className="container-title-homePage">
        <h1 className="title-homePage">Artistry for All: Affordable and Unique Creations </h1>
      </div>
      <Carousel />
      <Introduction />
      <Recommendation />
      <DescriptionBrand />
      <Recommendation />
      <div className="container-btn-shop ">
        <Link to={`/Shop`}>
          <button className="btn-shop">Shop </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
