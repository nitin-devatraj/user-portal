import React from "react";
import styles from "./TextInput.module.scss";
import { useSelector } from "react-redux";
import Image from "next/image";

function TextInput({
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
}) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

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

  const randomId = Math.random().toFixed(3);

  return (
    <div className={styles.textInputContainer}>
      <label htmlFor={randomId} className={labelStyles}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input
          className={inputStyles}
          type={type}
          id={randomId}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
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
}

export default TextInput;
