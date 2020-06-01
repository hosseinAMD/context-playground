import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { PlayerContext } from "../contexts/PlayerContext";

const PlayersList = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { players } = useContext(PlayerContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="players-list"
      style={{ background: theme.bg, color: theme.text }}
    >
      <ul>
        {players.map((player) => (
          <li key={player.id} style={{ background: theme.ui }}>
            {player.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersList;
