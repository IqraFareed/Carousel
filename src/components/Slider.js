import React from "react";
import ImageSlider from "./ImageSlider";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";

const Slider = () => {
  return (
    <div className="w-46 h-72 mx-auto my-0">
      <ImageSlider>
        <Page1 />
        <Page2 />
      </ImageSlider>
    </div>
  );
};

export default Slider;
