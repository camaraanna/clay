import React from "react";
import Navbar from "../../layouts/Navbar";
import Carousel from "../../components/Carousel";
import Introduction from "../../components/Introduction";

export const HomePage = () => {
  return (
    <div className="container-home-page">
      <Navbar />
      <div>
        <h1 className="title home-Page">CLAY THE ARTIST LIBRARY </h1>
      </div>
      <Carousel />
      <Introduction />
    </div>
  );
};

export default HomePage;
