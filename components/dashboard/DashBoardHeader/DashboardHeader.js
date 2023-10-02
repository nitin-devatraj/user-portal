import React from "react";
import styles from "./DashboardHeader.module.scss";
import { useSelector } from "react-redux";
import Image from "next/image";

function DashboardHeader() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const headerTitleStyles = `${styles.headerTitleLightTheme} ${
    isDarkMode && styles.headerTitleDarkTheme
  }`;

  const headerSubTitleStyles = `${styles.headerSubTitleLightTheme} ${
    isDarkMode && styles.headerSubTitleDarkTheme
  }`;

  return (
    <header className={styles.dashboardHeaderContainer}>
      <nav className={styles.headerNav}>
        <Image
          src="/company-logo.png"
          alt="#"
          width={120}
          height={40}
          className={styles.logo}
        />
      </nav>
      <div>
        <h6 className={headerTitleStyles}>Hello, Puneet Dhiman</h6>
        <p className={headerSubTitleStyles}>
          <Image src="/fire-icon.svg" alt="#" width="14" height="18" />
          keep going, you are doing great
        </p>
      </div>
    </header>
  );
}

export default DashboardHeader;
