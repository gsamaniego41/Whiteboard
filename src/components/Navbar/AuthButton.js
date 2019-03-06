import React from "react";

const AuthButton = props => {
  return (
    <div className="ui primary button" onClick={props.authHandler}>
      {`${!props.authStatus ? "Login" : "Logout"}`}
    </div>
  );
};

export default AuthButton;
