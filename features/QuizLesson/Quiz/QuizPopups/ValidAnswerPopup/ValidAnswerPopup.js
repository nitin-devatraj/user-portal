import React from "react";
import styles from "./ValidAnswerPopup.module.scss";
import PrimaryButton from "../../../../../ui-components/Buttons/PrimaryButton/PrimaryButton";
import Image from "next/image";
import { useSelector } from "react-redux";

function ValidAnswerPopup({ explanationText, onNextQuestion }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const validAnswerPopupContainerStyles = `${
    styles.validAnswerPopupContainerLightTheme
  } ${isDarkMode && styles.validAnswerPopupContainerDarkTheme}`;

  return (
    <div className={validAnswerPopupContainerStyles}>
      <div className={styles.popupDetails}>
        <div className={styles.popupTitle}>
          You are doing great{" "}
          <Image src="/valid-answer-emoji.svg" alt="#" width="35" height="35" />
        </div>
        <div className={styles.explanationContainer}>
          <span className={styles.explanationTitle}>Explanation</span>
          <span className={styles.explanationText}>{explanationText}</span>
        </div>
      </div>
      <PrimaryButton onClick={onNextQuestion}>Next</PrimaryButton>
    </div>
  );
}

export default ValidAnswerPopup;
