import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const teamStyle = {
    Text: "solid red",
    border: "2px solid yellow",
    borderRadius: " 15px",
    padding: " 15px",
  };
  return (
    <div style={teamStyle}>
      <h3>Users:{users.length}</h3>
    </div>
  );
}
