import React from "react";
import ChallengeCard from "./ChallengeCard";

const ChallengeList = props => {
  return (
    <div className="ui divided items">
      {!props.authStatus
        ? null
        : props.challenges.map(challenge => (
            <ChallengeCard challenges={challenge} key={challenge.id} />
          ))}
    </div>
  );
};

export default ChallengeList;
