import React from "react";
import ReactDOM from "react-dom";

import Tweets from "./tweets.js";
import Tweet from "./tweet";

class App extends React.Component {
  render() {
    var test = Tweets.tweets[0].created_at;
    console.log(`test ${test}`);
    console.log(Tweets.tweets);
    console.log(Tweets.tweets[0].user.screen_name);
    console.log(Tweets.tweets.length);

    var allTweets = Tweets.tweets;
    var eachTweet = allTweets.map((tweet) => {
      return (
        <div>
          <h4>{tweet.user.screen_name}</h4>
          <p>{tweet.text}</p>
        </div>
      );
    });
    return (
      <div>
        tweets
        {eachTweet}
        <Tweet />
      </div>
    );
  }
}

const element = document.getElementById("app");

ReactDOM.render(<App />, element);

console.log("tweet react");
