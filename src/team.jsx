import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(12);
  const handleAdd = () => {
    setTeam(team + 1);
  };
  const handleRemove = () => {
    setTeam(team - 1);
  };

  const teamStyle = {
    Text: "solid red",
    border: "2px solid yellow",
    borderRadius: " 15px",
    padding: " 15px",
  };
  return (
    <div style={teamStyle}>
      <h3>Player:{team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remoove</button>
    </div>
  );
}
