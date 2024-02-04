import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 5, description: "Shoes", quantity: 4, packed: true },
  { id: 4, description: "short", quantity: 48, packed: false },
];

export function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Start />
    </div>
  );
}

export default App;
function Logo() {
  return <h1>FAR AWAY</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("1");

  function handleSub(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, id: Date.now(), packed: false };
    console.log(newItem);
    setDescription("");
    setQuantity("1");
  }
  return (
    <form className="add-form" onSubmit={handleSub}>
      <h3>what do you need for your trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <span>&times</span>
    </li>
  );
}
function Start() {
  return <footer className="stats">you have x item in your list</footer>;
}
