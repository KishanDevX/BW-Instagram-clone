import React from "react";
import "../stylesheets/reels.css";
import sampleVid from "../assets/images/sample.mp4";
import {
  BookmarkIcon,
  HeartIcon,
  MessageIcon,
  PlusIcon,
  RepostIcon,
  Three_dots_Icon,
} from "../assets/icons";

const ReelTop = () => {
  return (
    <div className="reel-top">
      <PlusIcon />
      <span>
        Reels
        <i className="ri-arrow-down-s-line"></i>
      </span>
      <span className="frnd-label">Friends</span>
      <div className="triple-circles">
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
      </div>
    </div>
  );
};

const ReelEngagement = () => {
  return (
    <ul className="reel-engagement">
      <li className="likes">
        <HeartIcon />
        <span>1.3K</span>
      </li>
      <li className="comments">
        <MessageIcon />
        <span>56</span>
      </li>
      <li className="reposts">
        <RepostIcon />
        <span>67</span>
      </li>
      <li className="share">
        <i className="ri-send-ins-line icon-plane"></i>
        <span>6.7K</span>
      </li>
      <li className="bookmark">
        <BookmarkIcon />
        <span>23K</span>
      </li>
      <li>
        <Three_dots_Icon />
      </li>
      <li>
        <div className="reel-audio">
          <img src="https://i.pravatar.cc/150?img=32" alt="audio" />
        </div>
      </li>
    </ul>
  );
};

const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="info-top">
        <div className="user-dp">
          <img src="https://i.pravatar.cc/150?img=32" alt="user" />
        </div>
        <div className="username">mohini_seth</div>
        <button>Follow</button>
      </div>
      <div className="captions">
        exploring art, trying new things out with colorful imaginations.
      </div>
    </div>
  );
};

const Reel = () => {
  return (
    <div className="page reels-page">
      <ReelTop />
      <ReelEngagement />
      <UserInfo />
      <video className="reel-vid" autoPlay muted loop playsInline>
        {/* <source src={sampleVid} type="video/mp4" /> */}
      </video>
    </div>
  );
};

export default Reel;
