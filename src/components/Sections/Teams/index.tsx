import React from "react";
import { AddTeamForm } from "./AddTeamForm";
import styles from "./teams.module.scss";

export const Teams = () => {
  const { section } = styles;

  return (
    <section className={section} >
      <h2 className="section-heading">Teams</h2>
      <AddTeamForm />
    </section>
  );
};
