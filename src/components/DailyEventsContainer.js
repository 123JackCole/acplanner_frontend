import React, { Component } from "react";
import Event from "./Event";

class DailyEvents extends Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      events: [],
      images: [],
    };
  }

  componentDidMount() {
    let message = this.props.events.message;
    let images = this.props.events.villager_images;

    let events = this.props.events.events.map((event) => {
      if (event.includes("birthday")) {
        return <Event event={event} images={images} key={event} />;
      } else {
        return <Event event={event} key={event} />;
      }
    });

    this.setState({
      message,
      events,
      images,
    });
  }

  render() {
    return (
      <div>
        <hr />
        <h4 className="text-center">{this.state.message}</h4>
        <h4>{this.state.events}</h4>
      </div>
    );
  }
}

export default DailyEvents;
