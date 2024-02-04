import LineItem from "./LineItem";
export default function ItemList({
  items,
  setItems,
  handleCheck,
  handleDelete,
}) {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          key={item.id}
        />
      ))}
    </ul>
  );
}
