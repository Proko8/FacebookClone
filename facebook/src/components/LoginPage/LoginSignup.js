import React, { useState } from "react";
import "../../css/LoginPage/LoginSignup.css";
import UserPool from "../UserPool";

function LoginSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup__signup">
        <h1>Sign Up</h1>
        <h3 className="loginsignup__free">It's free and always will be.</h3>
      </div>
      <div className="loginsignup__allboxes">
        <div>
          <input
            type="text"
            className="loginsignup__fname"
            placeholder="First Name"
          />
          <input
            type="text"
            className="loginsignup__lname"
            placeholder="Last Name"
          />
        </div>
        <br></br>
        <form onSubmit={onSubmit}>
          <input
            value={email}
            className="loginsignup__mobilebox"
            placeholder="Mobile number or email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br></br>
          <br></br>

          <input
            type="password"
            value={password}
            className="loginsignup__mobilebox"
            placeholder="New password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <h3>Birthday</h3>
          <div className="loginsignup__birthday">
            <input className="loginsignup__months" list="Months" type="text" />
            <datalist id="Months">
              <option value="Jan"></option>
              <option value="Feb"></option>
              <option value="Mar"></option>
              <option value="Apr"></option>
              <option value="May"></option>
              <option value="Jun"></option>
              <option value="Jul"></option>
              <option value="Aug"></option>
              <option value="Sep"></option>
              <option value="Oct"></option>
              <option value="Nov"></option>
              <option value="Dec"></option>
            </datalist>

            <input className="loginsignup__day" list="Day" type="text" />
            <datalist id="Day">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
              <option value="4"></option>
              <option value="5"></option>
              <option value="6"></option>
              <option value="7"></option>
              <option value="8"></option>
              <option value="9"></option>
              <option value="10"></option>
              <option value="11"></option>
              <option value="12"></option>
              <option value="13"></option>
              <option value="14"></option>
              <option value="15"></option>
              <option value="16"></option>
              <option value="17"></option>
              <option value="18"></option>
              <option value="19"></option>
              <option value="20"></option>
              <option value="21"></option>
              <option value="22"></option>
              <option value="23"></option>
              <option value="24"></option>
              <option value="25"></option>
              <option value="26"></option>
              <option value="27"></option>
              <option value="28"></option>
              <option value="29"></option>
              <option value="30"></option>
              <option value="31"></option>
            </datalist>

            <input className="loginsignup__year" list="Year" type="text" />
            <datalist id="Year">
              <option value="2007"></option>
              <option value="2006"></option>
              <option value="2005"></option>
              <option value="2004"></option>
              <option value="2003"></option>
              <option value="2002"></option>
              <option value="2001"></option>
              <option value="2000"></option>
              <option value="1999"></option>
              <option value="1998"></option>
              <option value="1997"></option>
              <option value="1996"></option>
              <option value="1995"></option>
              <option value="1994"></option>
              <option value="1993"></option>
              <option value="1992"></option>
              <option value="1991"></option>
              <option value="1990"></option>
              <option value="1989"></option>
              <option value="1988"></option>
              <option value="1987"></option>
              <option value="1986"></option>
              <option value="1985"></option>
              <option value="1984"></option>
              <option value="1983"></option>
              <option value="1982"></option>
              <option value="1981"></option>
              <option value="1980"></option>
              <option value="1979"></option>
              <option value="1978"></option>
              <option value="1977"></option>
              <option value="1976"></option>
              <option value="1975"></option>
              <option value="1974"></option>
              <option value="1973"></option>
              <option value="1972"></option>
              <option value="1971"></option>
              <option value="1970"></option>
              <option value="1969"></option>
              <option value="1968"></option>
              <option value="1967"></option>
              <option value="1966"></option>
              <option value="1965"></option>
              <option value="1964"></option>
              <option value="1963"></option>
              <option value="1962"></option>
              <option value="1961"></option>
              <option value="1960"></option>
            </datalist>
            <h5 className="loginsignup__question">
              Why do I need to provide my birthday?
            </h5>
          </div>
          <div className="loginsignup__gender">
            <input
              className="loginsignup__circle"
              type="checkbox"
              value="Female"
            ></input>
            <h4 className="loginsignup__female">Female</h4>
            <input
              className="loginsignup__circle"
              type="checkbox"
              value="Male"
            ></input>
            <h4 className="loginsignup__male">Male</h4>
          </div>

          <h5 className="loginsignup__terms">
            By clicking Create Account, you agree to our Terms and that you have
            read our Data Policy, including our Cookie Use. You may recieve SMS
            Notifications from Facebook and can opt out at any time.
          </h5>
          <button
            className="loginsignup__submit"
            type="submit"
            value="Create Account"
          >
            Sign up
          </button>
        </form>
      </div>
      <h5>Create a Page for a celebrity, band or business.</h5>
    </div>
  );
}

export default LoginSignup;
