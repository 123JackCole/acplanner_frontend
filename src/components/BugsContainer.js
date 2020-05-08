import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { api } from "../services/api";
import BugsList from "./BugsList";

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
            let outerArray = [];
            let innerArray = [];
            let length = data.length + (4 - (data.length % 4));
            for (let i = 0; i < length; i++) {
              data[i] ? innerArray.push(data[i]) : innerArray.push(null);
              if (innerArray.length === 4) {
                outerArray.push(innerArray);
                innerArray = [];
              }
            }
            this.setState({
              bugs: outerArray,
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
          {/* <Route
            path="/bugs/:name"
            render={(props) => {

              const name = props.match.params.name;
              let bug;
              this.state.bugs.forEach((array) => {
                array.forEach((bg) => {
                  if (bg && bg.name === name) {
                    bug = bg;
                  }
                });
              });
              return bug ? <BugShow bug={bug} /> : <h1>Loading...</h1>;
            }}
          /> */}
          <Route
            path="/bugs"
            render={() => <BugsList bugs={this.state.bugs} />}
          />
        </Switch>
      </div>
    );
  }
}

export default BugsContainer;
