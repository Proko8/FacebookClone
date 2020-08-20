import React from "react";
import LoginHeader from "./LoginHeader";
import LoginLeft from "./LoginLeft"
import LoginSignup from "./LoginSignup";
import "../../css/LoginPage/LoginPage.css"
import {Account} from "./Accounts";

function LoginPage() {
    return (
        <div className="loginpage">
        <Account>
            <LoginHeader />
            <div className="loginpage__middle">
            <LoginLeft />
            <LoginSignup />
            </div>
        </Account>
        </div>
    )
}

export default LoginPage;

