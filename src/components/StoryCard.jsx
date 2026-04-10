import React from "react";

const StoryCard = ({ profile_name, profile_dp, txt, has_story }) => {
  return (
    <div className="story-card">
      <div className={`story-dp ${has_story ? "hasStory" : ""}`}>
        {txt && <span className="name-dp">{txt}</span>}
        {profile_dp && <img src={profile_dp} alt="person" />}
      </div>
      <div className={`profile-name ${has_story ? "no-dim" : ""}`}>
        {profile_name}
      </div>
    </div>
  );
};

export default StoryCard;
