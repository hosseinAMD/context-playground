import React from "react";
import Navbar from "./components/Navbar";
import PlayersList from "./components/PlayersList";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <PlayersList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
