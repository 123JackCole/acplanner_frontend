import React from "react";

class NewUser extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onNewUser(event);
    event.target.username.value = "";
    event.target.password.value = "";
    this.props.history.push("/dashboard");  // CHANGE
  };

  render() {
    return (
      <div id="signup">
        {this.props.appState.errors ? (
          <h3 style={{ color: "white" }}>
            This username is taken. Please try again.
          </h3>
        ) : (
          <h3>Enter the information below to create an account.</h3>
        )}
        <form id="event-form" onSubmit={this.handleSubmit}>
          <label>Username</label>
          <br></br>
          <input type="text" placeholder="username" name="username" />
          <br></br>
          <br></br>
          <label>Password</label>
          <br></br>
          <input type="password" placeholder="password" name="password" />
          <br></br>
          <br></br>
          <br></br>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default NewUser;