import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <div className="logo">
        <Link to={"/"}>Tasks</Link>
      </div>
      <div className="create">
        <Link to={"/Create"}>Create</Link>
      </div>
    </div>
  );
}

export default Nav;
