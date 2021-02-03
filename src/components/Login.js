import React from "react";
import { api } from "../services/api";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
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

  handleSubmit = (e) => {
    e.preventDefault();
    api.auth.login(this.state.fields).then((res) => {
      // console.log(res);
      if (!res.error) {
        this.props.onLogin(res);
        this.props.history.push("/dashboard");
      } else {
        this.setState({ error: true });
      }
    });
  };

  render() {
    const { fields } = this.state;
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
              {this.state.error ? (
                <h3 className="small text-center">
                  Your password was incorrect. Please try again.
                </h3>
              ) : null}
              <div className="d-flex justify-content-center">
                <form onSubmit={this.handleSubmit} className="">
                  <div className="text-right">
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      // placeholder="username"
                      value={fields.username}
                      onChange={this.handleChange}
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
                      onChange={this.handleChange}
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
  }
}

export default Login;
