import React from "react";
import { Team } from "types";

interface Props {
  className: string,
  heading: string,
  teams: Team[],
}

export const Table:React.FC<Props> = ({ className, heading, teams }) => {

  return (
    <>
      <h3 className="sub-section-heading">{heading}</h3>

      <table className={className}>
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
            teams.map(({ name, city, abbreviation, conference, id }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{city}</td>
                <td>{abbreviation}</td>
                <td className={conference}><div>{conference}</div></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};
