import React from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import Home from "./components/HomePage/Home";
import ProfilePage from "./components/ProfilePage/ProfilePage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
