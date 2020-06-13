import React from "react";
import Navbar from "./components/Navbar";
import PlayersList from "./components/PlayersList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import PlayerContextProvider from "./contexts/PlayerContext";
import RateContextProvider from "./contexts/RateContext";
import RateControl from "./components/RateControl";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <PlayerContextProvider>
            <PlayersList />
          </PlayerContextProvider>
          <ThemeToggle />
          <RateContextProvider>
            <RateControl />
          </RateContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
