import React, { useState } from "react";
import styles from "./RadioButton.module.scss";
import { useSelector } from "react-redux";

function RadioButton() {
  const [isRadioBtnClicked, setIsRadioBtnClicked] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const radioBtnHandler = () => {
    setIsRadioBtnClicked((prevState) => !prevState);
  };

  const radioBtnStyles = `${styles.radioBtnLightTheme} ${
    isDarkMode && styles.radioBtnDarkTheme
  }   ${isRadioBtnClicked && !isDarkMode && styles.radioBtnClickedLightTheme} 
  ${isRadioBtnClicked && isDarkMode && styles.radioBtnClickedDarkTheme}`;

  const radioBtnIconStyles = `${styles.radioBtnIcon}`;

  return (
    <div className={radioBtnStyles} onClick={radioBtnHandler}>
      {isRadioBtnClicked && <div className={radioBtnIconStyles}></div>}
    </div>
  );
}

export default RadioButton;
