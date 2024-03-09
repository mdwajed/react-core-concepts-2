import "./App.css";
import Counter from "./assets/counter";
import Team from "./team";
import Users from "./users";
import Friends from "./students";
function App() {
  const handle = () => {
    alert("Button Click");
  };
  const add = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handle}>Click Me</button>
      <button
        onClick={() => {
          alert("second click");
        }}
      >
        click
      </button>
      <button onClick={() => add(3)}>click3</button>
    </>
  );
}

export default App;
