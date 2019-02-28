import React from "react";
import {Link} from "react-router-dom";

const ChallengeCard = props => {
  return (
    <Link to={`/challenge/${props.challenges.id}`} className="item">
      <div className="content">
        <h3 className="header">{props.challenges.title}</h3>
        <p className="description">{props.challenges.description}</p>
      </div>
    </Link>
  );
};

export default ChallengeCard;
