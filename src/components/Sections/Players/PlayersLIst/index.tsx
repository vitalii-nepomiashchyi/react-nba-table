import React from "react";
import { usePlayers } from "hooks/usePlayers";
import { PlayerCard } from "./PlayerCard";
import { TailSpin } from "react-loader-spinner";
import { Pagination } from "components/common/Pagination";

import styles from './playersList.module.scss';
import { useSearchParams } from "react-router-dom";

export const PlayersList:React.FC = () => {
  const { list, loader } = styles;
  const [newSearchParams, setNewSearchParams] = useSearchParams();

  const { players, meta, loading } = usePlayers()

  const handlePageChange = (page: number) => {
    const searchObject = Object.fromEntries(new URLSearchParams(newSearchParams))
    setNewSearchParams({ ...searchObject, playerPage: String(page) })
  }

  const handlePerPageChange = (perPage: number) => {
    const searchObject = Object.fromEntries(new URLSearchParams(newSearchParams))
    setNewSearchParams({ ...searchObject, playerPage: '1', playerPerPage: String(perPage)})
  }

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
        handlePageChange={handlePageChange}
        handlePerPageChange={handlePerPageChange}
      />
    </>
  );
};
