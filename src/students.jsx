import { useEffect, useState } from "react";
import Friend from "./student";

export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  const teamStyle = {
    Text: "solid red",
    border: "2px solid yellow",
    borderRadius: " 15px",
    padding: " 15px",
  };
  return (
    <div style={teamStyle}>
      <h3>Friends:{friends.length}</h3>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}
