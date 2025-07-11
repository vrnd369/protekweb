import React, { useEffect } from "react";
import "./Load.css"; // Import the CSS for styling
import logo from "../Assets/protek logo.png"; // Adjust the path as necessary

const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    // Simulate loading time (e.g., 5 seconds)
    const timer = setTimeout(() => {
      onLoadingComplete(); // Notify App.js that loading is complete
    }, 2500); // 3000ms = 3 seconds

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      <img src={logo} alt="Logo" className="loading-logo" />
    </div>
  );
};

export default LoadingScreen;
