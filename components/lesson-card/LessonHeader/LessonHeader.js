import React from "react";
import styles from "./LessonHeader.module.scss";
import PrevIcon from "../Icons/PrevIcon";
import NextIcon from "../Icons/NextIcon";
import { useSelector } from "react-redux";

function LessonHeader({
  lessonType,
  onPrevClick,
  onNextClick,
  isPrevBtnDisabled,
  isNextBtnDisabled,
}) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  let lessonIconStyles;
  let lessonTypeModified;

  switch (lessonType) {
    case "video":
      lessonIconStyles = `${styles.lessonIcon} ${styles.videoIcon}`;
      lessonTypeModified = "Video";
      break;
    case "audio":
      lessonIconStyles = `${styles.lessonIcon} ${styles.audioIcon}`;
      lessonTypeModified = "Audio";
      break;
    case "quiz":
      lessonIconStyles = `${styles.lessonIcon} ${styles.quizIcon}`;
      lessonTypeModified = "Quiz";
      break;
    case "document":
      lessonIconStyles = `${styles.lessonIcon} ${styles.documentIcon}`;
      lessonTypeModified = "Doc";
      break;
    case "assessment":
      lessonIconStyles = `${styles.lessonIcon} ${styles.assessmentIcon}`;
      lessonTypeModified = "Review";
      break;
    default:
      lessonIconStyles = `${styles.lessonIcon}`;
      lessonTypeModified = "";
  }

  const lessonHeaderContainerStyles = `${
    styles.lessonHeaderContainerLightTheme
  } ${isDarkMode && styles.lessonHeaderContainerDarkTheme}`;

  const lessonNameStyles = `${styles.lessonNameLightTheme} ${
    isDarkMode && styles.lessonNameDarkTheme
  }`;

  const prevNavButtonStyles = `${styles.prevNavButtonLightTheme} ${
    isDarkMode && !isPrevBtnDisabled && styles.prevNavButtonDarkTheme
  }  ${isPrevBtnDisabled && styles.navButtonDisabledLightTheme} ${
    isDarkMode && isPrevBtnDisabled && styles.navButtonDisabledDarkTheme
  }`;

  const nextNavButtonStyles = `${styles.nextNavButtonLightTheme} ${
    isDarkMode && !isNextBtnDisabled && styles.nextNavButtonDarkTheme
  } ${isNextBtnDisabled && styles.navButtonDisabledLightTheme} ${
    isDarkMode && isNextBtnDisabled && styles.navButtonDisabledDarkTheme
  }`;

  return (
    <div className={lessonHeaderContainerStyles}>
      <div className={styles.lessonHeader}>
        <span className={lessonIconStyles}>{lessonTypeModified}</span>
        <span className={lessonNameStyles}>
          Zippee rider operating training that work amazingly well
          {/* {lessonName} */}
        </span>
      </div>

      <div className={styles.navButtonContainer}>
        <span className={prevNavButtonStyles} onClick={onPrevClick}>
          {!isPrevBtnDisabled && (
            <PrevIcon isDarkMode={isDarkMode} isDisabled={isPrevBtnDisabled} />
          )}
          Prev Lesson
        </span>
        <span className={nextNavButtonStyles} onClick={onNextClick}>
          {!isNextBtnDisabled && (
            <>
              Next Lesson
              <NextIcon
                isDarkMode={isDarkMode}
                isDisabled={isNextBtnDisabled}
              />
            </>
          )}
        </span>
      </div>
    </div>
  );
}

export default LessonHeader;
