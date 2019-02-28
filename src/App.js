import React, {Component} from "react";
import challenges from "./db/challenges";
import ChallengeList from "./components/ChallengeList";
import {Route} from "react-router-dom";

/* 
1. Build a Nav bar that stay across all pages
2. Make each ChallengeCard a link that takes the user to an individual Challenge 
  - Should display title, description, difficulty, and author
3. {Stretch}
*/

class App extends Component {
  render() {
    return (
      <div>
        <h1>Whiteboard App</h1>
        <Route
          path="/"
          exact
          render={() => <ChallengeList challenges={challenges} />}
        />
      </div>
    );
  }
}

export default App;
