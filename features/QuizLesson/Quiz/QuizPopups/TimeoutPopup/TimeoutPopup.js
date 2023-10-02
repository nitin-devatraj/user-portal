import React from "react";
import styles from "./TimeoutPopup.module.scss";
import Image from "next/image";

function TimeoutPopup({ timeoutTitle, timeoutText, onGoToResults }) {
  return (
    <div className={styles.timeoutPopupContainer}>
      <Image src="/timeout-emoji.svg" alt="#" width="96" height="96" />
      <h6 className={styles.popupTitle}>{timeoutTitle}</h6>
      <p className={styles.popupText}>{timeoutText}</p>
      <button className={styles.actionButton} onClick={onGoToResults}>
        Go To Results
      </button>
    </div>
  );
}

export default TimeoutPopup;
