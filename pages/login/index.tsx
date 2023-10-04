import React, { useState } from "react";
import styles from "./Login.module.scss";
import LandingPage from "../../components/login/LandingPage/LandingPage";
import MobileLoginForm from "../../components/login/MobileLoginForm/MobileLoginForm";
import EmailLoginForm from "../../components/login/EmailLoginForm/EmailLoginForm";
import ResetPasswordForm from "../../components/login/ResetPasswordForm/ResetPasswordForm";
import MailVerification from "../../components/login/MailVerification/MailVerification";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Image from "next/image";

const Login = (): React.JSX.Element => {
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);
  // eslint-disable-next-line
  const [defaultLoginMethod, setDefaultLoginMethod] =
    useState<string>("mobile");
  const [isLoginBtnClicked, setIsLoginBtnClicked] = useState<boolean>(false);
  const [showMailVerification, setShowMailVerification] =
    useState<boolean>(false);
  const [showResetPasswordForm, setShowResetPasswordForm] =
    useState<boolean>(false);
  const [showFirstEmailForm, setShowFirstEmailForm] = useState<boolean>(true);
  const [showSecondEmailForm, setShowSecondEmailForm] =
    useState<boolean>(false);

  const emailLoginFormHandler = () => {
    setShowFirstEmailForm(false);
    setShowMailVerification(true);
  };

  const mailVerificationHandler = () => {
    setShowMailVerification(false);
    setShowResetPasswordForm(true);
  };

  const resetPasswordFormHandler = () => {
    setShowResetPasswordForm(false);
    setShowFirstEmailForm(false);
    setShowSecondEmailForm(true);
  };

  const loginContainerStyles = `${styles.loginContainerLightTheme} ${
    isDarkMode && styles.loginContainerDarkTheme
  }`;

  return (
    <div className={loginContainerStyles}>
      <Image
        src="/company-logo.png"
        alt="company-logo"
        width={120}
        height={40}
        className={styles.logo}
      />

      {!isLoginBtnClicked && (
        <LandingPage
          loginMethod={defaultLoginMethod}
          onLoginBtnClick={setIsLoginBtnClicked}
        />
      )}

      {isLoginBtnClicked && defaultLoginMethod === "mobile" && (
        <MobileLoginForm />
      )}

      {isLoginBtnClicked &&
        showFirstEmailForm &&
        defaultLoginMethod === "email" && (
          <EmailLoginForm
            onSubmit={emailLoginFormHandler}
            isSecondEmailForm={false}
          />
        )}

      {isLoginBtnClicked &&
        showMailVerification &&
        defaultLoginMethod === "email" && (
          <MailVerification onSubmit={mailVerificationHandler} />
        )}

      {isLoginBtnClicked &&
        showResetPasswordForm &&
        defaultLoginMethod === "email" && (
          <ResetPasswordForm onSubmit={resetPasswordFormHandler} />
        )}

      {isLoginBtnClicked &&
        showSecondEmailForm &&
        defaultLoginMethod === "email" && (
          <EmailLoginForm isSecondEmailForm={true} />
        )}
    </div>
  );
};

export default Login;
