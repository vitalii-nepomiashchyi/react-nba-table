import React, { useState } from "react";
import { usePlayers } from "hooks/usePlayers";
import { PlayerCard } from "./PlayerCard";
import { TailSpin } from "react-loader-spinner";
import { Pagination } from "components/common/Pagination";

import styles from './playersList.module.scss';

export const PlayersList:React.FC = () => {
  const { list, loader } = styles;
  const [page, setPage] = useState(1);
  const [perPage, setperPage] = useState(8);
  const { players, meta, loading } = usePlayers(page, perPage);

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
    <>
      <ul className={list}>
        {
          players.map((player) => <PlayerCard player={player} />)
        }
      </ul>

      <Pagination
        meta={meta}
        type="player"
        setPage={setPage}
        setPerPage={setperPage}
      />
    </>
  );
};
