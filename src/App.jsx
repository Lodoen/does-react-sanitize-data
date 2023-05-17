import List from "./components/List";

export default function App() {
  const listElements = [
    { id: "1", text: "First element" },
    { id: "2", text: `<script>console.log("This should not be visible in the console")</script>Second item` },
    { id: "3", text: "Third element" },
  ];
  return (
    <div>
      <h1>Does React sanitize data?</h1>
      <List elements={listElements} />
    </div>
  );
}
