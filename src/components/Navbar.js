import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, dark, light } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ background: theme.ui, color: theme.text }}>
        <h3>FavP</h3>
        <ul>
          <li className="navbar-item">Home</li>
          <li className="navbar-item">Teams</li>
          <li className="navbar-item">Players</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
