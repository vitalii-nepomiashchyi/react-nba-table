import React from "react";
import { TailSpin } from "react-loader-spinner";
import { Pagination } from "components/common/Pagination";
import { useSearchParams } from "react-router-dom";

import styles from './teamsTable.module.scss';
import { MetaData, Team } from "types";
import { Table } from "./Table";

interface Props {
  teams: Team[],
  addedTeams: Team[],
  meta: MetaData,
  loading: boolean,
}

export const TeamsTable:React.FC<Props> = ({ teams , addedTeams, meta, loading }) => {
  const { table, loader } = styles;
  
  const [newSearchParams, setNewSearchParams] = useSearchParams();

  const handlePageChange = (page: number) => {
    const searchObject = Object.fromEntries(new URLSearchParams(newSearchParams))
    setNewSearchParams({ ...searchObject, teamPage: String(page) })
  }

  const handlePerPageChange = (perPage: number) => {
    const searchObject = Object.fromEntries(new URLSearchParams(newSearchParams))
    setNewSearchParams({ ...searchObject, teamPage: '1', teamPerPage: String(perPage)})
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

  console.log(addedTeams);
  
  return (
    <>
      {
        addedTeams.length > 0 && <Table className={table} teams={addedTeams} heading="Added by you"/>
      }

      <Table className={table} teams={teams} heading="From server"/>
      
      <Pagination 
        meta={meta} 
        type="team" 
        handlePageChange={handlePageChange}
        handlePerPageChange={handlePerPageChange}
      />
    </>
  )
};
