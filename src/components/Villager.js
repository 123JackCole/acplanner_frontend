import React, { Component } from "react";
import Modal from "./Modal";

class Villager extends Component {
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
          className="card-img-top img-responsive-villager"
          src={this.props.villager.image}
          alt={this.props.villager.name}
        />
        <div className="card-body d-flex flex-column">
          {this.props.villager.name !== "N/A" ? (
            <h4>{this.props.villager.name}</h4>
          ) : null}
          {this.props.villager.gender !== "N/A" ? (
            <div>Gender: {this.props.villager.gender}</div>
          ) : null}
          {this.props.villager.personality !== "N/A" ? (
            <div>Personality: {this.props.villager.personality}</div>
          ) : null}
          {this.props.villager.species !== "N/A" ? (
            <div>Species: {this.props.villager.species}</div>
          ) : null}
          {this.props.villager.birthday !== "N/A" ? (
            <div>Birthday: {this.props.villager.birthday}</div>
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
                    <img
                      src={this.props.villager.image}
                      alt={this.props.villager.name}
                    />
                  </div>
                  <div className="content">
                    <h5 className="header">{this.props.villager.name}</h5>
                    {this.props.villager.gender !== "N/A" ? (
                      <p>Gender: {this.props.villager.gender}</p>
                    ) : null}
                    {this.props.villager.personality !== "N/A" ? (
                      <p>Personality: {this.props.villager.personality}</p>
                    ) : null}
                    {this.props.villager.species !== "N/A" ? (
                      <p>Species: {this.props.villager.species}</p>
                    ) : null}
                    {this.props.villager.birthday !== "N/A" ? (
                      <p>Birthday: {this.props.villager.birthday}</p>
                    ) : null}
                    <div>
                      {this.props.villager.quote !== "N/A" ? (
                        <p>Quote: {this.props.villager.quote}</p>
                      ) : null}
                      {this.props.villager.sign !== "N/A" ? (
                        <p>Sign: {this.props.villager.sign}</p>
                      ) : null}
                      {this.props.villager.phrase !== "N/A" ? (
                        <p>Phrase: {this.props.villager.phrase}</p>
                      ) : null}
                      {this.props.villager.clothes !== "N/A" ? (
                        <p>Clothes: {this.props.villager.clothes}</p>
                      ) : null}
                      {this.props.villager.picture !== "N/A" ? (
                        <p>
                          Picture:{" "}
                          <img
                            src={this.props.villager.picture}
                            alt={this.props.villager.name}
                          />
                        </p>
                      ) : null}
                      {this.props.villager.siblings !== "N/A" ? (
                        <p>Siblings: {this.props.villager.siblings}</p>
                      ) : null}
                      {this.props.villager.goal !== "N/A" ? (
                        <p>Goal: {this.props.villager.goal}</p>
                      ) : null}
                      {this.props.villager.fear !== "N/A" ? (
                        <p>Fear: {this.props.villager.fear}</p>
                      ) : null}
                      {this.props.villager.favclothing !== "N/A" ? (
                        <p>
                          Favorite Clothing: {this.props.villager.favclothing}
                        </p>
                      ) : null}
                      {this.props.villager.leastfavclothing !== "N/A" ? (
                        <p>
                          Hated Clothes: {this.props.villager.leastfavclothing}
                        </p>
                      ) : null}
                      {this.props.villager.favcolor !== "N/A" ? (
                        <p>Favorite Color: {this.props.villager.favcolor}</p>
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

export default Villager;
