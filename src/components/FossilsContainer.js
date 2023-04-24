import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { api } from "../services/api";
import FossilsList from "./FossilsList";

const FossilContainer = (props) => {
  const [fossils, setFossils] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      props.history.push("/login");
    } else {
      api.auth.getCurrentUser().then((user) => {
        if (user.error) {
          props.history.push("/login");
        } else {
          api.fossils.getFossils().then((data) => {
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
            setFossils(outerArray);
          });
        }
      });
    }
  }, [props.history]);

  return (
    <div>
      <Switch>
        {/* <Route
            path="/fossils/:name"
            render={(props) => {
              const name = props.match.params.name;
              let fossil;
              fossils.forEach((array) => {
                array.forEach((fos) => {
                  if (fos && fos.name === name) {
                    fossil = fos;
                  }
                });
              });
              return fossil ? (
                <FossilShow fossil={fossil} />
              ) : (
                <h1>Loading...</h1>
              );
            }}
          /> */}
        <Route
          path="/fossils"
          render={() => <FossilsList fossils={fossils} />}
        />
      </Switch>
    </div>
  );
};

export default FossilContainer;
