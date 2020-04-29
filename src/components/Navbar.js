import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { NavBar } from "react-bootstrap";

class Navbar extends Component {
  render() {
    return (
      <div>
        <NavLink
          className="link"
          to="/dashboard"
          exact
          // style={link}
          // activeStyle={{
          // background: 'rgba(71, 3, 114, 0.836)'
          // }}
        >
          AC Planner
        </NavLink>
        <NavLink
          className="link"
          to="/bugs"
          exact
          // style={link}
          // activeStyle={{
          // background: 'rgba(71, 3, 114, 0.836)'
          // }}
        >
          Bugs
        </NavLink>

        <NavLink
          className="link"
          to="/fish"
          exact
          // style={link}
          // activeStyle={{
          // background: 'rgba(71, 3, 114, 0.836)'
          // }}
        >
          Fish
        </NavLink>

        <NavLink
          className="link"
          to="/fossils"
          exact
          // style={link}
          // activeStyle={{
          // background: 'rgba(71, 3, 114, 0.836)'
          // }}
        >
          Fossils
        </NavLink>

        <NavLink
          className="link"
          to="/villagers"
          exact
          // style={link}
          // activeStyle={{
          // background: 'rgba(71, 3, 114, 0.836)'
          // }}
        >
          Villagers
        </NavLink>

        {/* {!localStorage.getItem("token") ? null : (
          <NavLink
            className="link"
            to="/phenomena"
            exact
            // style={link}
            // activeStyle={{
            // background: 'rgba(71, 3, 114, 0.836)'
            // }}
          >
            {" "}
            Sky Phenomena
          </NavLink>
        )} */}

        {!localStorage.getItem("token") ? (
          <NavLink
            className="link"
            to="/login"
            exact
            // style={link}
            // activeStyle={{
            // background: 'rgba(71, 3, 114, 0.836)'
            // }}
          >
            {" "}
            Log In
          </NavLink>
        ) : (
          // <NavLink
          //   className="link"
          //   to="/calendar"
          //   exact
          //   // style={link}
          //   // activeStyle={{
          //   //     background: 'rgba(71, 3, 114, 0.836)'
          //   // }}
          // >
          //   {" "}
          //   My Calendar
          // </NavLink>
          null
        )}

        {!localStorage.getItem("token") ? (
          <NavLink
            className="link"
            to="/"
            exact
            // style={link}
            // activeStyle={{
            //     background: 'rgba(71, 3, 114, 0.836)'
            // }}
          >
            {" "}
            Home
          </NavLink>
        ) : (
          null
        )}

        {!!localStorage.getItem("token") ? (
          <NavLink
            className="link"
            to="/"
            exact
            // style={link}
            // activeStyle={{
            //     background: 'rgba(71, 3, 114, 0.836)'
            // }}
            onClick={this.props.logout}
          >
            {" "}
            Logout
          </NavLink>
        ) : null}
      </div>
    );
  }
}

export default Navbar;
