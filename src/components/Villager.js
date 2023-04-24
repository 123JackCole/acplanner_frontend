import React, { useState } from "react";
import Modal from "./Modal";

const Villager = ({ villager }) => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <div className="card rounded mb-4 box-shadow h-100">
      <img
        className="card-img-top img-responsive-villager"
        src={villager.image}
        alt={villager.name}
        style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }}
      />

      <div className="card-body d-flex flex-column">
        {villager.name !== "N/A" ? <h4>{villager.name}</h4> : null}
        {villager.gender !== "N/A" ? (
          <div>Gender: {villager.gender}</div>
        ) : null}
        {villager.personality !== "N/A" ? (
          <div>Personality: {villager.personality}</div>
        ) : null}
        {villager.species !== "N/A" ? (
          <div>Species: {villager.species}</div>
        ) : null}
        {villager.birthday !== "N/A" ? (
          <div>Birthday: {villager.birthday}</div>
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
                  <img src={villager.image} alt={villager.name} />
                </div>
                <div className="content">
                  <h5 className="header">{villager.name}</h5>
                  {villager.gender !== "N/A" ? (
                    <p>Gender: {villager.gender}</p>
                  ) : null}
                  {villager.personality !== "N/A" ? (
                    <p>Personality: {villager.personality}</p>
                  ) : null}
                  {villager.species !== "N/A" ? (
                    <p>Species: {villager.species}</p>
                  ) : null}
                  {villager.birthday !== "N/A" ? (
                    <p>Birthday: {villager.birthday}</p>
                  ) : null}
                  <div>
                    {villager.quote !== "N/A" ? (
                      <p>Quote: {villager.quote}</p>
                    ) : null}
                    {villager.sign !== "N/A" ? (
                      <p>Sign: {villager.sign}</p>
                    ) : null}
                    {villager.phrase !== "N/A" ? (
                      <p>Phrase: {villager.phrase}</p>
                    ) : null}
                    {villager.clothes !== "N/A" ? (
                      <p>Clothes: {villager.clothes}</p>
                    ) : null}
                    {villager.picture !== "N/A" ? (
                      <p>
                        Picture:{" "}
                        <img
                          src={villager.picture}
                          alt={villager.name}
                        />
                      </p>
                    ) : null}
                    {villager.siblings !== "N/A" ? (
                      <p>Siblings: {villager.siblings}</p>
                    ) : null}
                    {villager.goal !== "N/A" ? (
                      <p>Goal: {villager.goal}</p>
                    ) : null}
                    {villager.fear !== "N/A" ? (
                      <p>Fear: {villager.fear}</p>
                    ) : null}
                    {villager.favclothing !== "N/A" ? (
                      <p>
                        Favorite Clothing: {villager.favclothing}
                      </p>
                    ) : null}
                    {villager.leastfavclothing !== "N/A" ? (
                      <p>
                        Hated Clothes: {villager.leastfavclothing}
                      </p>
                    ) : null}
                    {villager.favcolor !== "N/A" ? (
                      <p>Favorite Color: {villager.favcolor}</p>
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

export default Villager;
