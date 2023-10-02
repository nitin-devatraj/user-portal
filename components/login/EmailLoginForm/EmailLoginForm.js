import React, { useState } from "react";
import styles from "./EmailLoginForm.module.scss";
import TextInput from "../../../ui-components/InputFields/TextInput/TextInput";
import PasswordInput from "../../../ui-components/InputFields/PasswordInput/PasswordInput";
import PrimaryButton from "../../../ui-components/Buttons/PrimaryButton/PrimaryButton";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";

function EmailLoginForm({ onSubmit, isSecondEmailForm }) {
  const router = useRouter();
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [showEmailHelperText, setShowEmailHelperText] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showPasswordHelperText, setShowPasswordHelperText] = useState(false);
  const [isForgotPasswordClicked, setisForgotPasswordClicked] = useState(false);

  const isLoginBtnDisabled = email.length < 1 || password.length < 1;
  const isContinueBtnDisabled = email.length < 1;

  const emailChangeHandler = (event) => {
    setIsEmailValid(true);
    setShowEmailHelperText(false);
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setIsPasswordValid(true);
    setShowPasswordHelperText(false);
    setPassword(event.target.value);
  };

  const isEnteredEmailValid = (email) => {
    return (
      email.trim() !== "" &&
      email.indexOf("@") !== -1 &&
      email.indexOf(".") !== -1
    );
  };

  const isEnteredPasswordValid = (password) => {
    return password.trim() !== "" && password.length >= 8;
  };

  const emailLoginSubmitHandler = () => {
    const isEmailValid = isEnteredEmailValid(email);
    const isPasswordValid = isEnteredPasswordValid(password);

    setIsEmailValid(isEmailValid);
    setShowEmailHelperText(!isEmailValid);
    setIsPasswordValid(isPasswordValid);
    setShowPasswordHelperText(!isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      router.push("/dashboard");
    }
  };

  const forgotPasswordHandler = () => {
    setisForgotPasswordClicked(true);
  };

  const forgotPasswordSubmitHandler = () => {
    if (!isEnteredEmailValid(email)) {
      setIsEmailValid(false);
      setShowEmailHelperText(true);
    } else {
      onSubmit();
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const formHeadingStyles = `${styles.formHeadingLightTheme} ${
    isDarkMode && styles.formHeadingDarkTheme
  }`;

  const forgotPasswordStyles = `${styles.forgotPasswordLightTheme} ${
    isDarkMode && styles.forgotPasswordDarkTheme
  }`;

  const attributionContentStyles = `${styles.attributionContentLightTheme} ${
    isDarkMode && styles.attributionContentDarkTheme
  }`;

  return (
    <form
      className={styles.emailLoginFormContainer}
      onSubmit={formSubmitHandler}
    >
      <div className={styles.form}>
        <h5 className={formHeadingStyles}>
          {!isForgotPasswordClicked ? " Login" : "Reset password"}
        </h5>

        <div className={styles.formInputContainer}>
          <TextInput
            type="text"
            label="Email"
            onChange={emailChangeHandler}
            value={email}
            helperText="enter a valid email address"
            showHelperText={showEmailHelperText}
            invalid={!isEmailValid}
          />

          {!isForgotPasswordClicked && (
            <div>
              <PasswordInput
                type="password"
                label="Password"
                onChange={passwordChangeHandler}
                value={password}
                helperText="minimum 8 digits required"
                showHelperText={showPasswordHelperText}
                invalid={!isPasswordValid}
              />
              {!isSecondEmailForm && (
                <span
                  className={forgotPasswordStyles}
                  onClick={forgotPasswordHandler}
                >
                  Forgot your password ?
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className={styles.footer}>
        {!isForgotPasswordClicked ? (
          <PrimaryButton
            onClick={emailLoginSubmitHandler}
            type="submit"
            disabled={isLoginBtnDisabled}
          >
            Login
          </PrimaryButton>
        ) : (
          <PrimaryButton
            onClick={forgotPasswordSubmitHandler}
            type="submit"
            disabled={isContinueBtnDisabled}
          >
            Continue
          </PrimaryButton>
        )}

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

export default EmailLoginForm;
