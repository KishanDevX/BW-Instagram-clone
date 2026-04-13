import React, { useEffect, useState } from "react";
import "../stylesheets/find.css";
import axios from "axios";

const URL = "https://api.pexels.com/videos/search";
const KEY = "SzLHkNXFmWMzGXbB54qzYrqySkSa4oeNS8sAbA13opQCtwb3UiflaRYL";

const formatFakeViews = (id) => {
  const views = (id % 900000) + 1000;
  return (views / 1000).toFixed(1) + "K";
};

const getData = async (setSuggestedReels) => {
  try {
    const res = await axios.get(URL, {
      params: {
        query: "nature",
        per_page: 20,
      },
      headers: {
        Authorization: KEY,
      },
    });

    const formatted = res.data.videos.map((reel) => ({
      thumbnail: reel.image,
      source: reel.url,
      views: reel.id,
    }));

    setSuggestedReels(formatted);
  } catch (err) {
    console.error(err);
  }
};

const ReelCard = ({ thumbnail, views }) => {
  return (
    <div className="reel">
      <img src={thumbnail} alt="reel" />
      <span className="reel-views">
        <i className="ri-eye-line"></i>
        {formatFakeViews(views)}
      </span>
    </div>
  );
};

const Find = () => {
  const [suggestedReels, setSuggestedReels] = useState([]);

  useEffect(() => {
    getData(setSuggestedReels);
  }, []);

  return (
    <div className="page find-page">
      <div className="searchbar">
        <i className="ri-search-ai-2-line"></i>
        <input type="text" placeholder="Search with Meta AI" />
      </div>
      <div className="suggested-reels">
        {suggestedReels.map((reel, id) => {
          return (
            <ReelCard key={id} thumbnail={reel.thumbnail} views={reel.views} />
          );
        })}
      </div>
    </div>
  );
};

export default Find;
