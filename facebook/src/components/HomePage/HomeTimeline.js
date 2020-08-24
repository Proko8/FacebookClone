import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/HomePage/HomeTimeline.css";

function Timeline() {
  const [posts, setPosts] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [post, setPost] = useState("");

  const postPostRequest = (e) => {
    e.preventDefault();
    // let post = this.state.post;
    // let firstname = this.state.firstname;
    axios
      .post("http://localhost:8080/api/posts", {
        firstname : firstname,
        post : post,
      })
      .then((res) => {
        console.log("post sent");
        getAllPosts();
      })
      .catch((err) => {
        console.log("posts post request failed frontend");
      });
  };

  const handleInputPost = (e) => {
    e.preventDefault();
    setFirstname({
      firstname : e.target.value,
    });
  };

  const handleInputPosts =(e) => {
    e.preventDefault();
    setPost({
      post : e.target.value,
    });
  };

  const getAllPosts = () => {
    axios
      .get("http://localhost:8080/api/posts/")
      .then((res) => {
        console.log(res.data);
        setPosts( res.data );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllPosts()
    }, []);

  return (
    <div className="timeline">
      <br></br>
      <form onSubmit={postPostRequest}>
        <div className="timeline__post">
          <input
            className="timeline__Name"
            type="text"
            placeholder="Your Name" //username wil be inserted here
            firstname="firstname"
            onChange={handleInputPost}
          />
          <input
            className="timeline__postbox"
            type="text"
            placeholder="What's on your mind, Paul?" //username wil be inserted here
            posts="posts"
            onChange={handleInputPosts}
          />
        </div>
        <div>
          <button
            className="timeline__postbutton"
            onClick={postPostRequest}
          >
            {" "}
            Post{" "}
          </button>
        </div>
      </form>

      <div className="timeline__posts">
        {posts.length > 0
          ? posts.map((value, index) => (
              <div className="timeline__timelineposts" key={index}>
                <div className="timeline__posts__name"> {value.firstname}</div>
                <div>{value.post}</div>
                <button className="timeline__lcs">Like</button>
                <button className="timeline__lcs">Comment</button>
                <button className="timeline__lcs">Share</button>
                <hr className="timeline__break"></hr>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
export default Timeline;
