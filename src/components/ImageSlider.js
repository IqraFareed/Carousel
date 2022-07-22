import React, { useState, useEffect } from "react";

const ImageSlider = ({ slides, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwiping, setSwiping] = useState(false);
  const [horizontalValue, setHorizontalValue] = useState(null);
  let startX;
  let X;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex !== children.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);
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
    const newIndex = isFirstSlide ? children.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === children.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-full relative" style={{ left: `${horizontalValue}px` }}>
      <div style={leftArrowStyle} onClick={goToPrev}>
        ←
      </div>
      <div
        onMouseDown={(e) => {
          startX = e.nativeEvent.offsetX;
          e.target.style.cursor = "grabbing";
          setSwiping(true);
          goToNext();
        }}
        onMouseUp={(e) => {
          e.target.style.cursor = "grab";
          setSwiping(false);
        }}
        onMouseMove={(e) => {
          e.target.style.cursor = "grab";
          if (!isSwiping) {
            e.preventDefault();
            X = e.nativeEvent.offsetX;
            setHorizontalValue(X - startX);
          }
        }}
      >
        {children[currentIndex]}
      </div>
      <div style={rightArrowStyle} onClick={goToNext}>
        →
      </div>

      {/* pagination */}
      <div style={dostsContainerStyles}>
        {children.map((slide, slideIndex) => (
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
