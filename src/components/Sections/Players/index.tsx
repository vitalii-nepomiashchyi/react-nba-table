import React from "react";
import styles from "../section.module.scss";
import { PlayersList } from "./PlayersLIst";

export const Players:React.FC = () => {
  const { section } = styles;

  return (
    <section className={section}>
      <h2 className="section-heading">Players</h2>
      <PlayersList />
    </section>
  );
};
