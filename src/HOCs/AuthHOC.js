import React, { useState, useEffect } from "react";
import { api } from "../services/api";
import { Redirect } from "react-router-dom";

const AuthHOC = (WrappedComponent) => {
  const AuthWrapper = (props) => {
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
      checkLogin();
    }, []);

    const checkLogin = () => {
      if (!localStorage.getItem("token")) {
        setAuthorized(false);
      } else {
        api.auth.getCurrentUser().then((resp) => {
          if (resp.error) {
            setAuthorized(false);
          } else {
            setAuthorized(true);
          }
        });
      }
    };

    return authorized ? <WrappedComponent {...props} /> : <Redirect to="/login" />;
  };

  return AuthWrapper;
};

export default AuthHOC;
