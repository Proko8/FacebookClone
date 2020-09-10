import React, { useState } from "react";
import axios from "axios";
import HomeComment from "./HomeComment";
import "../../css/HomePage/HomeCommentBox.css";

function HomeCommentBox() {
  const [comment, setComment] = useState("");

  const commentPostRequest = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/comments", {
        comment,
      })
      .then((res) => {
        console.log("comments sent");
        HomeComment.getAllComments();
      })
      .catch((err) => {
        console.log("comments post request failed frontend");
      });
  };

  const handleInputComments = (e) => {
    e.preventDefault();
    setComment({
      comment: e.target.value,
    });
  };


  return (
    <div className="commentbox">
      <form onSubmit={commentPostRequest}>
        <div className="comment__post">
          <input
            type="text"
            className="timeline__commentBox"
            placeholder="Write a comment..."
            onChange={handleInputComments}
          />
          <button className="comment__send" onClick={commentPostRequest}>
            {" "}
            Send{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default HomeCommentBox;
