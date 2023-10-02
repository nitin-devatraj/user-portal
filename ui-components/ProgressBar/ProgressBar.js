import React from "react";
import styles from "./ProgressBar.module.scss";
import { useSelector } from "react-redux";

function ProgressBar({ progress, hideLabel }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const progressBar = {
    background: isDarkMode ? "#8CB4FF" : "#004DDD",
    width: `${progress}%`,
    height: "100%",
    transition: "width 0.3s ease-in-out",
  };

  const progressBarStyles = `${styles.progressBarLightTheme} ${
    isDarkMode && styles.progressBarDarkTheme
  }`;

  const progressCountStyles = `${styles.progressCountLightTheme} ${
    isDarkMode && styles.progressCountDarkTheme
  }`;

  return (
    <div className={styles.progressBarContainer}>
      <div className={progressBarStyles}>
        <div style={progressBar}></div>
      </div>
      {hideLabel && <span className={progressCountStyles}>{progress}%</span>}
    </div>
  );
}

export default ProgressBar;
