import React from "react";
import styles from "./QuizCheckBox.module.scss";
import { ReactComponent as CheckIcon } from "../../../assets/icons/components/buttons/quiz-check-box/checkbox-icon.svg";

function QuizCheckBox({ valid, invalid, isSelected }) {
  return (
    <div
      className={`${styles.quizCheckBox} ${valid === true && styles.valid}
      ${invalid === true && styles.invalid}
      `}
    >
      {isSelected === true && <CheckIcon />}
    </div>
  );
}

export default QuizCheckBox;
