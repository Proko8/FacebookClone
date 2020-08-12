import React from "react";
import "../../css/LoginPage/LoginHeader.css";

function LoginHeader() {
  return (
    <div className="loginheader">
      <img
        className="loginheader__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6TTtDRn5-_ZS_Dqkw-mk_O23qcVOrI4gNGw&usqp=CAU"
        alt=""
      />
      <div className="loginheader__username">
        <h5 className="loginheader__text">Email or Phone</h5>
        <input type="text" placeholder="Username" onChange="" />
      </div>
      <div className="loginheader__password">
        <h5 className="loginheader__text2">Password</h5>
        <input type="text" placeholder="Password" onChange="" />
        <h5 className="loginheader__text3">Forgot account?</h5>
      </div>
      <button className="loginheader__loginbutton">Log In</button>
    </div>
  );
}

export default LoginHeader;
