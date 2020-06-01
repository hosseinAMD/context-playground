import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const PlayersList = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="players-list"
      style={{ background: theme.bg, color: theme.text }}
    >
      <ul>
        <li style={{ background: theme.ui }}>Christiano Ronaldo</li>
        <li style={{ background: theme.ui }}>Paulo Maldini</li>
        <li style={{ background: theme.ui }}>Andrea Pirlo</li>
        <li style={{ background: theme.ui }}>Cludio Marchisio</li>
      </ul>
    </div>
  );
};

export default PlayersList;
