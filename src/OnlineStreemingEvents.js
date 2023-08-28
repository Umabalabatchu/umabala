import React from "react";

function OnlineStreemingEvents({ imgLink, h3, h4 }) {
  return (
    <div>
      <img
        src={imgLink}
        style={{ width: "200px", height: "300px", borderRadius: "8px" }}
      ></img>
      <h3>{h3}</h3>
      <p>{h4}</p>
    </div>
  );
}

export default OnlineStreemingEvents;
