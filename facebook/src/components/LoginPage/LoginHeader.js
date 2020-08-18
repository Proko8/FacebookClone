import React, { useState } from "react";
import "../../css/LoginPage/LoginHeader.css";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "./UserPool.js";

function LoginHeader() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   UserPool.signUp(email, password, [], null, (err, data) => {
  //     if (err) console.error(err);
  //     console.log(data);
  //   });
  // };
  const onSubmit = event => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        console.log("onSuccess:", data);
      },

      onFailure: err => {
        console.error("onFailure:", err);
      },

      newPasswordRequired: data => {
        console.log("newPasswordRequired:", data);
      }
    });
  };
  return (
    <div className="loginheader">
      <img
        className="loginheader__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6TTtDRn5-_ZS_Dqkw-mk_O23qcVOrI4gNGw&usqp=CAU"
        alt=""
      />
      <div className="loginheader__username">
        <h5 className="loginheader__text">Email or Phone</h5>
        <form onSubmit={onSubmit}>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </form>
      </div>
      <div className="loginheader__password">
        <h5 className="loginheader__text2">Password</h5>
        <form onSubmit={onSubmit}>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </form>
        <h5 className="loginheader__text3">Forgot account?</h5>
      </div>
      <button className="loginheader__loginbutton">Log In</button>
    </div>
  );
}

export default LoginHeader;
