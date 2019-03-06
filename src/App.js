import React, {Component} from "react";
import challenges from "./db/challenges";
import ChallengeList from "./components/ChallengeList";
import {Route} from "react-router-dom";
import Challenge from "./components/Challenge";

import Navbar from "./components/Navbar/Navbar";

/* 
1. Build a Nav bar that stay across all pages
2. Make each ChallengeCard a link that takes the user to an individual Challenge 
  - Should display title, description, difficulty, and author
3. {Stretch}
*/

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Navbar />
        <Route
          path="/"
          exact
          render={() => <ChallengeList challenges={challenges} />}
        />
        <Route
          path="/challenge/:id"
          exact
          render={props => (
            <Challenge
              {...props}
              challenge={challenges.find(el => el.id == props.match.params.id)}
            />
          )}
        />
      </div>
    );
  }
}

export default App;

// Comments Section .................................//

// It's like the cursors are building the app for me...
