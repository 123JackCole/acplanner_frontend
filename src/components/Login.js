import React, { useState, useEffect } from "react";
import { api } from "../services/api";

const Login = (props) => {
  const [error, setError] = useState(false);
  const [fields, setFields] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const newFields = { ...fields, [e.target.name]: e.target.value };
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.auth.login(fields).then((res) => {
      // console.log(res);
      if (!res.error) {
        props.onLogin(res);
        props.history.push("/dashboard");
      } else {
        setError(true);
      }
    });
  };

  useEffect(() => {
    return () => {
      setError(false);
      setFields({
        username: "",
        password: "",
      });
    };
  }, []);

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
            {error ? (
              <h3 className="small text-center">
                Your password was incorrect. Please try again.
              </h3>
            ) : null}
            <div className="d-flex justify-content-center">
              <form onSubmit={handleSubmit} className="">
                <div className="text-right">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    // placeholder="username"
                    value={fields.username}
                    onChange={handleChange}
                  />
                </div>
                <br></br>
                <div className="text-right">
                  <label>Password</label>
                  <input
                    name="password"
                    type="password"
                    // placeholder="password"
                    value={fields.password}
                    onChange={handleChange}
                  />
                </div>
                <br></br>
                <div className="text-center">
                  <button type="submit" className="btn btn-info ">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
