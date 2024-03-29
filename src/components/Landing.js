import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className="full-width-div"
      style={{
        backgroundImage: "url(https://i.redd.it/pqkhcwcsp5x41.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginTop: "-20px",
      }}
    >
      <div className="row h-75 justify-content-center">
        <div className="col-4 align-self-center d-flex justify-content-center">
          <div className="card card-block d-table-cell mx-auto">
            <Link to="/login">
              <button className="btn btn-info btn-lg w-100">Log In</button>
            </Link>
            <br></br>
            <br></br>
            <Link to="/signup">
              <button className="btn btn-info btn-lg w-100" >Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
