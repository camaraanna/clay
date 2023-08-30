import React from "react";
import Navbar from "../../layouts/Navbar";
import Carousel from "../../components/Carousel";
import Introduction from "../../components/Introduction";
import Footer from "../../layouts/Footer";
import Recommendation from "../../components/Recommendation";

export const HomePage = () => {
  return (
    <div className="container-home-page">
      <Navbar />
      <div>
        <h1 className="title home-Page">CLAY THE ARTIST LIBRARY </h1>
      </div>
      <Carousel />
      <Introduction />
      <Recommendation />

      <Footer />
    </div>
  );
};

export default HomePage;
