import React from "react";
import "../stylesheets/home.css";
import Insta_wordmark from "../assets/images/insta-wordmark.png";
import Insta_def_dp from "../assets/images/def-insta-dp.jpg";
import { PlusIcon, Arrow_downIcon, HeartIcon } from "../assets/icons";
import PostCard from "../components/PostCard";
import StoryCard from "../components/StoryCard";

// DATA
const profile_stories_Data = [];
const boss = "Kishan_Kumar";
for (let i = 0; i < boss.length; i++) {
  profile_stories_Data.push({
    profile_name: `user_${i + 1}`,
    profile_dp: `https://i.pravatar.cc/150?img=${i}`,
    // txt: boss[i],
    has_story: false,
  });
}
profile_stories_Data[2].has_story = true;

// SECTIONS
const HomeNavbar = () => {
  return (
    <div className="homeNavbar">
      <PlusIcon />
      <div className="insta-word-mark">
        <img src={Insta_wordmark} alt="" />
        <Arrow_downIcon />
      </div>
      <HeartIcon />
    </div>
  );
};

const StoryBox = () => {
  return (
    <div className="storyBox">
      <div className="story-card your-story">
        <div className="your-dp">
          <img src={Insta_def_dp} alt="person" />
          <span className="add-story-icon">+</span>
        </div>
        <div className="profile-name">Your story</div>
      </div>
      {profile_stories_Data.map((profile, idx) => {
        return (
          <StoryCard
            key={idx}
            profile_name={profile.profile_name}
            profile_dp={profile.profile_dp}
            has_story={profile.has_story}
            txt={profile.txt}
          />
        );
      })}
    </div>
  );
};

const PostFeed = () => {
  return (
    <div className="post-feed">
      <p>posts will be displayed here</p>
    </div>
  );
};

// MAIN
const Home = () => {
  return (
    <div className="page home-page">
      <HomeNavbar />
      <StoryBox />
      <PostFeed />
    </div>
  );
};

export default Home;
