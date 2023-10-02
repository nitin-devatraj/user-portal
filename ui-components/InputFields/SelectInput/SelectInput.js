import React, { useState, useRef } from "react";
import styles from "./SelectInput.module.scss";
import ArrowIcon from "./ArrowIcon/ArrowIcon";
import { useSelector } from "react-redux";

function SelectInput({ label, options }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropDownRef = useRef();

  const inputClickHandler = () => {
    setIsDropDownOpen((isDropDownOpen) => !isDropDownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropDownOpen(false);
  };

  const labelStyles = `${styles.labelLightTheme}  ${
    isDarkMode && styles.labelDarkTheme
  }`;

  const inputStyles = `${styles.inputLightTheme} ${
    isDarkMode && styles.inputDarkTheme
  } ${isDropDownOpen && !isDarkMode && styles.inputClickedLightTheme}
  ${isDropDownOpen && isDarkMode && styles.inputClickedDarkTheme}
  `;

  const dropdownContainerStyles = `${styles.dropdownContainerLightTheme} ${
    isDarkMode && styles.dropdownContainerDarkTheme
  }`;

  const dropdownItemStyles = `${styles.dropdownItemLightTheme} ${
    isDarkMode && styles.dropdownItemDarkTheme
  }`;

  return (
    <div className={styles.selectInputContainer}>
      <div className={styles.inputContainer}>
        <label htmlFor="select-input" className={labelStyles}>
          {label}
        </label>
        <div
          id="select-input"
          className={inputStyles}
          onClick={inputClickHandler}
        >
          {selectedOption ?? "select an option"}
          {isDropDownOpen ? (
            <ArrowIcon direction="bottom" isDarkMode={isDarkMode} />
          ) : (
            <ArrowIcon direction="right" isDarkMode={isDarkMode} />
          )}
        </div>
      </div>
      {isDropDownOpen && (
        <div className={dropdownContainerStyles} ref={dropDownRef}>
          {options.map((item) => (
            <div
              className={dropdownItemStyles}
              key={Math.random().toFixed("3")}
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectInput;
