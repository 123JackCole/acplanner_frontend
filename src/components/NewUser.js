import React, { useState } from "react";

function NewUser(props) {
  const [fields, setFields] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const newFields = { ...fields, [e.target.name]: e.target.value };
    setFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onNewUser(event, () => {
      props.history.push("/dashboard");
    });
    event.target.username.value = "";
    event.target.password.value = "";
  };

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
            {props.appState.errors ? (
              <h3 className="small text-center">
                This username is taken. Please try again.
              </h3>
            ) : (
              <h3 className="small text-center">
                Enter the information below to create an account.
              </h3>
            )}
            <br></br>
            <div className="d-flex justify-content-center">
              <form id="event-form" className="" onSubmit={handleSubmit}>
                <div className="text-right">
                  <label>Username</label>
                  <input
                    type="text"
                    // placeholder="username"
                    name="username"
                    value={fields.username}
                    onChange={handleChange}
                  />
                </div>
                <br></br>
                <div className="text-right">
                  <label>Password</label>
                  <input
                    type="password"
                    // placeholder="password"
                    name="password"
                    value={fields.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-center">
                  <br></br>
                  <input type="submit" className="btn btn-info"></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
