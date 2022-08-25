import { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game.jsx";

import "../style/GameList.css";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [filterActivated, setFilterActivated] = useState(false);
  const [deleteGame, setDeleteGame] = useState([]);

  useEffect(() => {
    axios
      .get("https://apis.wilders.dev/wild-games/games/")
      .then((res) => setGames(res.data));
  }, []);

  useEffect(() => {
    setGames(games.filter((game) => game.id !== deleteGame));
  }, [deleteGame]);

  return (
    <div>
      <button
        className="gamelist-button"
        onClick={() => setFilterActivated(!filterActivated)}
      >
        {filterActivated ? "All games" : "Best ratings"}
      </button>
      <div className="gamelist-container">
        {games
          .filter((game) => !filterActivated || game.rating >= 4.45)
          .map((game) => (
            <div className="game-container">
              <Game
                key={game.id} // où est défini -game- ?! Fait-il part du tableau d'objet (API)?!
                id={game.id}
                name={game.name}
                released={game.released}
                rating={game.rating}
                genre={game.genres} // comment afficher le array de la section "genres" ?
                image={game.background_image}
                setDeleteGame={setDeleteGame} // pourquoi n'est-il pas possible d'écrire à la place "toDelete={setDeleteGame}" ici dans GameList et passer en props dans le component Game ?!
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GameList;
