import React, { useState, useEffect } from "react";
import { api } from "../services/api";
import DailyEvents from "./DailyEventsContainer";
import Checklist from "./ChecklistContainer";

const Dashboard = ({ history }) => {
  const [checklist, setChecklist] = useState([]);
  const [events, setEvents] = useState({});

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/#");
    } else {
      api.auth.getCurrentUser().then((user) => {
        if (user.error) {
          history.push("/#");
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

            setChecklist(data);
          });

          api.events.getEventsToday().then((events) => {
            setEvents(events);
          });
        }
      });
    }
  }, [history]);

  return (
    <div className="row">
      <div className="col col-md-6">
        <div className="card h-100">
          <br></br>
          <h2 className="card-title text-center"> Current Events </h2>
          {events.message ? <DailyEvents events={events} /> : null}
        </div>
      </div>
      <div className="col col-md-6">
        <div className="card h-100">
          <br></br>
          <h2 className="card-title text-center"> Daily Checklist </h2>
          {checklist.id ? <Checklist checklist={checklist} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
