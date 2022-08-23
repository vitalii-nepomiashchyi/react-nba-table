import React from "react";
import { usePlayers } from "hooks/usePlayers";
import { PlayerCard } from "./PlayerCard";
import { TailSpin } from "react-loader-spinner";

import styles from './playersList.module.scss';

export const PlayersList:React.FC = () => {
  const { list, loader } = styles;
  const { players, loading } = usePlayers();

  if (loading) {
    return (
      <TailSpin
        height={80}
        width={80}
        color="#652AD3"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass={loader}
        visible={true}
      />
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
