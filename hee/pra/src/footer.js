export default function Footer({ length }) {
  return (
    <p className="footer">
      {length} List {length === 1 ? "Item" : "Items"}
    </p>
  );
}
