import React from "react";
import "../stylesheets/navbar.css";
import {
  Home_line_Icon,
  Play_line_Icon,
  Plane_line_Icon,
  Search_line_Icon,
  Profile_line_Icon,
} from "../assets/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <Home_line_Icon />
      </NavLink>
      <NavLink to="/reels">
        <Play_line_Icon />
      </NavLink>
      <NavLink to="/share">
        <Plane_line_Icon />
      </NavLink>
      <NavLink to="/find">
        <Search_line_Icon />
      </NavLink>
      <NavLink to="/profile">
        <Profile_line_Icon />
      </NavLink>
    </nav>
  );
};

export default Navbar;
