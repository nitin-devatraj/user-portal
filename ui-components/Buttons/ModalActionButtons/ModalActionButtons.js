import React from "react";
import styles from "./ModalActionButtons.module.scss";
import { useSelector } from "react-redux";

function ModalActionButtons({ secondaryButtonText, primaryButtonText }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const modalActionBtnStyles = isDarkMode
    ? styles.modalActionBtnsDarkTheme
    : styles.modalActionBtnsLightTheme;

  const secondaryBtnStyles = isDarkMode
    ? styles.secondaryBtnDarkTheme
    : styles.secondaryBtnLightTheme;

  const primaryBtnStyles = isDarkMode
    ? styles.primaryBtnDarkTheme
    : styles.primaryBtnLightTheme;

  return (
    <div className={modalActionBtnStyles}>
      <button className={secondaryBtnStyles}>{secondaryButtonText}</button>
      <button className={primaryBtnStyles}>{primaryButtonText}</button>
    </div>
  );
}

export default ModalActionButtons;
