import React from "react";
import { usePlayers } from "hooks/usePlayers";
import { PlayerCard } from "./PlayerCard";

import styles from './playersList.module.scss';

export const PlayersList:React.FC = () => {
  const { list } = styles;
  const { players, loading } = usePlayers();

  if (loading) {
    return (
      <div></div>
    ) 
  }

  return (
    <ul className={list}>
      {
        players.map((player) => <PlayerCard player={player} />)
      }
    </ul>
  );
};
