import React from "react";
import styles from "./TrainingSummary.module.scss";
import { useSelector } from "react-redux";

function TrainingSummary() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const trainingSummaryContainerStyles = `${
    styles.trainingSummaryContainerLightTheme
  } ${isDarkMode && styles.trainingSummaryContainerDarkTheme}`;

  const summaryData = {
    notStartedData: {
      text: "Not Started",
      number: 8,
    },
    inProgressData: {
      text: "In Progress",
      number: 7,
    },
    completedData: {
      text: "Completed",
      number: 12,
    },
  };

  const totalSummaryData =
    summaryData.notStartedData.number +
    summaryData.inProgressData.number +
    summaryData.completedData.number;

  const notStartedBarStyles = {
    width: `${(summaryData.notStartedData.number / totalSummaryData) * 100}%`,
  };

  const inProgressBarStyles = {
    width: `${(summaryData.inProgressData.number / totalSummaryData) * 100}%`,
  };

  const completedBarStyles = {
    width: `${(summaryData.completedData.number / totalSummaryData) * 100}%`,
  };

  const trainingSummaryStyles = `${styles.trainingSummaryLightTheme} ${
    isDarkMode && styles.trainingSummaryDarkTheme
  }`;

  const trainingSummmaryTextStyles = `${
    styles.trainingSummmaryTextLightTheme
  } ${isDarkMode && styles.trainingSummmaryTextDarkTheme}`;

  return (
    <div className={trainingSummaryContainerStyles}>
      <div className={trainingSummaryStyles}>
        <span className={trainingSummmaryTextStyles}>
          Your Training Summary
        </span>
        <div className={styles.summaryDataBar}>
          <span
            className={styles.notStartedBar}
            style={notStartedBarStyles}
          ></span>
          <span
            className={styles.inProgressBar}
            style={inProgressBarStyles}
          ></span>
          <span
            className={styles.completedBar}
            style={completedBarStyles}
          ></span>
        </div>
        <div className={styles.summaryDataContainer}>
          <div className={styles.notStartedContainer}>
            <span className={styles.notStartedNumber}>
              {summaryData.notStartedData.number}
            </span>
            <span className={styles.notStartedText}>Not Started</span>
          </div>

          <div className={styles.inProgressContainer}>
            <span className={styles.inProgressNumber}>
              {summaryData.inProgressData.number}
            </span>
            <span className={styles.inProgressText}>In Progress</span>
          </div>

          <div className={styles.completedContainer}>
            <span className={styles.completedNumber}>
              {summaryData.completedData.number}
            </span>
            <span className={styles.completedText}>Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingSummary;
