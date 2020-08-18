import React, { useState } from "react";
import "../../css/LoginPage/LoginHeader.css";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool.js";

function LoginHeader() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess:", data);
      },

      onFailure: (err) => {
        console.error("onFailure:", err);
        alert("Invalid email or password")
      },

      newPasswordRequired: (data) => {
        console.log("newPasswordRequired:", data);
      },
    });
  };
  return (
    <div className="loginheader">
      <img
        className="loginheader__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6TTtDRn5-_ZS_Dqkw-mk_O23qcVOrI4gNGw&usqp=CAU"
        alt=""
      />

      <form onSubmit={onSubmit} className="loginheader__login">
        <input
          className="loginheader__field"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          className="loginheader__field"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <button className="loginheader__loginbutton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginHeader;
