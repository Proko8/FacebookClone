import React from "react";
import axios from "axios";

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      firstname: "",
      post: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let post = this.state.post;
    let firstname = this.state.firstname;
    axios
      .post("/api/Posts/", { post, firstname })
      .then((res) => {
        console.log("post sent");
        this.changeHandler();
      })
      .catch((err) => {
        console.log("error on postfront");
      });
  };

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      firstname: e.target.value,
    });
  };

  handleInputChanges = (e) => {
    e.preventDefault();
    this.setState({
      post: e.target.value,
    });
  };

  changeHandler() {
    axios
      .get("/api/Posts/")
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        this.setState({ posts: data });
        console.log("posts get request worked");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.changeHandler();
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="What's on your mind, INSERT NAME HERE"
              posts="posts"
              onChange={this.handleInputChanges}
            />
          </p>
          <p>
            <button onClick={this.buttonClickListener}> Post </button>
          </p>
        </form>

        <div>
          {this.state.posts.length > 0
            ? this.state.posts.map((value, index) => (
                <div key={index}>
                  <div> {value.firstname}</div>
                  <div>{value.posts}</div>
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}
export default Timeline;
