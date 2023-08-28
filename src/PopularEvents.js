import React from "react";
import "./App.css";
function PopularEvents({ imgLink, h3, p }) {
  return (
    <div className="divs">
      <img
        src={imgLink}
        style={{ width: "200px", height: "300px", borderRadius: "8px" }}
      ></img>
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}

export default PopularEvents;
