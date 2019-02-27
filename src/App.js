import React, {Component} from "react";
import challenges from './db/challenges';
import ChallengeList from './components/ChallengeList';
import { Route } from 'react-router-dom';
 
/* 
1. Setup ReactRouter (it's already installed)
2. Build a ChallengeList component that displays a list of individual ChallengeView component 
  - Build a Route to ChallengeList
  - For now, ChallengeView will only display title, description, and difficulty
  - data in db folder
3. {Stretch}
4. something
*/

class App extends Component {
  render() {
    return (
      <div>
        <h1>Whiteboard App</h1>
        <Route path='/' exact render={ () => <ChallengeList challenges={challenges} />} />
      </div>
    );
  }
}

export default App;
