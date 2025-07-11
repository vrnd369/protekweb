import React, { useState, useEffect } from "react";
import "./Hero.css";
import img1 from "../Assets/image1.png";
import img2 from "../Assets/image2.png";
import img3 from "../Assets/image3.png";
import img4 from "../Assets/image4.png";
import img5 from "../Assets/image5.png";
import img6 from "../Assets/image6.png";
import img7 from "../Assets/image7.png";
import img8 from "../Assets/image8.png";
import img9 from "../Assets/image9.png";
import img10 from "../Assets/image10.png";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  // Check if the screen is desktop or mobile
  const checkIfDesktop = () => {
    if (window.innerWidth > 768) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    checkIfDesktop(); // Check screen size on load

    // Add resize event listener to check screen size
    window.addEventListener("resize", checkIfDesktop);

    return () => {
      window.removeEventListener("resize", checkIfDesktop);
    };
  }, []);

  return (
    <div className="homepage-container">
      <div className={`carousel-container ${isDesktop ? "show" : "hide"}`}>
        <div className="carousel">
          <img
            src={img1}
            alt="Desktop 1"
            className="carousel-image fade-in"
          />
          <img
            src={img2}
            alt="Desktop 2"
            className="carousel-image fade-in"
          />
          <img
            src={img3}
            alt="Desktop 3"
            className="carousel-image fade-in"
          />
          <img
            src={img4}
            alt="Desktop 4"
            className="carousel-image fade-in"
          />
          <img
            src={img5}
            alt="Desktop 5"
            className="carousel-image fade-in"
          />
        </div>
      </div>

      <div className={`image-container ${isDesktop ? "hide" : "show"}`}>
        <img
          src={img6}
          alt="Mobile  1"
          className="image fade-in"
        />
        <img
          src={img7}
          alt="Mobile 2"
          className="image fade-in"
        />
        <img
          src={img8}
          alt="Mobile 3"
          className="image fade-in"
        />
        <img
          src={img9}
          alt="Mobile 4"
          className="image fade-in"
        />
        <img
          src={img10}
          alt="Mobile 5"
          className="image fade-in"
        />
      </div>
    </div>
  );
};

export default Hero;
