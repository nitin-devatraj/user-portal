import React, { useState } from "react";
import styles from "./Tab.module.scss";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import Image from "next/image";

function Tab({ item, isDarkMode }) {
  const [isTabClicked, setIsTabClicked] = useState(false);
  // const chapterId = item.id;

  const tabClickHandler = () => {
    setIsTabClicked((isTabClicked) => !isTabClicked);
  };

  const tabStyles = `${styles.tabLightTheme} ${
    isDarkMode && styles.tabDarkTheme
  }`;

  const tabContentStyles = `${styles.tabContentLightTheme} ${
    isDarkMode && styles.tabContentDarkTheme
  }`;

  const emptyFunc = () => {};

  return (
    <div className={styles.tabContainer}>
      <div className={tabStyles} onClick={tabClickHandler}>
        <div>{item.chapterName}</div>
        {isTabClicked ? (
          <ArrowDownIcon isDarkMode={isDarkMode} />
        ) : (
          <ArrowRightIcon isDarkMode={isDarkMode} />
        )}
      </div>
      {isTabClicked &&
        item.lessonsList.map((item) => (
          <div
            key={item.id}
            className={tabContentStyles}
            onClick={item.onClick ?? emptyFunc}
          >
            {item.access === true ? (
              <Image src="/unlock-icon.svg" alt="#" width="25" height="25" />
            ) : (
              <Image src="/lock-icon.svg" alt="#" width="25" height="25" />
            )}
            <span>{item.name}</span>
          </div>
        ))}
    </div>
  );
}

export default Tab;
