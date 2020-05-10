import React from "react";
import { NavLink } from "react-router-dom";

import AuthButton from '../pages/Authentication/AuthButton';

const Header = () => {
  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark ">
        <ul className="navbar-nav mr-md-auto">
          <li className="nav-item">
            <NavLink to="/Home" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" className="nav-link" activeClassName="active">
              About
            </NavLink>
          </li>
        </ul>

        <AuthButton/>
    </nav>
  );
};

export default Header;
