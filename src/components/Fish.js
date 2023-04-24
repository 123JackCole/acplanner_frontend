import React, { useState } from "react";
import Modal from "./Modal";

const Fish = (props) => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <div className="card rounded mb-4 box-shadow h-100">
      <img
        className="card-img-top img-responsive-fish"
        src={props.fish.image}
        alt={props.fish.name}
        style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }}
      />
      <div className="card-body d-flex flex-column">
        {props.fish.name !== "N/A" ? <h4>{props.fish.name}</h4> : null}
        {props.fish.location !== "N/A" ? (
          <div>Location: {props.fish.location}</div>
        ) : null}
        {props.fish.price !== "N/A" ? (
          <div>Price: {props.fish.price}</div>
        ) : null}
        {props.fish.time_day !== "N/A" ? (
          <div>Time: {props.fish.time_day}</div>
        ) : null}
        {props.fish.time_year !== "N/A" ? (
          <div>Months: {props.fish.time_year}</div>
        ) : null}
        {props.fish.shadow !== "N/A" ? (
          <div>Shadow: {props.fish.shadow}</div>
        ) : null}
        <button
          className="mt-auto btn btn-sm btn-block btn-outline-info"
          data-toggle="modal"
          onClick={toggleModal}
        >
          More Info
        </button>
      </div>
      <div>
        <Modal show={show}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="card">
                <div className="image text-center">
                  <img src={props.fish.image} alt={props.fish.name} />
                </div>
                <div className="content">
                  <div className="header">{props.fish.name}</div>
                  {props.fish.scientific_name !== "N/A" ? (
                    <div className="meta">
                      Scientific name: {props.fish.scientific_name}
                    </div>
                  ) : null}
                  {props.fish.family !== "N/A" ? (
                    <div>Scientific family: {props.fish.family}</div>
                  ) : null}
                  <div>
                    {props.fish.location !== "N/A" ? (
                      <p>Location: {props.fish.location}</p>
                    ) : null}
                    {props.fish.price !== "N/A" ? (
                      <p>Price: {props.fish.price}</p>
                    ) : null}
                    {props.fish.time_day !== "N/A" ? (
                      <p>Time: {props.fish.time_day}</p>
                    ) : null}
                    {props.fish.time_year !== "N/A" ? (
                      <p>Season: {props.fish.time_year}</p>
                    ) : null}
                    {props.fish.size !== "N/A" ? (
                      <p>Size: {props.fish.size}</p>
                    ) : null}
                    {props.fish.shadow !== "N/A" ? (
                      <div>Shadow: {props.fish.shadow}</div>
                    ) : null}
                    {props.fish.rarity !== "N/A" ? (
                      <p>Rarity: {props.fish.rarity}</p>
                    ) : null}
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={toggleModal}
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

export default Fish;
