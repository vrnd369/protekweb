import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import LoadingScreen from "./Components/Load.jsx"; 
import Hero from "./Components/Hero.jsx"; // Import Hero component if needed
import AboutUs from "./Components/AboutUs.jsx"; // Import AboutUs component if needed

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // This will change isLoading to false after the loading screen duration
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <div>
        {isLoading ? (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        ) : (
          <>
            <Nav />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                </>
              } />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
