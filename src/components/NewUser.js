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
    this.props.onNewUser(event);
    event.target.username.value = "";
    event.target.password.value = "";
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div id="signup">
        {this.props.appState.errors ? (
          <h3 className="small text-center">
            This username is taken. Please try again.
          </h3>
        ) : (
          <h3 className="small text-center">
            Enter the information below to create an account.
          </h3>
        )}
        <div className="d-flex justify-content-center">
          <form id="event-form" className="" onSubmit={this.handleSubmit}>
            <div className="">
              <label>Username</label>
              <input
                type="text"
                placeholder="username"
                name="username"
                value={this.state.fields.username}
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <div className="">
              <label>Password</label>
              <input
                type="password"
                placeholder="password"
                name="password"
                value={this.state.fields.password}
                onChange={this.handleChange}
              />
            </div>
            <input type="submit" className="btn btn-info"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default NewUser;
