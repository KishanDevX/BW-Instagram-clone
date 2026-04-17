import React from "react";
import "../stylesheets/profile.css";
import { PlusIcon } from "../assets/icons";
import userDp from "../assets/images/userdp.jpeg";
import { NavLink, Outlet } from "react-router-dom";

const ProfileNavbar = ({ username }) => {
  return (
    <nav className="profileNavbar">
      <PlusIcon />
      <span className="username">
        {username}
        <i className="ri-arrow-down-s-line"></i>
        <i className="ri-threads-line icon-threads"></i>
      </span>
      <i className="ri-menu-line icon-menu"></i>
    </nav>
  );
};

const UserCard = ({ pic, realName, fameCount, bio }) => {
  return (
    <div className="userCard">
      <div className="user-pic">
        <img src={pic} alt={realName} />
      </div>
      <div className="user-pop">
        <div className="realname">{realName}</div>
        <ul className="fameBox">
          <li>
            <div className="fameValue">{fameCount.posts}</div>
            <div className="fameLabel">posts</div>
          </li>
          <li>
            <div className="fameValue">{fameCount.followers}</div>
            <div className="fameLabel">followers</div>
          </li>
          <li>
            <div className="fameValue">{fameCount.followings}</div>
            <div className="fameLabel">following</div>
          </li>
        </ul>
      </div>
      <div className="user-bio">
        <div className="category">{bio.category}</div>
        <p className="text">{bio.text}</p>
        <ul className="links">
          {bio.links.map((link, idx) => {
            return (
              <a key={idx} className="link" href={link.path}>
                <i className="ri-link"></i>
                {link.name}
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const ProfileControls = ({ views, time }) => {
  return (
    <div className="profileControls">
      <div className="pro-dash">
        <h4>Professional dashboard</h4>
        <p>
          <i className="ri-arrow-right-up-line icon-arrow"></i>
          {views} views in the last {time} days
        </p>
      </div>
      <button>Edit profile</button>
      <button>Share profile</button>
    </div>
  );
};

const Highlights = () => {
  return <div className="highlights">Highlights</div>;
};

export const PostsTab = () => {
  return <div className="grid-link">this is grid link</div>;
};

export const ReelsTab = () => {
  return <div className="reel-link">this is reel link</div>;
};

export const MentionsTab = () => {
  return <div className="you-link">this is you link</div>;
};

const ProfileTabs = () => {
  return (
    <div className="profile-tabs">
      <div className="tab-nav">
        <NavLink to="." end>
          <i className="ri-grid-fill"></i>
        </NavLink>
        <NavLink to="reels">
          <i className="ri-movie-line"></i>
        </NavLink>
        <NavLink to="mentions">
          <i className="ri-folder-user-line"></i>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

const Profile = () => {
  return (
    <div className="page profile-page">
      <ProfileNavbar username={"dev_kishanx16"} />
      <UserCard
        pic={userDp}
        realName={"Kishan Kumar"}
        fameCount={{ posts: 12, followers: 23, followings: 13 }}
        bio={{
          category: "Software",
          text: "🖥️ I am the builder of this project, \n🔥 I have more projects too, \n🥂 You can visit from the following links",
          links: [
            { path: "#", name: " github.com/KishanDevX" },
            { path: "#", name: " facebook.com/KishanCodes" },
          ],
        }}
      />
      <ProfileControls views={100} time={2} />
      <ProfileTabs />
    </div>
  );
};

export default Profile;
