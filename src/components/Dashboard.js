import React, { Component } from "react";
import { api } from "../services/api";
import DailyEvents from "./DailyEventsContainer";
import Checklist from "./ChecklistContainer";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      checklist: [],
      events: {},
      //   displayToggle: 'Fish'
    };
  }

  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/");
    } else {
      api.auth.getCurrentUser().then((user) => {
        if (user.error) {
          this.props.history.push("/");
        } else {
          api.checklists.getChecklist(user.id).then((data) => {
            let string = data.checked_statuses;

            string = string.slice(1, string.length - 1);

            const outerArray = string.split("][").map((innerArray) => {
              return innerArray.split(",").map((word) => {
                return word === "true";
              });
            });

            data = { ...data, checked_statuses: outerArray };

            this.setState({
              checklist: data,
            });
          });

          api.events.getEventsToday().then((events) => {
            this.setState({
              events,
            });
          });
        }
      });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col col-md-6">
          <div className="card h-100">
            <br></br>
            <h2 className="card-title text-center"> Current Events </h2>
            {this.state.events.message ? (
              <DailyEvents events={this.state.events} />
            ) : null}
          </div>
        </div>
        <div className="col col-md-6">
          <div className="card h-100">
            <br></br>
            <h2 className="card-title text-center"> Daily Checklist </h2>
            {this.state.checklist.id ? (
              <Checklist checklist={this.state.checklist} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
