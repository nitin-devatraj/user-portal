import React from "react";
import styles from "./ActiveCourseCard.module.scss";
import ProgressBar from "../../../ui-components/ProgressBar/ProgressBar";
import VideoIcon from "./icons/VideoIcon";
import PencilIcon from "./icons/PencilIcon";
import { useSelector } from "react-redux";
import Image from "next/image";

function ActiveCourseCard({ activeCourseDetails }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const activeCourseContainerStyles = `${
    styles.activeCourseContainerLightTheme
  } ${isDarkMode && styles.activeCourseContainerDarkTheme}`;

  const activeCourseHeadingStyles = `${styles.activeCourseHeadingLightTheme} ${
    isDarkMode && styles.activeCourseHeadingDarkTheme
  }`;

  const activeCourseCardStyles = `${styles.activeCourseCardLightTheme} ${
    isDarkMode && styles.activeCourseCardDarkTheme
  }`;

  const activeCourseTitleStyles = `${styles.activeCourseTitleLightTheme} ${
    isDarkMode && styles.activeCourseTitleDarkTheme
  }`;

  const activeCourseInfoStyles = `${styles.activeCourseInfoLightTheme} ${
    isDarkMode && styles.activeCourseInfoDarkTheme
  }`;

  return (
    <section className={activeCourseContainerStyles}>
      <p className={activeCourseHeadingStyles}>Continue Your Training</p>

      <div
        className={activeCourseCardStyles}
        onClick={activeCourseDetails.onClick}
      >
        <div className={styles.activeCourseCardDetailContainer}>
          <div className={styles.sectionLeft}>
            <Image
              src="/course-img.jpeg"
              alt="#"
              width={960}
              height={60}
              className={styles.activeCourseImg}
            />

            <span className={styles.durationLeftText}>4 days left</span>
          </div>
          <div className={styles.sectionRight}>
            <p className={activeCourseTitleStyles}>
              Zippee rider operating training that work amazingly well
            </p>
            <div className={styles.activeCourseDetails}>
              <span className={activeCourseInfoStyles}>
                <VideoIcon isDarkMode={isDarkMode} /> 10 Videos
              </span>
              <span className={activeCourseInfoStyles}>
                <PencilIcon isDarkMode={isDarkMode} /> 10 Quizzes
              </span>
            </div>
          </div>
        </div>

        <ProgressBar progress={activeCourseDetails.progress} />
      </div>
    </section>
  );
}

export default ActiveCourseCard;
