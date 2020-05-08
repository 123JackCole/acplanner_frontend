import React from "react";

class NewUser extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        username: "",
        password: "",
      },
    };
  }

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({
      fields: newFields,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onNewUser(event, () => {
      // console.log("being redirected")
      this.props.history.push("/dashboard");
    });
    event.target.username.value = "";
    event.target.password.value = "";
  };

  render() {
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
              {this.props.appState.errors ? (
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
                <form id="event-form" className="" onSubmit={this.handleSubmit}>
                  <div className="text-right">
                    <label>Username</label>
                    <input
                      type="text"
                      // placeholder="username"
                      name="username"
                      value={this.state.fields.username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <br></br>
                  <div className="text-right">
                    <label>Password</label>
                    <input
                      type="password"
                      // placeholder="password"
                      name="password"
                      value={this.state.fields.password}
                      onChange={this.handleChange}
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
}

export default NewUser;
