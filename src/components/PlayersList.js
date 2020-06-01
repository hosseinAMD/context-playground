import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { PlayerContext } from "../contexts/PlayerContext";
import PlayerForm from "./PlayerForm";

const PlayersList = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { players, removePlayer } = useContext(PlayerContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="players-list"
      style={{ background: theme.bg, color: theme.text }}
    >
      <ul>
        {players.map((player) => (
          <li key={player.id} style={{ background: theme.ui }}>
            {player.name} -{" "}
            <span
              onClick={() => removePlayer(player.id)}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Remove
            </span>
          </li>
        ))}
      </ul>
      <PlayerForm />
    </div>
  );
};

export default PlayersList;
