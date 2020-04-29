import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { api } from "../services/api";
import BugsList from "./BugsList";
import BugShow from "./BugShow";

class BugsContainer extends Component {
  constructor() {
    super();

    this.state = {
      bugs: [],
    };

  }

  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    } else {
      api.auth.getCurrentUser().then((user) => {
        if (user.error) {
          this.props.history.push("/login");
        } else {
          api.bugs.getBugs().then((data) => {
            this.setState({
              bugs: data,
            });
          });
        }
      });
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/bugs/:name"
            render={(props) => {
                console.log(props.match)
              const name = props.match.params.name;
              const bug = this.state.bugs.find((bg) => bg.name === name);
              return bug ? <BugShow bug={bug} /> : <h1>Loading...</h1>;
            }}
          />
          <Route
            path="/bugs"
            render={() => (
              <BugsList
                bugs={this.state.bugs}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BugsContainer;
