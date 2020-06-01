import React, { useContext, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const PlayerForm = () => {
  const [name, setName] = useState("");
  const { addPlayer } = useContext(PlayerContext);

  const handleAddPlayer = (e) => {
    e.preventDefault();
    if (name) {
      addPlayer(name);
      setName("");
    }
  };

  return (
    <form onSubmit={handleAddPlayer}>
      <input
        type="text"
        placeholder="Type Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" value="Add Player" />
    </form>
  );
};

export default PlayerForm;
