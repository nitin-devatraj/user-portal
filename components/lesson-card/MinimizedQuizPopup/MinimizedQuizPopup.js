import React from "react";
import styles from "./MinimizedQuizPopup.module.scss";
import typography from "../../../styles/global-styles.module.scss";
import Image from "next/image";

function MinimizedQuizPopup({ onQuizMaximizise, lessonName }) {
  return (
    <div
      className={styles.minimizedQuizPopupContainer}
      onClick={onQuizMaximizise}
    >
      <div className={styles.cta}>
        <span>
          <Image src="/arrow-up.svg" alt="#" width="24" height="24" />
        </span>
        <p className={typography.t3Med}>Continue Your Quiz</p>
      </div>
      <div className={styles.quizInfo}>
        <p className={typography.t3Lite}>{lessonName}</p>
      </div>
    </div>
  );
}

export default MinimizedQuizPopup;
