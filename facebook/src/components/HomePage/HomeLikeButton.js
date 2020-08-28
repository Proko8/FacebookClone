import React, { useState } from "react";
import "../../css/HomePage/HomeLikeButton.css";

function HomeLikeButton() {
  const [like, setLike] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);

  const liked = () => {
    if (like === false) {
      setLike(true);
      setTotalLikes(totalLikes + 1);
    } else {
      setLike(false);
      setTotalLikes(totalLikes - 1);
    }
  };

  return (
    <div>
      <div className="likebutton__liked">{`${totalLikes} People like this.`}</div>
      <div>
        {like === false ? (
          <button className="likebutton__likebutton" onClick={liked}>
            <img
              className="likebutton__thumb"
              src="https://spng.pinpng.com/pngs/s/41-415348_facebook-dislike-transparent-thumbs-down-vector-icon-facebook.png"
            alt=""
            />
            Like
          </button>
        ) : (
          <button className="likebutton__likebutton2" onClick={liked}>
            <img
              className="likebutton__thumbsUp"
              src="https://www.clipartkey.com/mpngs/m/5-55669_blue-thumbs-up-icon.png"
              alt=""
            />
            Like
          </button>
        )}
      </div>
    </div>
  );
}

export default HomeLikeButton;
