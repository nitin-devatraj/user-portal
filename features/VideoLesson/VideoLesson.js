import React from "react";
import styles from "./VideoLesson.module.scss";

function VideoLesson({ orientation }) {
  const videoPlayerStyles = `${styles.videoPlayer} ${
    orientation === "portrait" && styles.portraitMode
  }`;

  return (
    <div className={styles.videoLessonContainer}>
      {/* eslint-disable-next-line */}
      <iframe
        className={videoPlayerStyles}
        src="https://www.youtube.com/embed/uBk-Wst_7aA?si=pFKNWmrFhhmuIqEm"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoLesson;
