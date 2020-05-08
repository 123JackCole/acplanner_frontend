import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { api } from "../services/api";
import VillagersList from "./VillagersList";

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
              villagers: outerArray,
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
            path="/villagers/:name"
            render={(props) => {
              const name = props.match.params.name;
              let villager;
              this.state.villagers.forEach((array) => {
                array.forEach((vil) => {
                  if (vil && vil.name === name) {
                    villager = vil;
                  }
                });
              });
              return villager ? <VillagerShow villager={villager} /> : <h1>Loading...</h1>;
            }}
          /> */}
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
