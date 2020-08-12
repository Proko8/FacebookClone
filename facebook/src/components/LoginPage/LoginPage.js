import React from "react";
import LoginHeader from "./LoginHeader";
import LoginLeft from "./LoginLeft"
import LoginSignup from "./LoginSignup";
import "../../css/LoginPage/LoginPage.css"

function LoginPage() {
    return (
        <div className="loginpage">
            <LoginHeader />
            <div className="loginpage__middle">
            <LoginLeft />
            <LoginSignup />
            </div>
        </div>
    )
}

export default LoginPage;
