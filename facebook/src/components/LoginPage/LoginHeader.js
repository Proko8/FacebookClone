import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "../Accounts";
import { useHistory } from "react-router-dom";
import "../../css/LoginPage/LoginHeader.css";


function LoginHeader() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  
  const { getSession } = useContext(AccountContext);
  const { authenticate } = useContext(AccountContext);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(status, "status");
    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!", data);
        setStatus(true);
        history.push("/home");
      })
      .catch((err) => {
        console.error("failed to log in!", err);
      });
  };
  
  useEffect(() => {
    getSession().then((session) => {
      console.log("Session:", session);
      setStatus(true);
    })
  }, []);

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
