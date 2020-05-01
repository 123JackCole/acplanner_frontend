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
      api.fish.getFish().then((data) => {
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
          fishes: outerArray,
        });
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
              const name = props.match.params.name;
              let fish;
              this.state.fishes.forEach((array) => {
                array.forEach((fsh) => {
                  if (fsh && fsh.name === name) {
                    fish = fsh;
                  }
                });
              });
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
