import React, { useState } from "react";
import Modal from "./Modal";

const Bug = ({ bug }) => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <div className="card rounded mb-4 box-shadow h-100">
      { bug.image === "N/A" ? null : <img
        className="card-img-top img-responsive-bug"
        src={bug.image}
        alt={bug.name}
        style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }}
      />}
      <div className="card-body d-flex flex-column">
        {bug.name !== "N/A" ? (
          <h4 className="card-title">{bug.name}</h4>
        ) : null}
        {bug.location !== "N/A" ? (
          <p className="card-text">Location: {bug.location}</p>
        ) : null}
        {bug.price !== "N/A" ? (
          <p className="card-text">Price: {bug.price}</p>
        ) : null}
        {bug.time_day !== "N/A" ? (
          <p className="card-text">Time: {bug.time_day}</p>
        ) : null}
        {bug.time_year !== "N/A" ? (
          <p className="card-text">Months: {bug.time_year}</p>
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
                  <img src={bug.image} alt={bug.name} />
                </div>
                <div>
                  <div>{bug.name}</div>
                  {bug.scientific_name !== "N/A" ? (
                    <div>
                      Scientific name: {bug.scientific_name}
                    </div>
                  ) : null}
                  {bug.family !== "N/A" ? (
                    <div>Scientific family: {bug.family}</div>
                  ) : null}
                  <br />
                  <div>
                    {bug.location !== "N/A" ? (
                      <p>Location: {bug.location}</p>
                    ) : null}
                    {bug.price !== "N/A" ? (
                      <p>Price: {bug.price}</p>
                    ) : null}
                    {bug.time_day !== "N/A" ? (
                      <p>Time: {bug.time_day}</p>
                    ) : null}
                    {bug.time_year !== "N/A" ? (
                      <p>Season: {bug.time_year}</p>
                    ) : null}
                    {bug.size !== "N/A" ? (
                      <p>Size: {bug.size}</p>
                    ) : null}
                    {bug.rarity !== "N/A" ? (
                      <p>Rarity: {bug.rarity}</p>
                    ) : null}
                  </div>
                </div>
                <button type="button" className="btn btn-info" onClick={toggleModal}>
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

export default Bug;
