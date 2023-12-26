export default function GameOver(props: any) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {props.winner === "Draw" ? (
        <p>{`It's a Draw.`}</p>
      ) : (
        <p>{props.players[props.winner]} Won.</p>
      )}
      <button onClick={props.handleRematch}>Rematch</button>
    </div>
  );
}
