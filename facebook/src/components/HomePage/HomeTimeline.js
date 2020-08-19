import React from "react";
import axios from "axios";
import "../../css/HomePage/HomeTimeline.css";

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      firstname: "",
      post: "",
    };
  }

  postPostRequest = (e) => {
    e.preventDefault();
    let post = this.state.post;
    let firstname = this.state.firstname;
    axios
      .post("http://localhost:3008/api/posts", {
        firstname,
        post,
      })
      .then((res) => {
        console.log("post sent");
        this.getAllPosts();
      })
      .catch((err) => {
        console.log("posts post request failed frontend");
      });
  };

  handleInputPost = (e) => {
    e.preventDefault();
    this.setState({
      firstname: e.target.value,
    });
  };

  handleInputPosts = (e) => {
    e.preventDefault();
    this.setState({
      post: e.target.value,
    });
  };

  getAllPosts() {
    axios
      .get("http://localhost:3008/api/posts/")
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        this.setState({ posts: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.getAllPosts();
  }

  render() {
    return (
      <div className="timeline">
        <br></br>
        <form onSubmit={this.postPostRequest}>
          <div className="timeline__post">
            <input
              className="timeline__Name"
              type="text"
              placeholder="Your Name" //username wil be inserted here
              firstname="firstname"
              onChange={this.handleInputPost}
            />
            <input
              className="timeline__postbox"
              type="text"
              placeholder="What's on your mind, Paul?" //username wil be inserted here
              posts="posts"
              onChange={this.handleInputPosts}
            />
          </div>
          <div>
            <button
              className="timeline__postbutton"
              onClick={this.buttonClickListener}
            >
              {" "}
              Post{" "}
            </button>
          </div>
        </form>

        <div className="timeline__posts">
          {this.state.posts.length > 0
            ? this.state.posts.map((value, index) => (
                <div className="timeline__timelineposts" key={index}>
                  <div className="timeline__posts__name">
                    {" "}
                    {value.firstname}
                  </div>
                  <div>{value.post}</div>
                  <button className="timeline__lcs">Like</button>
                  <button className="timeline__lcs">Comment</button>
                  <button className="timeline__lcs">Share</button>
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}
export default Timeline;
