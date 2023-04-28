import React, { useState, useEffect } from "react";
import { api } from "./services/api";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import NewUser from "./components/NewUser";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import BugsContainer from "./components/BugsContainer";
import FishContainer from "./components/FishContainer";
import FossilsContainer from "./components/FossilsContainer";
import VillagersContainer from "./components/VillagersContainer";

function App() {
  const [auth, setAuth] = useState({ user: {} });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then((user) => {
        const updatedState = { ...auth, user: user };
        setAuth(updatedState);
      });
    }
  }, []);

  const login = (data) => {
    const updatedState = {
      ...auth,
      user: { id: data.id, username: data.username },
    };
    localStorage.setItem("token", data.jwt);
    setAuth(updatedState);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({ user: {} });
  };

  const newUser = (event, redirect) => {
    event.preventDefault();
    let newUser = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    api.auth.newUser(newUser).then((res) => {
      if (!res.error) {
        login(res);
        redirect();
      }
    });
  };

  return (
    <div>
      <Router>
        <HashRouter>
          <header>
            <Navbar className="navbar" logout={logout} user={auth.user} />
          </header>
          <div>
            <Route exact path="/#" render={(props) => <Landing {...props} />} />

            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} onLogin={login} />}
            />

            <Route
              exact
              path="/signup"
              render={(props) => (
                <NewUser
                  {...props}
                  appState={auth}
                  onNewUser={(event) => newUser(event, props.history.push)}
                />
              )}
            />

            <Route
              exact
              path="/dashboard"
              render={(props) => <Dashboard {...props} appState={auth} />}
            />

            <Route path="/bugs" component={BugsContainer} />

            <Route path="/fish" component={FishContainer} />

            <Route path="/fossils" component={FossilsContainer} />

            <Route path="/villagers" component={VillagersContainer} />
          </div>
        </HashRouter>
      </Router>
    </div>
  );
}

export default App;
