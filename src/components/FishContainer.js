import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { api } from "../services/api";
import FishList from "./FishList";

const FishContainer = ({ history }) => {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/login");
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
        setFishes(outerArray);
      });
    }
  }, [history]);

  return (
    <div>
      <Switch>
        {/* <Route
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
          /> */}
        <Route path="/fish" render={() => <FishList fishes={fishes} />} />
      </Switch>
    </div>
  );
};

export default FishContainer;
