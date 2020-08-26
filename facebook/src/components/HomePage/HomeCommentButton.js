import React, {useState} from "react";
import "../../css/HomePage/HomeCommentButton.css";

function HomeCommentButton() {
    return (
        <div>
            <button className="comment__button"><img className="comment__pic" src="https://www.kindpng.com/picc/m/8-89794_vector-rectangle-speech-bubble-banner-royalty-free-vector.png"/>Comment</button>
        </div>
    )
}

export default HomeCommentButton;
