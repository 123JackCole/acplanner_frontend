import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-custom">
        {localStorage.getItem("token") ? (
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

          {!localStorage.getItem("token") ? (
            <NavLink className="nav-link" to="/login" exact>
              {" "}
              Log In
            </NavLink>
          ) : // <NavLink
          //   className="link"
          //   to="/calendar"
          //   exact
          // >
          //   {" "}
          //   My Calendar
          // </NavLink>
          null}

          {!!localStorage.getItem("token") ? (
            <NavLink
              className="nav-link"
              to="/"
              exact
              onClick={this.props.logout}
            >
              {" "}
              Logout
            </NavLink>
          ) : null}
        </div>
      </nav>
    );
  }
}

export default Navbar;
