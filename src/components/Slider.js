import React from "react";
import ImageSlider from "./ImageSlider";
import image1 from "../assets/tokapi1.png";
import image2 from "../assets/tokapi2.png";
import { motion } from "framer-motion";
const Slider = () => {
  const slides = [image1, image2];
  const containerStyles = {
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles} className="w-46 h-72 ">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Slider;
