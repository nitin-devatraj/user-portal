import React, { useState } from "react";
import styles from "./CheckBox.module.scss";
import { useSelector } from "react-redux";

function CheckBox() {
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const checkboxHandler = () => {
    setIsCheckboxClicked((prevState) => !prevState);
  };

  const checkBoxStyles = `${styles.checkBoxLightTheme} ${
    isDarkMode && styles.checkBoxDarkTheme
  } ${isCheckboxClicked && !isDarkMode && styles.checkBoxSelectedLightTheme} 
  ${isCheckboxClicked && isDarkMode && styles.checkBoxSelectedDarkTheme}`;

  return (
    <button className={checkBoxStyles} onClick={checkboxHandler}>
      {isCheckboxClicked && <span className={styles.checkIcon}>&#10004;</span>}
    </button>
  );
}

export default CheckBox;
