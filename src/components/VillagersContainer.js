import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { api } from "../services/api";
import VillagersList from "./VillagersList";
import VillagerShow from "./VillagerShow";

class VillagersContainer extends Component {
  constructor() {
    super();

    this.state = {
      villagers: [],
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
          api.villagers.getVillagers().then((data) => {
            this.setState({
              villagers: data,
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
            path="/villagers/:name"
            render={(props) => {
              console.log(props.match);
              const name = props.match.params.name;
              const villager = this.state.villagers.find((vil) => vil.name === name);
              return villager ? <VillagerShow villager={villager} /> : <h1>Loading...</h1>;
            }}
          />
          <Route
            path="/villagers"
            render={() => <VillagersList villagers={this.state.villagers} />}
          />
        </Switch>
      </div>
    );
  }
}

export default VillagersContainer;
