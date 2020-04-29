import React, { Fragment } from "react";
import { api } from "../services/api";
import { Redirect } from "react-router-dom";

const AuthHOC = (WrappedComponent) => {
  return class AuthHOC extends React.Component {
    state = {
      authorized: false,
      response: false,
    };

    componentDidMount() {
      this.checkLogin();
    }

    checkLogin = () => {
      if (!localStorage.getItem("token")) {
        this.setState({
          authorized: false,
          response: true,
        });
      } else {
        api.auth.getCurrentUser().then((resp) => {
          if (resp.error) {
            this.setState({
              authorized: false,
              response: true,
            });
          } else {
            this.setState({
              authorized: true,
              response: true,
            });
          }
        });
      }
    };

    isAuthorized = () => {
      return this.state.authorized;
    };

    isNotAuthorized = () => {
      return !this.state.authorized && this.state.responseCollection;
    };

    render() {
      return (
        <div>
          {this.isAuthorized() ? (
            <WrappedComponent {...this.props} />
          ) : this.isNotAuthorized() ? (
            <Redirect to="/login" />
          ) : null}
        </div>
      );
    }
  };
};

export default AuthHOC;