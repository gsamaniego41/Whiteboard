import React from "react";
import ChallengeView from "./ChallengeView";

const ChallengeList = props => {
  return (
    <div>
      {props.challenges.map(challenge => <ChallengeView challenges={challenge} key={challenge.id} />)}
    </div>
  );
};

export default ChallengeList;
