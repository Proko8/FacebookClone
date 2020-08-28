import React, { useState, useEffect } from "react";
import HomeCommentLike from "./HomeCommentLike";
import axios from "axios";
import "../../css/HomePage/HomeComment.css";

function HomeComment() {
    const [comments, setComments] = useState([]);

  const getAllComments = () => {
    axios
      .get("http://localhost:8080/api/comments/")
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
    <div>
      <div className="comment">
        {comments.length > 0
          ? comments.map((value, index) => (
              <div key={index}>
                <div className="comment__comments"> {value.comment}</div>
                <hr className="comment__break"></hr>
                <HomeCommentLike />
              </div>
             
            ))
          : null}
      </div>
    </div>
  );
}

export default HomeComment;
