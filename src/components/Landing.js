import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <Link to="/login">
            <button className="btn btn-info btn-lg">Log In</button>
            <br></br>
          </Link>
          <Link to="/signup">
            <button className="btn btn-info btn-lg">Sign Up</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
