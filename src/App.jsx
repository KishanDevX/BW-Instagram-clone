import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Reels from "./pages/Reels";
import Share from "./pages/Share";
import Find from "./pages/Find";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="view-part">
      <div className="top-view">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/share" element={<Share />} />
          <Route path="/find" element={<Find />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
};

export default App;
