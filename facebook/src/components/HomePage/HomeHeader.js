import React from "react";
import { Link } from "react-router-dom";

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

        <div className="topnav">
          <input
            type="text"
            className="homeheader__search"
            placeholder="Search.."
          ></input>
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
        <span className="homeheader__icons">
          <img
            className="homeheader__icons__pic"
            src="https://www.womeninretail.com/wp-content/uploads/2015/07/1400.jpg"
            alt=""
          />
        </span>
        <span className="homeheader__icons">
          <img
            className="homeheader__icons__pic"
            src="https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/kqenajeoi6noq2opkqnc.jpg"
            alt=""
          />
        </span>
        <span className="homeheader__icons">
          <img
            className="homeheader__icons__pic"
            src="https://www.wikitechy.com/technology/wp-content/uploads/2017/04/facebook_notifications_thumb_1483607872408.png"
            alt=""
          />
        </span>
      </div>
    </nav>
  );
}

export default HomeHeader;
