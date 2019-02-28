import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
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
        <Link to="/" className="ui primary button">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
