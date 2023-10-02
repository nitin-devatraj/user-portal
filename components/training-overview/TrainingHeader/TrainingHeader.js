import React from "react";
import styles from "./TrainingHeader.module.scss";
import BackIcon from "../Icons/BackIcon";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function TrainingHeader() {
  const router = useRouter();
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const backButtonHandler = () => {
    router.push("/dashboard");
  };

  const trainingHeaderContainerStyles = `${
    styles.trainingHeaderContainerLightTheme
  } ${isDarkMode && styles.trainingHeaderContainerDarkTheme}`;

  const trainingHeaderTextStyles = `${styles.trainingHeaderTextLightTheme} ${
    isDarkMode && styles.trainingHeaderTextDarkTheme
  }`;

  return (
    <header className={trainingHeaderContainerStyles}>
      <button className={styles.backButton} onClick={backButtonHandler}>
        <BackIcon isDarkMode={isDarkMode} />
      </button>
      <p className={trainingHeaderTextStyles}>Training module</p>
    </header>
  );
}

export default TrainingHeader;
