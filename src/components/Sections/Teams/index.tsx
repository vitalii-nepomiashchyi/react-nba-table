import React, { useEffect, useState } from "react";
import { AddTeamForm } from "components/Sections/Teams/AddTeamForm";
import { TeamsTable } from "components/Sections/Teams/TeamsTable";
import { useTeams } from "hooks/useTeams";
import { NewTeam, Team } from "types";
import { v4 as uuidv4 } from "uuid";

import styles from "../section.module.scss";

export const Teams = () => {
  const { section } = styles;


  const data = useTeams();

  const [addedTeams, setAddedTeams] = useState<Team[]>(
    JSON.parse(sessionStorage.getItem('addedTeams') || '') as Team[] || []
  );

  const addNewTeam = (newTeam: NewTeam) => {
    const id = uuidv4();
    const team = { ...newTeam, id };

    setAddedTeams(prevValue => {
      const updatedTeams = [ team, ...prevValue ];
      
      sessionStorage.setItem('addedTeams', JSON.stringify(updatedTeams));

      return updatedTeams;
    });
  }

  return (
    <section className={section} >
      <h2 className="section-heading">Teams</h2>
      <AddTeamForm addNewTeam={addNewTeam} />
      <TeamsTable { ...data } addedTeams={addedTeams}/>
    </section>
  );
};
