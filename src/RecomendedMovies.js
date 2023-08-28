import React from "react";

function RecomendedMovies({ RmImgLink, RmName, RmType }) {
  return (
    <div>
      <img
        src={RmImgLink}
        style={{ width: "200px", height: "330px", borderRadius: "8px" }}
      ></img>
      <p>
        <b>{RmName}</b>
      </p>
      <p>{RmType}</p>
    </div>
  );
}

export default RecomendedMovies;
