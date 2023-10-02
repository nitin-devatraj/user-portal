import React from "react";
import styles from "./IndividualQuiz.module.scss";
import { useSelector } from "react-redux";
import CheckIcon from "../Icons/CheckIcon";

function IndividualQuiz({
  quizName,
  quizOptions,
  optionClickHandler,
  selectedOption,
  isCorrect,
}) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const quizQuestionStyles = `${styles.quizQuestionLightTheme} ${
    isDarkMode && styles.quizQuestionDarkTheme
  }`;

  return (
    <div className={styles.individualQuizContainer}>
      <p className={quizQuestionStyles}>Q. {quizName} ?</p>

      <div className={styles.quizOptionContainer}>
        {quizOptions.map((quizOption, index) => {
          const optionLabel = String.fromCharCode(97 + index);
          const isQuizBtnSelected = selectedOption === quizOption;
          const isQuizBtnSelectedDarkMode = isDarkMode && isQuizBtnSelected;
          const quizOptionBtnStyles = `${styles.quizOptionBtnLightTheme} ${
            isDarkMode && styles.quizOptionBtnDarkTheme
          } ${isQuizBtnSelected && styles.selectedOptionLightTheme} 
             ${isQuizBtnSelectedDarkMode && styles.selectedOptionDarkTheme} 
             ${isCorrect && isQuizBtnSelected && styles.validOption} 
             ${!isCorrect && isQuizBtnSelected && styles.invalidOption}`;

          const optionHandler = () => {
            optionClickHandler(quizOption);
          };

          return (
            <button
              key={index}
              className={quizOptionBtnStyles}
              onClick={optionHandler}
            >
              <span className={styles.quizOptionText}>
                {optionLabel}. {quizOption}
              </span>
              {isQuizBtnSelected && <CheckIcon isDarkMode={isDarkMode} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default IndividualQuiz;
