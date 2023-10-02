import React, { useEffect } from "react";
import styles from "./TabGroup.module.scss";
import { useSelector } from "react-redux";

function TabGroup({ tabs, onTabSelect, selectedTab }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const TabClickHandler = (event) => {
    onTabSelect(event.target.id);
  };

  useEffect(() => {
    onTabSelect(selectedTab);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.tabGroupContainer}>
      {tabs.map((item) => {
        const isButtonSelected = selectedTab === item;
        const btnStyles = `${styles.tabLightTheme} ${
          isDarkMode && styles.tabDarkTheme
        } ${isButtonSelected && styles.selectedTabLightTheme} ${
          isDarkMode && isButtonSelected && styles.selectedTabDarkTheme
        }`;

        return (
          <button
            className={btnStyles}
            key={item}
            id={item}
            onClick={TabClickHandler}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default TabGroup;
