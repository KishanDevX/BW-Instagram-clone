import React from "react";
import { MusicIcon, RepostIcon, Three_dots_Icon } from "../assets/icons";

const PostCard = ({ username, user_dp, time_posted, content, engagement }) => {
  return (
    <div className="postCard">
      <div className="post-top">
        <div className="pic">
          <img src={user_dp} alt="pic" />
        </div>
        <div className="info">
          <span className="username">{username}</span>
          <div className="audio-name">
            <MusicIcon /> {content.audio_title}
          </div>
        </div>
        <button>Follow</button>
        <Three_dots_Icon />
      </div>
      <div className="post-content">
        <img src={content.src} alt="content" />
      </div>
      <div className="post-bottom">
        <ul className="engagement">
          <li className="likes">
            <i className="ri-poker-hearts-line"></i> {engagement.likes}
          </li>
          <li className="comments">
            <i className="ri-chat-3-line"></i> {engagement.comments}
          </li>
          <li className="reposts">
            <RepostIcon /> {engagement.reposts}
          </li>
          <li className="share">
            <i className="ri-send-ins-line"></i> {engagement.share}
          </li>
          <li className="bookmark">
            <i className="ri-bookmark-line"></i>
          </li>
        </ul>
        <div className="content-txt">
          <p>{content.captions}</p>
        </div>
        <div className="time-posted">{time_posted}</div>
      </div>
    </div>
  );
};

export default PostCard;
