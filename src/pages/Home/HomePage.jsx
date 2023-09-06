import React from "react";
import Navbar from "../../layouts/Navbar";
import Carousel from "../../components/Carousel";
import Introduction from "../../components/Introduction";
import Footer from "../../layouts/Footer";
import Recommendation from "../../components/Recommendation";
import DescriptionBrand from "../../components/DescriptionBrand";

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
      <Footer />
    </div>
  );
};

export default HomePage;
