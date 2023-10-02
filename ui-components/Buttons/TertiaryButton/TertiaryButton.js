import React from "react";
import styles from "./TertiaryButton.module.scss";
import { useSelector } from "react-redux";

function TertiaryButton({ disabled, onClick, className, children, type }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const tertiaryBtnStyles = `${styles.tertiaryBtnLightTheme} ${
    isDarkMode && styles.tertiaryBtnDarkTheme
  } ${className}`;

  return (
    <button
      className={tertiaryBtnStyles}
      disabled={disabled}
      onClick={onClick}
      type={type ?? "button"}
    >
      {children}
    </button>
  );
}

export default TertiaryButton;
