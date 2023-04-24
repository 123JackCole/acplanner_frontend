import React, { useState } from "react";
import Modal from "./Modal";

const Fossil = ({ fossil }) => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <div className="card rounded mb-4 box-shadow h-100">
      {fossil.image ? (
        <img
          className="card-img-top img-responsive-fossil"
          src={fossil.image}
          alt={fossil.name}
          style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }}
        />
      ) : null}
      <div className="card-body d-flex flex-column">
        {fossil.name !== "N/A" ? <h4>{fossil.name}</h4> : null}
        {fossil.price !== "N/A" ? (
          <div>Price: {fossil.price}</div>
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
                <div className="image">
                  <img src={fossil.image} alt={fossil.name} />
                </div>
                <div className="content">
                  <div className="header">{fossil.name}</div>
                  {fossil.scientific_name !== "N/A" ? (
                    <div>
                      Scientific name: {fossil.scientific_name}
                    </div>
                  ) : null}
                  <div>
                    {fossil.price !== "N/A" ? (
                      <p>Price: {fossil.price}</p>
                    ) : null}
                    {fossil.sections !== "N/A" ? (
                      <p>Sections: {fossil.sections}</p>
                    ) : null}
                    {fossil.period !== "N/A" ? (
                      <p>Period: {fossil.period}</p>
                    ) : null}
                    {fossil.length !== "N/A" ? (
                      <p>Size: {fossil.length}</p>
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
};

export default Fossil;
