// import { useState } from "react";
import AddItem from "./AddItem";
import ItemList from "./ItemList";

export default function Content({
  items,
  setItems,
  handleCheck,
  handleDelete,
}) {
  return (
    <main>
      {items.length > 0 ? (
        <ItemList
          items={items}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </main>
  );
}
