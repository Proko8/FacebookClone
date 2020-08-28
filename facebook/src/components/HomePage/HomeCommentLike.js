import React, { useState } from "react";
import "../../css/HomePage/HomeCommentLike.css";

function HomeCommentLike() {
  const [commentLike, setCommentLike] = useState(false);
  const [totalcommentLike, setTotalcommentLike] = useState(0);

  const commentLiked = () => {
    if (commentLike === false) {
      setCommentLike(true);
      setTotalcommentLike(totalcommentLike + 1);
    } else {
      setCommentLike(false);
      setTotalcommentLike(totalcommentLike - 1);
    }
  };

  return (
    <div className="HomeCommentLike">
      <div>
        {commentLike === false ? (
          <button
            className="HomeCommentLike__likebutton"
            onClick={commentLiked}
          >
            {/* <img
                className="HomeCommentLike__thumb"
                src="https://spng.pinpng.com/pngs/s/41-415348_facebook-dislike-transparent-thumbs-down-vector-icon-facebook.png"
              alt=""
              /> */}
            Like
          </button>
        ) : (
          <button
            className="HomeCommentLike__likebutton2"
            onClick={commentLiked}
          >
            {/* <img
                className="HomeCommentLike__thumbsUp"
                src="https://www.clipartkey.com/mpngs/m/5-55669_blue-thumbs-up-icon.png"
                alt=""
              /> */}
            Like
          </button>
        )}
      </div>
      {commentLike === false ? ("") : (
        <div className="HomeCommentLike__liked">
          
          <img
            className="HomeCommentLike__thumbsUp"
            src="https://www.clipartkey.com/mpngs/m/5-55669_blue-thumbs-up-icon.png"
            alt=""
          />{totalcommentLike}{" "}
        </div>)
      }
    </div>
  );
}
export default HomeCommentLike;
