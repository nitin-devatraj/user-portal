import React, { useState } from "react";
import styles from "./ToggleButton.module.scss";
import { useSelector } from "react-redux";

function ToggleButton({ onClick }) {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const toggleBtnHandler = () => {
    setIsToggleActive((prevState) => !prevState);
    onClick();
  };

  const toggleBtnStyles = `${styles.toggleBtnLightTheme} ${
    isDarkMode && styles.toggleBtnDarkTheme
  } ${isToggleActive && styles.toggleBtnActiveLightTheme}  ${
    isToggleActive && isDarkMode && styles.toggleBtnActiveDarkTheme
  }`;

  return (
    <div className={`${toggleBtnStyles}`} onClick={toggleBtnHandler}>
      <div className={styles.toggleIcon}></div>
    </div>
  );
}

export default ToggleButton;
