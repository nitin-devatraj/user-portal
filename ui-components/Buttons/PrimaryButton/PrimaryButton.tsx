import React from "react";
import styles from "./PrimaryButton.module.scss";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

interface PrimaryButtonProps {
  disabled: boolean;
  type: "button" | "submit" | "reset";
  onClick: () => void;
  children: React.ReactNode;
}

const PrimaryButton = ({
  disabled,
  onClick,
  children,
  type,
}: PrimaryButtonProps): React.JSX.Element => {
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);

  const primaryBtnStyles = `${styles.primaryBtnLightTheme} ${
    isDarkMode && styles.primaryBtnDarkTheme
  }`;

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
};

export default PrimaryButton;
