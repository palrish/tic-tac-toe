import { useState } from "react";

export default function Player(props: any) {
  const [playerName, setPlayerName] = useState<any>(props.name);
  const [isEditing, setIsEditing] = useState<Boolean>(false);

  const clickHandler = () => {
    if (isEditing) {
      props.handlePlayerName(props.symbol, playerName);
    }
    setIsEditing((isEditing) => !isEditing);
  };
  const changeHandler = (e: any) => {
    setPlayerName((name: any) => e.target.value);
  };
  return (
    <li className={props.isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            defaultValue={playerName}
            onChange={changeHandler}
            required
          />
        )}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
