import React from "react";
import styles from "./PrimaryButton.module.scss";
import { useSelector } from "react-redux";

function PrimaryButton({ disabled, onClick, className, children, type }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const primaryBtnStyles = `${styles.primaryBtnLightTheme} ${
    isDarkMode && styles.primaryBtnDarkTheme
  } ${className}`;

  return (
    <button
      className={primaryBtnStyles}
      disabled={disabled}
      onClick={onClick}
      type={type ?? "button"}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
