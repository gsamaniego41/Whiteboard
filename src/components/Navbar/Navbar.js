import React from "react";
import {Link} from "react-router-dom";

import AuthButton from "./AuthButton";

const Navbar = props => {
  return (
    <div className="ui secondary menu">
      <Link to="/" className="item active">
        <i className="code icon large" />
        Whiteboard
      </Link>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon" />
          </div>
        </div>
        {/* <Link to="/"> */}
        <AuthButton
          authHandler={props.authHandler}
          authStatus={props.authStatus}
        />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
