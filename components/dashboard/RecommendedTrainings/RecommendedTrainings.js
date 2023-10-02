import React from "react";
import styles from "./RecommendedTrainings.module.scss";
import CourseCard from "../CourseCard/CourseCard";
import { useSelector } from "react-redux";

function RecommendedTrainings({ dummyTrainings }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const recommendedTrainingsContainerStyles = `${
    styles.recommendedTrainingsContainerLightTheme
  } ${isDarkMode && styles.recommendedTrainingsContainerDarkTheme}`;

  const recommendedTrainingHeadingStyles = `${
    styles.recommendedTrainingHeadingLightTheme
  } ${isDarkMode && styles.recommendedTrainingHeadingDarkTheme}`;

  return (
    <section className={recommendedTrainingsContainerStyles}>
      <span className={recommendedTrainingHeadingStyles}>
        Recommended Trainings for You
      </span>
      <div className={styles.trainingsCarousel}>
        {dummyTrainings.map((item) => (
          <CourseCard
            courseTitle={item.title}
            numberOFVideos={item.numberOfVideos}
            numberOFQuizzes={item.numberOfQuizzes}
            key={item.id}
            onClick={item.onClick}
          />
        ))}
      </div>
    </section>
  );
}

export default RecommendedTrainings;
