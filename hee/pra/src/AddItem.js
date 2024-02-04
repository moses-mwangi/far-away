import { FaPlus } from "react-icons/fa";
import "./App.css";
// import { useState } from "react";

export default function AddItem({ newItem, setNewItem, handleSubmit }) {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add item</label>
      <input
        type="text"
        autoFocus
        required
        placeholder="Add Item..."
        id="addItem"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
}
