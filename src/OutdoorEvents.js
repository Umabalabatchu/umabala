import React from "react";

function OutdoorEvents({ imgLink, h3, p }) {
  return (
    <div>
      <img
        src={imgLink}
        style={{ width: "200px", height: "300px", borderRadius: "8px" }}
      ></img>
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}

export default OutdoorEvents;
