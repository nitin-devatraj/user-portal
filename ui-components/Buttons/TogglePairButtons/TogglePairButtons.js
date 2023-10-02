import React, { useState } from "react";
import styles from "./TogglePairButtons.module.scss";
import { useSelector } from "react-redux";

function TogglePairButtons({ label, firstButton, secondButton }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const [selectedBtn, setSelectedBtn] = useState("first-button");

  const buttonClickHandler = (event) => {
    setSelectedBtn(event.target.id);
  };

  const labelStyles = isDarkMode
    ? styles.labelDarkTheme
    : styles.labelLightTheme;

  const firstBtnStyles =
    selectedBtn === "first-button" ? styles.selectedBtn : styles.btn;

  const secondBtnStyles =
    selectedBtn === "second-button" ? styles.selectedBtn : styles.btn;

  return (
    <div className={styles.togglePairButtonsContainer}>
      <label className={labelStyles}>{label}</label>
      <div className={styles.buttonGroup}>
        <button
          className={firstBtnStyles}
          id="first-button"
          onClick={buttonClickHandler}
        >
          {firstButton}
        </button>
        <button
          className={secondBtnStyles}
          id="second-button"
          onClick={buttonClickHandler}
        >
          {secondButton}
        </button>
      </div>
    </div>
  );
}

export default TogglePairButtons;
