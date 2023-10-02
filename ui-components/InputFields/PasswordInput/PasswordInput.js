import React, { useState } from "react";
import styles from "./PasswordInput.module.scss";
import ShowPasswordIcon from "./ShowPasswordIcon/ShowPasswordIcon";
import HidePasswordIcon from "./HidePasswordIcon/HidePasswordIcon";
import { useSelector } from "react-redux";

function PasswordInput({
  label,
  helperText,
  disabled,
  required,
  placeholder,
  showHelperText,
  onChange,
  value,
  invalid,
}) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

  const randomId = Math.random().toFixed(3);

  return (
    <div className={styles.passwordInputContainer}>
      <label htmlFor={randomId} className={labelStyles}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input
          className={inputStyles}
          type={showPassword ? "text" : "password"}
          id={randomId}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {showPassword ? (
          <ShowPasswordIcon
            className={styles.passwordIcon}
            onClick={togglePasswordVisibility}
            invalid={invalid}
            isDarkMode={isDarkMode}
          />
        ) : (
          <HidePasswordIcon
            className={styles.passwordIcon}
            onClick={togglePasswordVisibility}
            invalid={invalid}
            isDarkMode={isDarkMode}
          />
        )}

        {showHelperText && <p className={helperTextStyles}>{helperText}</p>}
      </div>
    </div>
  );
}

export default PasswordInput;
