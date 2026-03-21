import React from "react";
import "../stylesheets/home.css";
import Insta_wordmark from "../assets/images/insta-wordmark.png";
import Insta_def_dp from "../assets/images/def-insta-dp.jpg";
import PostCard from "../components/PostCard";

const profile_stories_Data = [
  {
    profile_name: "kishan kumar",
    profile_dp: Insta_def_dp,
    has_story: true,
  },
  {
    profile_name: "kishan kumar",
    profile_dp: "#",
    has_story: true,
  },
  {
    profile_name: "kishan",
    profile_dp: "#",
    has_story: true,
  },
  {
    profile_name: "kishan kumar",
    profile_dp: "#",
    has_story: true,
  },
  {
    profile_name: "kishan kumar",
    profile_dp: "#",
    has_story: true,
  },
];

// <<== ICONS (open)
const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="icon icon-plus"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

const Arrow_downIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-arrow-down"
    >
      <path
        fill_rule="evenodd"
        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
        clip_rule="evenodd"
      />
    </svg>
  );
};

const HeartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke_width="1.5"
      stroke="currentColor"
      class="icon icon-heart"
    >
      <path
        stroke_linecap="round"
        stroke_linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  );
};
// ==>> ICONS (close)

const Story_card = ({ profile_name, profile_dp }) => {
  return (
    <div className="story-card">
      <div className="story-dp">
        <img src={profile_dp} alt="person" />
      </div>
      <div className="profile-name">{profile_name}</div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="page home-page">
      <header>
        <div className="home-top-sec">
          <PlusIcon />
          <div className="insta-word-mark">
            <img src={Insta_wordmark} alt="" />
            <Arrow_downIcon />
          </div>
          <HeartIcon />
        </div>
        <div className="home-story-sec">
          <div className="story-card your-story">
            <div className="story-dp">
              <img src={Insta_def_dp} alt="person" />
              <span className="add-story-icon">{/* <PlusIcon /> */}+</span>
            </div>
            <div className="profile-name">Your story</div>
          </div>
          {profile_stories_Data.map((profile, idx) => {
            return (
              <Story_card
                profile_name={profile.profile_name}
                profile_dp={profile.profile_dp}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default Home;
