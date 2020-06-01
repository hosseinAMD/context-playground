import React, { createContext, useState } from "react";

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
  return (
    <PlayerContext.Provider value={{ players }}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
