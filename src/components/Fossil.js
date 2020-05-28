import React, { Component } from "react";
import Modal from "./Modal";

class Fossil extends Component {
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
        {this.props.fossil.image ? (
          <img
            className="card-img-top img-responsive-fossil"
            src={this.props.fossil.image}
            alt={this.props.fossil.name}
          />
        ) : null}
        <div className="card-body d-flex flex-column">
          {this.props.fossil.name !== "N/A" ? (
            <h4>{this.props.fossil.name}</h4>
          ) : null}
          {this.props.fossil.price !== "N/A" ? (
            <div>Price: {this.props.fossil.price}</div>
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
                  <div className="image">
                    <img
                      src={this.props.fossil.image}
                      alt={this.props.fossil.name}
                    />
                  </div>
                  <div className="content">
                    <div className="header">{this.props.fossil.name}</div>
                    {this.props.fossil.scientific_name !== "N/A" ? (
                      <div>
                        Scientific name: {this.props.fossil.scientific_name}
                      </div>
                    ) : null}
                    <div>
                      {this.props.fossil.price !== "N/A" ? (
                        <p>Price: {this.props.fossil.price}</p>
                      ) : null}
                      {this.props.fossil.sections !== "N/A" ? (
                        <p>Sections: {this.props.fossil.sections}</p>
                      ) : null}
                      {this.props.fossil.period !== "N/A" ? (
                        <p>Period: {this.props.fossil.period}</p>
                      ) : null}
                      {this.props.fossil.length !== "N/A" ? (
                        <p>Size: {this.props.fossil.length}</p>
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

export default Fossil;
