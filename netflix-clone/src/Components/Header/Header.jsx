import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NetflixLogo from "../../assets/image/logo.png";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header_outer_container">
      <div className="header_container">
        {/* Left section */}
        <div className="header_left">
          <img src={NetflixLogo} alt="Netflix Logo" className="netflix_logo" />

          {/* Hamburger button (only shows on mobile) */}
          <button className="menu_icon" onClick={toggleMenu}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <ul className={`nav_links ${menuOpen ? "active" : ""}`}>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        {/* Right section */}
        <div className="header_right">
          <SearchIcon className="icon" />
          <NotificationsIcon className="icon" />
          <AccountBoxIcon className="icon" />
          <ArrowDropDownIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
