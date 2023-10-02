import React from "react";
import styles from "./QuizHeader.module.scss";
import BackIcon from "../Icons/BackIcon";
import { useSelector } from "react-redux";

function QuizHeader({ onQuizMinimize }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const quizMinimizeHandler = () => {
    onQuizMinimize();
  };

  const quizHeaderStyles = `${styles.quizHeaderLightTheme} ${
    isDarkMode && styles.quizHeaderDarkTheme
  }`;

  const quizHeaderTextStyles = `${styles.quizHeaderTextLightTheme} ${
    isDarkMode && styles.quizHeaderTextDarkTheme
  }`;

  return (
    <header className={quizHeaderStyles}>
      <button className={styles.backButton} onClick={quizMinimizeHandler}>
        <BackIcon isDarkMode={isDarkMode} />
      </button>
      <p className={quizHeaderTextStyles}>Training module</p>
    </header>
  );
}

export default QuizHeader;
