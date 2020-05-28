import React, { Component } from "react";
import Modal from "./Modal";

class Fish extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  toggleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="card rounded mb-4 box-shadow h-100">
        <img
          className="card-img-top"
          src={this.props.fish.image}
          alt={this.props.fish.name}
        />
        <div className="card-body d-flex flex-column">
          {this.props.fish.name !== "N/A" ? (
            <h4>{this.props.fish.name}</h4>
          ) : null}
          {this.props.fish.location !== "N/A" ? (
            <div>Location: {this.props.fish.location}</div>
          ) : null}
          {this.props.fish.price !== "N/A" ? (
            <div>Price: {this.props.fish.price}</div>
          ) : null}
          {this.props.fish.time_day !== "N/A" ? (
            <div>Time: {this.props.fish.time_day}</div>
          ) : null}
          {this.props.fish.time_year !== "N/A" ? (
            <div>Months: {this.props.fish.time_year}</div>
          ) : null}
          {this.props.fish.shadow !== "N/A" ? (
            <div>Shadow: {this.props.fish.shadow}</div>
          ) : null}
          <button
            className="mt-auto btn btn-sm btn-block btn-outline-info"
            data-toggle="modal"
            onClick={this.toggleModal}
          >
            More Info
          </button>
        </div>
        <div>
          <Modal show={this.state.show}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="card">
                  <div className="image text-center">
                    <img src={this.props.fish.image} alt={this.props.fish.name} />
                  </div>
                  <div className="content">
                    <div className="header">{this.props.fish.name}</div>
                    {this.props.fish.scientific_name !== "N/A" ? (
                      <div className="meta">
                        Scientific name: {this.props.fish.scientific_name}
                      </div>
                    ) : null}
                    {this.props.fish.family !== "N/A" ? (
                      <div>
                        Scientific family: {this.props.fish.family}
                      </div>
                    ) : null}
                    <div>
                      {this.props.fish.location !== "N/A" ? (
                        <p>Location: {this.props.fish.location}</p>
                      ) : null}
                      {this.props.fish.price !== "N/A" ? <p>Price: {this.props.fish.price}</p> : null}
                      {this.props.fish.time_day !== "N/A" ? (
                        <p>Time: {this.props.fish.time_day}</p>
                      ) : null}
                      {this.props.fish.time_year !== "N/A" ? (
                        <p>Season: {this.props.fish.time_year}</p>
                      ) : null}
                      {this.props.fish.size !== "N/A" ? <p>Size: {this.props.fish.size}</p> : null}
                      {this.props.fish.shadow !== "N/A" ? <div>Shadow: {this.props.fish.shadow}</div> : null}
                      {this.props.fish.rarity !== "N/A" ? (
                        <p>Rarity: {this.props.fish.rarity}</p>
                      ) : null}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={this.toggleModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Fish;
