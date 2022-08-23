import React from "react";
import { Player } from "types";

import styles from "./playerCard.module.scss";

interface Props {
  player: Player,
}

export const PlayerCard:React.FC<Props> = ({ player: { first_name, last_name }}) => {
  const { card, initials, name } = styles;

  return (
    <li className={card}>
      <div className={initials}>{first_name[0] + last_name[0]}</div> 
      <div className={name}>
        {first_name}
        <br />
        {last_name}
      </div>
    </li>
  );
};
