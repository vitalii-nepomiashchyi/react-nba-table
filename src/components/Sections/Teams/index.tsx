import React from "react";
import { AddTeamForm } from "components/Sections/Teams/AddTeamForm";
import { TeamsTable } from "components/Sections/Teams/TeamsTable";
import styles from "./teams.module.scss";

export const Teams = () => {
  const { section } = styles;

  return (
    <section className={section} >
      <h2 className="section-heading">Teams</h2>
      <AddTeamForm />
      <TeamsTable />
    </section>
  );
};
