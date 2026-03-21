import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="view-part">
      <div className="top-view">
        <Home />
      </div>
      <Navbar />
    </div>
  );
};

export default App;
