import React from "react";
import "../stylesheets/find.css";

const suggestedReels_ = [];

const ReelCard = ({ thumbnail, views }) => {
  return (
    <div className="reel">
      {/* <img src={thumbnail} alt="reel" /> */}
      <span className="reel-views">
        <i class="ri-eye-line"></i>
        1.2K
      </span>
    </div>
  );
};

const Find = () => {
  return (
    <div className="page find-page">
      <div className="searchbar">
        <i className="ri-search-ai-2-line"></i>
        <input type="text" placeholder="Search with Meta AI" />
      </div>
      <div className="suggested-reels">
        <ReelCard />
        <ReelCard />
        <ReelCard />
        <ReelCard />
        <ReelCard />
        <ReelCard />
        <ReelCard />
        <ReelCard />
        <ReelCard />
        <ReelCard />
      </div>
    </div>
  );
};

export default Find;
