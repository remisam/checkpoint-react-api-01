import { Link } from "react-router-dom";

import "../style/Game.css";

const Game = ({ name, released, rating, genres, image, id, setDeleteGame }) => {
  const cardUrl = `/games/${id}`;

  return (
    <div className="game-card">
      <Link to={cardUrl} className="game-link">
        <h2>{name}</h2>
        <h3>Rating: {rating}</h3>
        <h3>Release: {released}</h3>
        {/* <h3>Genre: {genres}</h3> */}
        <br></br>
        <img className="game-photo" src={image} alt={name} />
      </Link>
      <button className="game-delete-btn" onClick={() => setDeleteGame(id)}>
        Delete
      </button>
    </div>
  );
};

export default Game;
