import React from "react";
import styles from "./QuizProgress.module.scss";
import ProgressBar from "../../../../ui-components/ProgressBar/ProgressBar";
import ClockIcon from "../Icons/ClockIcon";
import { useSelector } from "react-redux";

function QuizProgress({ currentQuestion, totalQuestions, timeLeft }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  const quizTimerStyles = `${styles.quizTimerActive} ${
    timeLeft <= 0 && styles.quizTimerExpired
  }`;

  const quizTimerTextStyles = `${styles.quizTimerTextActive} ${
    timeLeft <= 0 && styles.quizTimerTextExpired
  }`;

  const numberOfQuestionsStyles = `${styles.numberOfQuestionsLightTheme} ${
    isDarkMode && styles.numberOfQuestionsDarkTheme
  }`;

  return (
    <section className={styles.quizProgressContainer}>
      <div className={styles.quizProgressHeader}>
        <div className={quizTimerStyles}>
          <ClockIcon timeLeft={timeLeft} />
          <span className={quizTimerTextStyles}>
            {timeLeft < 10 ? `00:0${timeLeft}` : `00: ${timeLeft}`}
          </span>
        </div>
        <span className={numberOfQuestionsStyles}>
          {currentQuestion < 10 ? `0${currentQuestion}` : currentQuestion}/
          {totalQuestions}
        </span>
      </div>
      <ProgressBar progress={progressPercentage} />
    </section>
  );
}

export default QuizProgress;
