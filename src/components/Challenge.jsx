import React from "react";

export default ({ challenge }) => {
  console.log(challenge)
  // console.log(match.params.id);
  // const current = challenges.find(el => el.id == match.params.id );
  // console.log(current);
  return(
    <div>
      <h1>{ challenge.title }</h1>
      <p>{ challenge.description }</p>
      <p>{ challenge.difficulty }</p>
      <p>{ challenge.author }</p>
    </div>
  );
}