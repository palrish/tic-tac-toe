export default function Log(props: any) {
  return (
    <ol id="log">
      {props.turns.map((turn: any) => (
        <li key={`${turn.cell.row}${turn.cell.col}`}>
          {turn.player} selected {turn.cell.row},{turn.cell.col}
        </li>
      ))}
    </ol>
  );
}
