import React, { Component } from "react";
import Modal from "./Modal";

class Bug extends Component {
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
          src={this.props.bug.image}
          alt={this.props.bug.name}
        />
        <div className="card-body d-flex flex-column">
          {this.props.bug.name !== "N/A" ? (
            <h4 className="card-title">{this.props.bug.name}</h4>
          ) : null}
          {this.props.bug.location !== "N/A" ? (
            <p className="card-text">Location: {this.props.bug.location}</p>
          ) : null}
          {this.props.bug.price !== "N/A" ? (
            <p className="card-text">Price: {this.props.bug.price}</p>
          ) : null}
          {this.props.bug.time_day !== "N/A" ? (
            <p className="card-text">Time: {this.props.bug.time_day}</p>
          ) : null}
          {this.props.bug.time_year !== "N/A" ? (
            <p className="card-text">Months: {this.props.bug.time_year}</p>
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
                    <img src={this.props.bug.image} alt={this.props.bug.name} />
                  </div>
                  <div>
                    <div>{this.props.bug.name}</div>
                    {this.props.bug.scientific_name !== "N/A" ? (
                      <div>
                        Scientific name: {this.props.bug.scientific_name}
                      </div>
                    ) : null}
                    {this.props.bug.family !== "N/A" ? (
                      <div>
                        Scientific family: {this.props.bug.family}
                      </div>
                    ) : null}
                    <br></br>
                    <div>
                      {this.props.bug.location !== "N/A" ? (
                        <p>Location: {this.props.bug.location}</p>
                      ) : null}
                      {this.props.bug.price !== "N/A" ? (
                        <p>Price: {this.props.bug.price}</p>
                      ) : null}
                      {this.props.bug.time_day !== "N/A" ? (
                        <p>Time: {this.props.bug.time_day}</p>
                      ) : null}
                      {this.props.bug.time_year !== "N/A" ? (
                        <p>Season: {this.props.bug.time_year}</p>
                      ) : null}
                      {this.props.bug.size !== "N/A" ? (
                        <p>Size: {this.props.bug.size}</p>
                      ) : null}
                      {this.props.bug.rarity !== "N/A" ? (
                        <p>Rarity: {this.props.bug.rarity}</p>
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

export default Bug;
