import { FaTrashAlt } from "react-icons/fa";

export default function LineItem({ item, handleCheck, handleDelete }) {
  return (
    <li
      className="item"
      key={item.id}
      style={item.checked ? { textDecoration: "line-through" } : {}}
    >
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      ></input>
      <label>{item.item}</label>
      <FaTrashAlt
        method="button"
        tabIndex={0}
        aria-label={`delete ${item.item}`}
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
}
