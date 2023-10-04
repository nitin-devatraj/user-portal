import React, { useRef, useState } from "react";
import styles from "./PhoneInput.module.scss";
import ArrowIcon from "./ArrowIcon/ArrowIcon";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import Image from "next/image";

interface PhoneInputProps {
  label: string;
  helperText: string;
  disabled: boolean;
  required: boolean;
  type: string;
  placeholder: string;
  showHelperText: boolean;
  onChange: (value: string) => void;
  value: string;
  invalid: boolean;
  countryCodesList: string[];
}

const PhoneInput = ({
  label,
  helperText,
  disabled,
  required,
  type,
  placeholder,
  showHelperText,
  onChange,
  value,
  invalid,
  countryCodesList,
}: PhoneInputProps): React.JSX.Element => {
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(countryCodesList[0]);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const inputClickHandler = () => {
    if (!disabled) {
      setIsDropDownOpen((isDropDownOpen) => !isDropDownOpen);
    }
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsDropDownOpen(false);
  };

  const phoneInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange(event.target.value);
  };

  const labelStyles = `${styles.labelLightTheme} ${
    isDarkMode && styles.labelDarkTheme
  } ${disabled && styles.disabledLabel}`;

  const inputStyles = `${styles.inputLightTheme} ${
    isDarkMode && styles.inputDarkTheme
  } ${invalid && styles.inputInvalidLightTheme} ${
    invalid && isDarkMode && styles.inputInvalidDarkTheme
  }`;

  const helperTextStyles = `${styles.helperText} ${
    disabled && styles.disabledHelperText
  } ${invalid && styles.helperTextInvalidLightTheme} ${
    invalid && isDarkMode && styles.helperTextInvalidDarkTheme
  }`;

  const selectInputStyles = `${styles.selectInputLightTheme} ${
    isDarkMode && styles.selectInputDarkTheme
  } ${!isDarkMode && disabled && styles.disabledSelectInputLightTheme} ${
    isDarkMode && disabled && styles.disabledSelectInputDarkTheme
  }`;

  const dropdownContainerStyles = `${styles.dropdownContainerLightTheme} ${
    isDarkMode && styles.dropdownContainerDarkTheme
  }`;

  const dropdownItemStyles = `${styles.dropdownItemLightTheme} ${
    isDarkMode && styles.dropdownItemDarkTheme
  }`;

  const randomId: string = Math.random().toString();

  return (
    <div className={styles.phoneInputContainer}>
      {label && (
        <label htmlFor={randomId} className={labelStyles}>
          {label}
        </label>
      )}

      <div className={styles.inputContainer}>
        <div className={styles.selectInput}>
          <div
            id="select-input"
            className={selectInputStyles}
            onClick={inputClickHandler}
          >
            {selectedOption ?? "select an option"}
            {isDropDownOpen ? (
              <ArrowIcon direction="bottom" isDarkMode={isDarkMode} />
            ) : (
              <ArrowIcon direction="right" isDarkMode={isDarkMode} />
            )}
          </div>
          {isDropDownOpen && (
            <div className={dropdownContainerStyles} ref={dropDownRef}>
              {countryCodesList.map((item, index) => (
                <div
                  className={dropdownItemStyles}
                  key={index}
                  onClick={() => handleOptionClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        <input
          className={inputStyles}
          type={type}
          id={randomId}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          onChange={phoneInputChangeHandler}
          value={value}
        />

        {invalid && (
          <Image
            src="/invalid-input-icon.svg"
            alt="#"
            width={16}
            height={16}
            className={styles.invalidIcon}
          />
        )}
        {showHelperText && <p className={helperTextStyles}>{helperText}</p>}
      </div>
    </div>
  );
};

export default PhoneInput;
