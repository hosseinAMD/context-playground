import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
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
