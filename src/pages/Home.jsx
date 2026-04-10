import React from "react";
import "../stylesheets/home.css";
import Insta_wordmark from "../assets/images/insta-wordmark.png";
import Insta_def_dp from "../assets/images/def-insta-dp.jpg";
import { PlusIcon, Arrow_downIcon, HeartIcon } from "../assets/icons";
import PostCard from "../components/PostCard";
import StoryCard from "../components/StoryCard";

// DATA
const profileStories_Data = [];
const boss = "Kishan_Kumar";
for (let i = 0; i < boss.length; i++) {
  profileStories_Data.push({
    profile_name: `user_${i + 1}`,
    profile_dp: `https://i.pravatar.cc/150?img=${i}`,
    // txt: boss[i],
    has_story: false,
  });
}
profileStories_Data[2].has_story = true;

const postFeed_Data = [
  {
    username: "user_1",
    user_dp: "https://i.pravatar.cc/150?img=1",
    time_posted: "2 hours ago",
    content: {
      type: "image",
      src: "#",
      title: "A beautiful sunset",
      description: "Enjoying the view at the beach!",
    },
    engagement: {
      likes: 120,
      comments: 15,
      share: 13,
      reposts: 5,
    },
  },
];

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
        <div className="profile-name no-dim">Your story</div>
      </div>
      {profileStories_Data.map((profile, idx) => {
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
      <PostCard />
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
