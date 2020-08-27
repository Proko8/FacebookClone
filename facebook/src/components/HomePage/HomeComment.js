import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/HomePage/HomeComment.css"

function HomeComment() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const commentPostRequest = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/posts", {
        comment,
      })
      .then((res) => {
        console.log("comments sent");
        getAllComments();
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

  const getAllComments = () => {
    axios
      .get("http://localhost:8080/api/posts/")
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <div className="comment">
      {/* {comments.length > 0
        ? comments.map((value, index) => ( */}
            <form onSubmit={commentPostRequest}>
              <div className="timeline__post">
                <input
                  type="text"
                  className="timeline__commentBox"
                  placeholder="Write a comment..."
                  onChange={handleInputComments}
                />
                <button
                  className="comment__button"
                  onClick={commentPostRequest}
                >
                  {" "}
                  Send{" "}
                </button>
              </div>
            </form>
          {/* ))
        : null} */}
    </div>
  );
}

export default HomeComment;
