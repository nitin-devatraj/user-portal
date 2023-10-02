import React from "react";
import styles from "./TrainingDetails.module.scss";
import VideoIcon from "../Icons/VideoIcon";
import PencilIcon from "../Icons/PencilIcon";
import { useSelector } from "react-redux";
import Image from "next/image";

function TrainingDetails() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const trainingNameStyles = `${styles.trainingNameLightTheme} ${
    isDarkMode && styles.trainingNameDarkTheme
  }`;

  const trainingInfoStyles = `${styles.trainingInfoLightTheme} ${
    isDarkMode && styles.trainingInfoDarkTheme
  }`;

  return (
    <div className={styles.trainingDetailsContainer}>
      <Image src="/course-img.jpeg" alt="#" className={styles.trainingBanner} width="960" height="400"/>
      <div className={styles.trainingDetails}>
        <p className={trainingNameStyles}>
          Zippee rider operating training that work amazingly well
        </p>

        <div className={styles.trainingDetailsInfoContainer}>
          <span className={trainingInfoStyles}>
            <VideoIcon isDarkMode={isDarkMode} /> 10 Videos
          </span>
          <span className={trainingInfoStyles}>
            <PencilIcon isDarkMode={isDarkMode} /> 10 Quizzes
          </span>
        </div>
      </div>
    </div>
  );
}

export default TrainingDetails;
