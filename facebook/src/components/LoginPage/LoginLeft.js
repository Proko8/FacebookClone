import React from "react";
import "../../css/LoginPage/LoginLeft.css";

function LoginLeft() {
    return (
        <div className="loginleft">
            <h1 className="loginleft__connect">Connect with friends and the <br></br> world around you on Facebook.</h1>
            <div className="loginleft__text">
                <h3 className="loginleft__boldfont"><img className="longleft__pics" src="https://www.shareicon.net/data/2017/05/30/886502_photo_512x512.png" alt=""/>See photos and updates from friends in News Feed.</h3>
                <h3 className="loginleft__boldfont"><img className="longleft__pics" src="http://cdn.onlinewebfonts.com/svg/img_418727.png" alt=""/>Share what's new in your life on your Timeline.</h3>
                <h3 className="loginleft__boldfont"><img className="longleft__pics" src="https://th.bing.com/th/id/OIP.Kj4_4Xh4EoHjIF20G7djMQHaHa?pid=Api&rs=1" alt=""/>Find more of what you're looking for with Facebook Search.</h3>
            </div>
        
        </div>
    )
}

export default LoginLeft;
