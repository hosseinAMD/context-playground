import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Christiano Ronaldo",
    },
    {
      id: 2,
      name: "Sergio Ramos",
    },
    {
      id: 3,
      name: "Luka Modric",
    },
  ]);

  const addPlayer = (name) => {
    setPlayers([...players, { name, id: uuidv4() }]);
  };

  const removePlayer = (id) => {
    const newPlayersArray = players.filter((player) => player.id !== id);
    setPlayers(newPlayersArray);
  };

  return (
    <PlayerContext.Provider value={{ players, addPlayer, removePlayer }}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
