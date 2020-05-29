import React from "react";
import Tweets from "./tweets.js";

class Comment extends React.Component {
  render() {
    var allTweet = Tweets.tweets;
    var comments = allTweet.map((comment) => {
      return <li>{comment.text}</li>;
    });

    return (
      <div>
        <h3>{this.props.nameKey}</h3>
        <ul>{comments}</ul>
      </div>
    );
  }
}

export default Comment;
