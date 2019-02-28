import React from "react";

const ChallengeCard = props => {
  return (
    <div>
      <h3>{props.challenges.title}</h3>
      <p>{props.challenges.description}</p>
    </div>
  );
};

export default ChallengeCard;
