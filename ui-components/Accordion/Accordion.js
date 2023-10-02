import React from "react";
import styles from "./Accordion.module.scss";
import Tab from "./Tab/Tab";
import { useSelector } from "react-redux";

function Accordion({ tabs }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={styles.accordionContainer}>
      {tabs.map((item) => (
        <Tab item={item} key={item.id} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
}

export default Accordion;
