import Coursal from "./Coursal";
import "./Indoor.css";
function Indoor({ movieImage, movieName, cateGory }) {
  return (
    <div className="main-container">
      <div className="main">
        <img src={movieImage} alt="" className="moviesimages" />
      </div>

      <div>
        <p>{movieName}</p>
      </div>

      <div>
        <span>{cateGory}</span>
      </div>
      {/* <Coursal></Coursal> */}
    </div>
  );
}

export default Indoor;
