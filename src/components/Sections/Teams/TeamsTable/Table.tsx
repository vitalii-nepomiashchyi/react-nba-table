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
                <td data-label="Name">{name}</td>
                <td data-label="City">{city}</td>
                <td data-label="Abbreviation">{abbreviation}</td>
                <td data-label="Conference" className={conference}><div className="inner">{conference}</div></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};
