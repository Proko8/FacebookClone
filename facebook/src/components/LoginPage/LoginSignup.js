import React from "react";
import "../../css/LoginPage/LoginSignup.css";

function LoginSignup() {
  return (
    <div className="loginsignup">
      <div className="loginsignup__signup">
        <h1>Sign Up</h1>
        <h3 className="loginsignup__free">It's free and always will be.</h3>
      </div>
      <div className="loginsignup__allboxes">
        <div>
          <input type="text" className="lignsignup__fname" placeholder="First Name" onChange="" />
          <input type="text" className="lignsignup__lname" placeholder="Last Name" onChange="" />
        </div>
        <br></br>
        <input
          type="text"
          className="loginsignup__mobilebox"
          placeholder="Mobile number or email"
          onChange=""
        />
        <br></br>
        <br></br>
        <input
          type="text"
          className="loginsignup__mobilebox"
          placeholder="New password"
          onChange=""
        />
      </div>
    </div>
  );
}

export default LoginSignup;
