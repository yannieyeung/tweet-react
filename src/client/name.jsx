import React from "react";
import Tweets from "./tweets.js";
import Comment from "./comment";

class Name extends React.Component {
  render() {
    var allTweet = Tweets.tweets;
    var name = allTweet.map((username) => {
      return <Comment nameKey={username.user.screen_name} />;
    });

    return <div>{name}</div>;
  }
}

export default Name;
