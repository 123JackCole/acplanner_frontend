import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { api } from "../services/api";
import FossilsList from "./FossilsList";
import FossilShow from "./FossilShow";

class FossilContainer extends Component {
  constructor() {
    super();

    this.state = {
      fossils: [],
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
          api.fossils.getFossils().then((data) => {
            this.setState({
              fossils: data,
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
            path="/fossils/:name"
            render={(props) => {
              console.log(props.match);
              const name = props.match.params.name;
              const fossil = this.state.fossils.find(
                (fos) => fos.name === name
              );
              return fossil ? (
                <FossilShow fossil={fossil} />
              ) : (
                <h1>Loading...</h1>
              );
            }}
          />
          <Route
            path="/fossils"
            render={() => <FossilsList fossils={this.state.fossils} />}
          />
        </Switch>
      </div>
    );
  }
}

export default FossilContainer;
