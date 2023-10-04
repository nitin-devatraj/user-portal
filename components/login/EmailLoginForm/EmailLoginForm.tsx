import React, { useState } from "react";
import styles from "./EmailLoginForm.module.scss";
import TextInput from "../../../ui-components/InputFields/TextInput/TextInput";
import PasswordInput from "../../../ui-components/InputFields/PasswordInput/PasswordInput";
import PrimaryButton from "../../../ui-components/Buttons/PrimaryButton/PrimaryButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Image from "next/image";
import { useRouter } from "next/router";

interface EmailLoginFormProps {
  onSubmit: () => void;
  isSecondEmailForm: boolean;
}

const EmailLoginForm = ({
  onSubmit,
  isSecondEmailForm,
}: EmailLoginFormProps): React.JSX.Element => {
  const router = useRouter();
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [showEmailHelperText, setShowEmailHelperText] =
    useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [showPasswordHelperText, setShowPasswordHelperText] =
    useState<boolean>(false);
  const [isForgotPasswordClicked, setisForgotPasswordClicked] =
    useState<boolean>(false);

  const isLoginBtnDisabled: boolean = email.length < 1 || password.length < 1;
  const isContinueBtnDisabled: boolean = email.length < 1;

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEmailValid(true);
    setShowEmailHelperText(false);
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsPasswordValid(true);
    setShowPasswordHelperText(false);
    setPassword(event.target.value);
  };

  const isEnteredEmailValid = (email: string) => {
    return (
      email.trim() !== "" &&
      email.indexOf("@") !== -1 &&
      email.indexOf(".") !== -1
    );
  };

  const isEnteredPasswordValid = (password: string) => {
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

  const formSubmitHandler = (event: React.FormEvent) => {
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
            disabled={false}
            required={false}
            placeholder=""
          />

          {!isForgotPasswordClicked && (
            <div>
              <PasswordInput
                label="Password"
                onChange={passwordChangeHandler}
                value={password}
                helperText="minimum 8 digits required"
                showHelperText={showPasswordHelperText}
                invalid={!isPasswordValid}
                disabled={false}
                required={false}
                placeholder=""
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
};

export default EmailLoginForm;
