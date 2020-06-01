import React from "react";
import Navbar from "./components/Navbar";
import PlayersList from "./components/PlayersList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <PlayersList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
