import React from "react";
import { useTeams } from "hooks/useTeams";

import styles from './teamsTable.module.scss';

export const TeamsTable:React.FC = () => {
  const { table } = styles;
  const { teams, loading }  = useTeams();

  // TODO loading
  if (loading) {

    return <div></div>
  }
  
  return (
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
  )
};
