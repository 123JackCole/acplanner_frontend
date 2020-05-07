import React, { Component } from "react";
import { api } from "./services/api";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import NewUser from "./components/NewUser";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import BugsContainer from "./components/BugsContainer";
import FishContainer from "./components/FishContainer";
import FossilsContainer from "./components/FossilsContainer";
import VillagersContainer from "./components/VillagersContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: {
        user: {},
      },
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then((user) => {
        const updatedState = { ...this.state.auth, user: user };
        this.setState({ auth: updatedState });
      });
    }
  }

  login = (data) => {
    const updatedState = {
      ...this.state.auth,
      user: { id: data.id, username: data.username },
    };
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };

  newUser = (event) => {
    let newUser = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    api.auth.newUser(newUser).then((res) => {
      console.log(res);
      if (!res.error) {
        this.login(res);
        this.setState({ errors: false });
      } else {
        this.setState({ errors: true });
      }
    });
  };

  render() {
    return (
      <div>
        <Router>
          <header>
            <Navbar
              className="navbar"
              logout={this.logout}
              user={this.state.auth.user}
            />
          </header>
          <div>
            <Route exact path="/" render={(props) => <Landing {...props} />} />

            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} onLogin={this.login} />}
            />

            <Route
              exact
              path="/signup"
              render={(props) => (
                <NewUser
                  {...props}
                  appState={this.state}
                  onNewUser={this.newUser}
                />
              )}
            />

            <Route
              exact
              path="/dashboard"
              render={(props) => <Dashboard {...props} appState={this.state} />}
            />

            {/* <Route
              exact
              path="/calendar"
              render={(props) => (
                <Calendar
                  {...props}
                  user={this.state.auth.user}
                  onAddEvent={this.addEvent}
                />
              )}
            /> */}

            <Route path="/bugs" component={BugsContainer} />

            <Route path="/fish" component={FishContainer} />

            <Route path="/fossils" component={FossilsContainer} />

            <Route path="/villagers" component={VillagersContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
