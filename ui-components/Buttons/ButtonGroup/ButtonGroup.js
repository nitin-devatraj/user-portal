import React, { useState } from "react";
import styles from "./ButtonGroup.module.scss";
import { useSelector } from "react-redux";

function ButtonGroup({ buttons }) {
  const [selectedButton, setSelectedButton] = useState(buttons[0]);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const buttonClickHandler = (event) => {
    setSelectedButton(event.target.id);
  };

  const btnGroupStyles = `${styles.btnGroupLightTheme} ${
    isDarkMode && styles.btnGroupDarkTheme
  }`;

  return (
    <div className={btnGroupStyles}>
      {buttons.map((item) => {
        const btnStyles = `${styles.btnLightTheme}  ${
          selectedButton === item && styles.selectedBtnLightTheme
        } ${isDarkMode && styles.btnDarkTheme} ${
          isDarkMode && selectedButton === item && styles.selectedBtnDarkTheme
        }`;

        return (
          <button
            className={btnStyles}
            key={item}
            id={item}
            onClick={buttonClickHandler}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonGroup;
