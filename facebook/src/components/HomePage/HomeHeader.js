import React from "react";
import { Link } from "react-router-dom";
// import SearchIcon from "@material-ui/icons/Search";
import "../../css/HomePage/HomeHeader.css";

function HomeHeader() {
  return (
    <nav className="homeheader">
      <div className="homeheader__left">
        {/* logo on the left -> img*/}
        <Link to="/home">
          <img
            className="homeheader__logo"
            src="https://www.freeiconspng.com/uploads/facebook-f-logo-white-background-21.jpg"
            alt=""
          />
        </Link>

        {/* <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div> */}

        <div className="topnav">
          <input type="text" className="homeheader__search" placeholder="Search.."></input>
        </div>
      </div>

      <div className="homeheader__right">
      <Link to="/profile" className="homeheader__user">
          <span className="homeheader__user">Your Name</span>
      </Link>

      <Link to="/home" className="homeheader__home">
          <span className="homeheader__home">Home</span>
      </Link>
        <span className="homeheader__create">Create</span>
      </div>
    </nav>
  );
}

export default HomeHeader;
