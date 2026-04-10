import React from "react";
import { MusicIcon, RepostIcon, Three_dots_Icon } from "../assets/icons";

const postFeed_Data = [
  {
    username: "user_1",
    user_dp: "https://i.pravatar.cc/150?img=1",
    time_posted: "2 hours ago",
    content: {
      type: "image",
      src: "https://unsplash.com/photos/a-frame-cabin-nestled-in-a-dense-forest-drhNiF9y8to",
      audio_src: "#",
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

const PostCard = () => {
  return (
    <div className="postCard">
      <div className="post-top">
        <div className="pic">
          {/* <img src="https://i.pravatar.cc/150?img=1" alt="pic" /> */}
        </div>
        <div className="info">
          <span className="username">Kishan Kumar</span>
          <div className="audio-name">
            <MusicIcon /> Audio Title
          </div>
        </div>
        <button>Follow</button>
        <Three_dots_Icon />
      </div>
      <div className="post-content">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt=""
        />
      </div>
      <div className="post-bottom">
        <ul className="engagement">
          <li className="likes">
            <i class="ri-poker-hearts-line"></i> 78
          </li>
          <li className="comments">
            <i class="ri-chat-3-line"></i> 56
          </li>
          <li className="reposts">
            <RepostIcon /> 6.2K
          </li>
          <li className="share">
            <i class="ri-send-ins-line"></i> 35
          </li>
          <li className="bookmark">
            <i class="ri-bookmark-line"></i>
          </li>
        </ul>
        <div className="content-txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident
          facilis quisquam eum quis enim amet harum animi, ipsam molestias
          dicta, ipsum facere, voluptas molestiae maxime. Natus alias sunt
          reiciendis.
        </div>
        <div className="time-posted">March 4</div>
      </div>
    </div>
  );
};

export default PostCard;
