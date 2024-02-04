import { useState } from "react";
import "./App.css";
import Header from "./header";
import AddItem from "./AddItem";
import Content from "./content";
import Footer from "./footer";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );
  const [newItem, setNewItem] = useState("");
  function setAndSaveItem(newItem) {
    setItems(newItem);
    localStorage.setItem("shoppingList", JSON.stringify(newItem));
  }
  function addItem(item) {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItem(listItems);
  }
  function handleCheck(id) {
    const listItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setAndSaveItem(listItems);
  }
  function handleDelete(id) {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItem(listItems);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) return;
    //add item
    addItem(newItem);
    setNewItem("");
  }
  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
