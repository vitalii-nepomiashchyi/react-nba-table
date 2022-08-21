import React from "react";
import styles from './header.module.scss'

export const Header = () => {
  const { header } = styles;

  console.log(styles);
  return (
    <header className={header}>
      <h1 className="main-heading">NBA profile</h1>
    </header>
  )
};
