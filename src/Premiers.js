import React from "react";

function Premiers({ PremiersImg, PremierH3, PremierH4 }) {
  return (
    <div>
      <img
        src={PremiersImg}
        style={{ width: "200px", height: "280px", borderRadius: "8px" }}
      ></img>
      <h3>{PremierH3}</h3>
      <p>{PremierH4}</p>
    </div>
  );
}

export default Premiers;
