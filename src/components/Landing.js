import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>AC Planner</h1>
        <div>
          <Link to="/login">
            <button>Log In</button>
            {/* <br> */}
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
            {/* <br> */}
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
