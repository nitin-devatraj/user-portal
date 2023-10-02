import React from "react";
import styles from "./LessonCardHeader.module.scss";
import { useSelector } from "react-redux";
import BackIcon from "../Icons/BackIcon";
import { useRouter } from "next/router";

function LessonCardHeader() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const router = useRouter();
  const backButtonHandler = () => {
    router.push(`/training-overview/${Math.random().toFixed(2)}`);
  };

  const lessonCardHeaderStyles = `${styles.lessonCardHeaderLightTheme} ${
    isDarkMode && styles.lessonCardHeaderDarkTheme
  }`;

  const lessonCardHeaderTextStyles = `${
    styles.lessonCardHeaderTextLightTheme
  } ${isDarkMode && styles.lessonCardHeaderTextDarkTheme}`;

  return (
    <header className={lessonCardHeaderStyles}>
      <button className={styles.backButton} onClick={backButtonHandler}>
        <BackIcon isDarkMode={isDarkMode} />
      </button>
      <p className={lessonCardHeaderTextStyles}>Training module</p>
    </header>
  );
}

export default LessonCardHeader;
