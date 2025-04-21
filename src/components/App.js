import React from "react";
import About from "./About";   // Correct relative path: no need for './components/' 
import Home from "./Home";     // Default import
import NavBar from "./NavBar"; // Default import

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App; // Default export
