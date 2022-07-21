import React, { useState } from "react";
import { motion } from "framer-motion";
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0 , -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#000",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0 , -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#000",
    zIndex: 4,
    cursor: "pointer",
  };

  const dostsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  const dotStyles = {
    margin: "0 3px",
  };

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="h-full relative">
      <div style={leftArrowStyle} onClick={goToPrev}>
        ←
      </div>
      <div style={rightArrowStyle} onClick={goToNext}>
        →
      </div>
      <motion.div
        style={{
          backgroundImage: `url(${slides[currentIndex]})`,

          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full h-full rounded-xl"
      ></motion.div>
      <div style={dostsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <>
            <div
              key={slideIndex}
              style={dotStyles}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              {currentIndex === slideIndex ? (
                <div className="w-6 h-2 rounded-3xl bg-light-primary"></div>
              ) : (
                <div className="w-2 h-2 bg-light-gray rounded-full"> </div>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
