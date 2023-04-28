import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      {isAuthenticated ? (
        <NavLink
          className="navbar-brand d-none d-lg-inline-block"
          to="/dashboard"
          exact
        >
          AC Planner
        </NavLink>
      ) : (
        <NavLink
          className="navbar-brand d-none d-lg-inline-block"
          to="/"
          exact
        >
          AC Planner
        </NavLink>
      )}

      <div className="navbar-nav ml-auto flex-nowrap" id="myNavbar">
        <NavLink className="nav-link" to="/bugs" exact>
          Bugs
        </NavLink>

        <NavLink className="nav-link" to="/fish" exact>
          Fish
        </NavLink>

        <NavLink className="nav-link" to="/fossils" exact>
          Fossils
        </NavLink>

        <NavLink className="nav-link" to="/villagers" exact>
          Villagers
        </NavLink>

        {!isAuthenticated ? (
          <NavLink className="nav-link" to="/login" exact>
            {" "}
            Log In
          </NavLink>
        ) : null}

        {isAuthenticated ? (
          <NavLink
            className="nav-link"
            to="/"
            exact
            onClick={props.logout}
          >
            {" "}
            Logout
          </NavLink>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
