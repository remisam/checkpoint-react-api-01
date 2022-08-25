import { Routes, Route } from "react-router-dom";
import GameDetails from "./components/GameDetails";
import GameList from "./components/GameList";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header userName="visitor" />
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/games/:id" element={<GameDetails />} />
      </Routes>
    </div>
  );
}

export default App;
