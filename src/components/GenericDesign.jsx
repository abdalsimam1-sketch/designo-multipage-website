import React from "react";

export const GenericDesign = ({ name, text }) => {
  return (
    <>
      <div
        className="d-flex flex-column text-center text-white top-box mx-auto justify-content-center mt-5"
        style={{ borderRadius: "1rem" }}
      >
        <h1>{name}</h1>
        <p className="col-5 mx-auto">{text}</p>
      </div>
    </>
  );
};
