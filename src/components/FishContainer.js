import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { api } from "../services/api";
import FishList from "./FishList";
import FishShow from "./FishShow";

class FishContainer extends Component {
  constructor() {
    super();

    this.state = {
      fishes: [],
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
          api.fish.getFish().then((data) => {
            this.setState({
              fishes: data,
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
            path="/fish/:name"
            render={(props) => {
              console.log(props.match);
              const name = props.match.params.name;
              const fish = this.state.fishes.find((fsh) => fsh.name === name);
              return fish ? <FishShow fish={fish} /> : <h1>Loading...</h1>;
            }}
          />
          <Route
            path="/fish"
            render={() => <FishList fishes={this.state.fishes} />}
          />
        </Switch>
      </div>
    );
  }
}

export default FishContainer;
