export default function List({ elements }) {
  return (
    <ul>
      {elements.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
}
