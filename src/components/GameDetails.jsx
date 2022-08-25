import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import "../style/GameDetails.css";

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState({});
  let params = useParams();
  console.log("params", params.id);

  useEffect(() => {
    axios
      .get(`https://apis.wilders.dev/wild-games/games/${params.id}`)
      .then((res) => setGameDetails(res.data));
  }, []);

  return (
    <div className="game-detailed-card">
      <div className="game-detailed-infos">
        <h2>{gameDetails.name}</h2>
        <h3>Rating: {gameDetails.rating}</h3>
        <h3>Release: {gameDetails.released}</h3>
        {/* <h3>Genre: {gameDetails.genre}</h3> */}
        <br></br>
        <img
          className="game-detailed-photo"
          src={gameDetails.background_image}
          alt={gameDetails.name}
        />
      </div>
      <div className="game-detailed-clip">
        <div className="clip-container">
          <video autoPlay controls loop src={gameDetails.clip?.clip}></video>
        </div>
      </div>
      <Link to="/">
        <button className="game-btn">Return to the list</button>
      </Link>
    </div>
  );
};

export default GameDetails;
