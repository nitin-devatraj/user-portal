import React from "react";
import styles from "./QuizLession.module.scss";
import Question from "./Icons/Question";
import Time from "./Icons/Time";
import Score from "./Icons/Score";
import { useSelector } from "react-redux";
import Image from "next/image";

function QuizLesson({
  totalQuestions,
  timeInSec,
  attemptsAllowed,
  passingScore,
}) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const quizDetailsStyles = `${styles.quizDetailsLightTheme} ${
    isDarkMode && styles.quizDetailsDarkTheme
  }`;

  const totalQuestionsStyles = `${styles.totalQuestionsLightTheme} ${
    isDarkMode && styles.totalQuestionsDarkTheme
  }`;
  const timeDurationStyles = `${styles.timeDurationLightTheme} ${
    isDarkMode && styles.timeDurationDarkTheme
  }`;
  const passingScoreStyles = `${styles.passingScoreLightTheme} ${
    isDarkMode && styles.passingScoreDarkTheme
  }`;

  return (
    <div className={styles.quizLessonContainer}>
      {isDarkMode ? (
        <Image
          src="/quiz-banner-dark-theme.svg"
          width="312"
          height="197"
          alt="#"
        />
      ) : (
        <Image
          src="/quiz-banner-light-theme.svg"
          width="312"
          height="197"
          alt="#"
        />
      )}

      <div className={quizDetailsStyles}>
        <span className={totalQuestionsStyles}>
          <Question isDarkMode={isDarkMode} />
          Questions : {totalQuestions}
        </span>

        <span className={timeDurationStyles}>
          <Time isDarkMode={isDarkMode} />
          Total : {timeInSec} Seconds
        </span>

        <span className={passingScoreStyles}>
          <Score isDarkMode={isDarkMode} />
          Passing Score : {passingScore}%
        </span>
      </div>
    </div>
  );
}

export default QuizLesson;
