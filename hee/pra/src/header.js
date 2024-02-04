export default function Header({ title }) {
  return <header>{title}</header>;
}
Header.defaultProps = {
  title: "Grocery List",
};
