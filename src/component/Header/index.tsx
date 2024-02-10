import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="header">
        <NavLink to={"/admin"}>
          <h2>admin</h2>
        </NavLink>
        <NavLink to={"/menu"}>
          <h2>menu</h2>
        </NavLink>
        <NavLink to={"/product"}>
          <h2>Edit</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
