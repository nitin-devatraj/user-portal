import React, { useState } from "react";
import styles from "./ResetPasswordForm.module.scss";
import PasswordInput from "../../../ui-components/InputFields/PasswordInput/PasswordInput";
import PrimaryButton from "../../../ui-components/Buttons/PrimaryButton/PrimaryButton";
import { useSelector } from "react-redux";
import Image from "next/image";

function ResetPasswordForm({ onSubmit }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const [newPassword, setNewPassword] = useState("");
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [doPasswordsMatch, setDoPasswordsMatch] = useState(true);
  const [showNewPasswordHelperText, setShowNewPasswordHelperText] =
    useState(false);
  const [showConfirmPasswordHelperText, setShowConfirmPasswordHelperText] =
    useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

  const isResetPasswordBtnDisabled =
    newPassword.length < 1 || confirmPassword.length < 1;

  const newPasswordChangeHandler = (event) => {
    setIsNewPasswordValid(true);
    setShowNewPasswordHelperText(false);
    setNewPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    setIsConfirmPasswordValid(true);
    setShowConfirmPasswordHelperText(false);
    setConfirmPassword(event.target.value);
  };

  const isEnteredPasswordValid = (password) => {
    return password.trim() !== "" && password.length >= 8;
  };

  const isConfirmedPasswordValid = (password) => {
    return password.trim() !== "" && password.length >= 8;
  };

  const passwordsMatch = (password1, password2) => {
    if (password1 === password2) {
      setDoPasswordsMatch(true);
      return true;
    }

    setDoPasswordsMatch(false);
    return false;
  };

  const resetPasswordSubmitHandler = () => {
    const enteredPasswordValid = isEnteredPasswordValid(newPassword);
    const confirmedPasswordValid = isConfirmedPasswordValid(confirmPassword);
    const doPasswordsMatch = passwordsMatch(newPassword, confirmPassword);

    setIsNewPasswordValid(enteredPasswordValid && doPasswordsMatch);
    setIsConfirmPasswordValid(confirmedPasswordValid && doPasswordsMatch);
    setShowNewPasswordHelperText(!enteredPasswordValid || !doPasswordsMatch);
    setShowConfirmPasswordHelperText(
      !confirmedPasswordValid || !doPasswordsMatch
    );

    if (enteredPasswordValid && confirmedPasswordValid && doPasswordsMatch) {
      onSubmit();
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const formHeadingStyles = `${styles.formHeadingLightTheme} ${
    isDarkMode && styles.formHeadingDarkTheme
  }`;

  const attributionContentStyles = `${styles.attributionContentLightTheme} ${
    isDarkMode && styles.attributionContentDarkTheme
  }`;

  return (
    <form
      className={styles.resetPasswordFormContainer}
      onSubmit={formSubmitHandler}
    >
      <div className={styles.form}>
        <h6 className={formHeadingStyles}>Set your password</h6>

        <div className={styles.formInputContainer}>
          <PasswordInput
            label="New password"
            onChange={newPasswordChangeHandler}
            value={newPassword}
            helperText={
              doPasswordsMatch
                ? "minimum 8 characters required"
                : "passwords do not match"
            }
            showHelperText={showNewPasswordHelperText}
            invalid={!isNewPasswordValid}
          />
          <PasswordInput
            label="Confirm password"
            onChange={confirmPasswordChangeHandler}
            value={confirmPassword}
            helperText={
              doPasswordsMatch
                ? "minimum 8 characters required"
                : "passwords do not match"
            }
            showHelperText={showConfirmPasswordHelperText}
            invalid={!isConfirmPasswordValid}
          />
        </div>
      </div>

      <div className={styles.footer}>
        <PrimaryButton
          onClick={resetPasswordSubmitHandler}
          type="submit"
          disabled={isResetPasswordBtnDisabled}
        >
          Reset password
        </PrimaryButton>

        <span className={attributionContentStyles}>
          Powered by
          {isDarkMode ? (
            <Image
              src="/chaabi-logo-all-white.svg"
              alt="chaabi-logo"
              width={46}
              height={12}
            />
          ) : (
            <Image
              src="/chaabi-logo-dark.svg"
              alt="chaabi-logo"
              width={46}
              height={12}
            />
          )}
        </span>
      </div>
    </form>
  );
}

export default ResetPasswordForm;
