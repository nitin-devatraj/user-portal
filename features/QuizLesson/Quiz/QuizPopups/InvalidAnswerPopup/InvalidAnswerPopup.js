import React from "react";
import styles from "./InvalidAnswerPopup.module.scss";
import PrimaryButton from "../../../../../ui-components/Buttons/PrimaryButton/PrimaryButton";
import Image from "next/image";

function InvalidAnswerPopup({ onRetryQuestion, explanationText }) {
  return (
    <div className={styles.invalidAnswerPopupContainer}>
      <div className={styles.popupDetails}>
        <div className={styles.popupTitle}>
          Better luck next time{" "}
          <Image
            src="/invalid-answer-emoji.svg"
            alt="#"
            width="35"
            height="35"
          />
        </div>
        <div className={styles.explanationContainer}>
          <span className={styles.explanationTitle}>Explanation</span>
          <span className={styles.explanationText}>{explanationText}</span>
        </div>
      </div>
      <PrimaryButton onClick={onRetryQuestion}>Retry question</PrimaryButton>
    </div>
  );
}

export default InvalidAnswerPopup;
