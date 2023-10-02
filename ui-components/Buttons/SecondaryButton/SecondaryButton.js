import React from "react";
import styles from "./SecondaryButton.module.scss";
import { useSelector } from "react-redux";

function SecondaryButton({ disabled, onClick, children, className, type }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const secondaryBtnStyles = `${styles.secondaryBtnLightTheme} ${
    isDarkMode && styles.secondaryBtnDarkTheme
  } ${className}`;

  return (
    <button
      className={secondaryBtnStyles}
      disabled={disabled}
      onClick={onClick}
      type={type ?? "button"}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
