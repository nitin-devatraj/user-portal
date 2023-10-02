import React from "react";
import styles from "./CourseCard.module.scss";
import VideoIcon from "./Icons/VideoIcon";
import PencilIcon from "./Icons/PencilIcon";
import { useSelector } from "react-redux";
import Image from "next/image";

function CourseCard({ courseTitle, numberOFVideos, numberOFQuizzes, onClick }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const courseHeadingStyles = `${styles.courseHeadingLightTheme} ${
    isDarkMode && styles.courseHeadingDarkTheme
  }`;

  const courseInfoTextStyles = `${styles.courseInfoTextLightTheme} ${
    isDarkMode && styles.courseInfoTextDarkTheme
  }`;

  return (
    <div className={styles.courseCardContainer} onClick={onClick}>
      <div className={styles.courseImgContainer}>
        <Image
          src="/course-img.jpeg"
          alt="#"
          width={960}
          height={540}
          className={styles.courseImg}
        />
      </div>

      <div className={styles.courseDetails}>
        <p className={courseHeadingStyles}>{courseTitle}</p>
        <div className={styles.courseInfo}>
          <span className={courseInfoTextStyles}>
            <VideoIcon isDarkMode={isDarkMode} /> {numberOFVideos} Videos
          </span>
          <span className={courseInfoTextStyles}>
            <PencilIcon isDarkMode={isDarkMode} /> {numberOFQuizzes} Quizzes
          </span>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
