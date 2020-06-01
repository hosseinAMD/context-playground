import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.text }}>
      <h3>FavP</h3>
      <div style={{ cursor: "pointer" }} onClick={toggleAuth}>
        {isAuthenticated ? "Logged in" : "Logged out"}
      </div>
      <ul>
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Teams</li>
        <li className="navbar-item">Players</li>
      </ul>
    </nav>
  );
};

export default Navbar;
