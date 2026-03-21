import React from "react";

const Dots_verticalIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="icon icon-dots-vertical"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
      />
    </svg>
  );
};

const PostCard = ({
  post_dp,
  post_username,
  post_about,
  post_content,
  content_desc,
  upload_time,
  social,
}) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-head-left">
          <div className="post-dp">
            <img src={post_dp} alt="person" />
          </div>
          <div className="post-profile-info">
            <div className="post-profile-name">{post_username}</div>
            <div className="post-profile-about">{post_about}</div>
          </div>
        </div>
        <div className="post-head-right">
          <button>Follow</button>
          <Dots_verticalIcon />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
