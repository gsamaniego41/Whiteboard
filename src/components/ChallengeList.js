import React from "react";
import ChallengeCard from "./ChallengeCard";

const ChallengeList = props => {
  return (
    <div>
      {props.challenges.map(challenge => (
        <ChallengeCard challenges={challenge} key={challenge.id} />
      ))}
    </div>
  );
};

export default ChallengeList;
