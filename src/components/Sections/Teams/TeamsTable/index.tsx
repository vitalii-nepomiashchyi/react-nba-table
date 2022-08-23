import React, { useState } from "react";
import { useTeams } from "hooks/useTeams";
import { TailSpin } from "react-loader-spinner";
import { Pagination } from "components/common/Pagination";

import styles from './teamsTable.module.scss';

export const TeamsTable:React.FC = () => {
  const { table, loader } = styles;
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const { teams, meta, loading } = useTeams(page, perPage);


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
      <table className={table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Abbreviation</th>
            <th>Conference</th>
          </tr>
        </thead>

        <tbody>
          {
            teams.map(({ name, city, abbreviation, conference }) => (
              <tr>
                <td>{name}</td>
                <td>{city}</td>
                <td>{abbreviation}</td>
                <td className={conference}><div>{conference}</div></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      
      <Pagination 
        meta={meta} 
        type="team" 
        setPage={setPage}
        setPerPage={setPerPage}
      />
    </>
  )
};
