import React from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/Home";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
