import React from "react";
import styles from "./NavigationButtonGroup.module.scss";
import { useSelector } from "react-redux";

function NavigationButtonGroup() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const navBtnGroup = `${styles.navBtnGroupLightTheme} ${
    isDarkMode && styles.navBtnGroupDarkTheme
  }`;

  const btnStyles = `${styles.btnLightTheme} ${
    isDarkMode && styles.btnDarkTheme
  }`;

  return (
    <div className={navBtnGroup}>
      <button className={btnStyles}>&#8592;</button>
      <button className={btnStyles}>&#43;</button>
      <button className={btnStyles}>&#8594;</button>
    </div>
  );
}

export default NavigationButtonGroup;
