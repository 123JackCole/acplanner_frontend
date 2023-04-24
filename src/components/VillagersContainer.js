import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { api } from "../services/api";
import VillagersList from "./VillagersList";

function VillagersContainer() {
  const [villagers, setVillagers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/login");
    } else {
      api.auth.getCurrentUser().then((user) => {
        if (user.error) {
          history.push("/login");
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
            setVillagers(outerArray);
          });
        }
      });
    }
  }, [history]);

  return (
    <div>
      <Switch>
        {/* <Route
          path="/villagers/:name"
          render={(props) => {
            const name = props.match.params.name;
            let villager;
            villagers.forEach((array) => {
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
          render={() => <VillagersList villagers={villagers} />}
        />
      </Switch>
    </div>
  );
}

export default VillagersContainer;
