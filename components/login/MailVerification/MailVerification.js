import React, { useState, useRef } from "react";
import styles from "./MailVerification.module.scss";
import PrimaryButton from "../../../ui-components/Buttons/PrimaryButton/PrimaryButton";
import FourDigitInput from "../FourDigitInput/FourDigitInput";
import { useSelector } from "react-redux";
import Image from "next/image";

function MailVerification({ onSubmit }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const [showOpenEmail, setShowOpenEmail] = useState(true);
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [showRequiredText, setShowRequiredText] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const openEmailHandler = () => {
    setShowOpenEmail(false);
  };

  const areAnyDigitsOmitted = digits.some((digit) => digit === "");

  const handleChange = (index, event) => {
    setShowRequiredText(false);

    const newDigits = [...digits];
    newDigits[index] = event.target.value;
    setDigits(newDigits);

    if (index < inputRefs.length - 1 && event.target.value !== "") {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === "Backspace" && index >= 1 && !event.currentTarget.value) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const submitOtpHandler = () => {
    if (areAnyDigitsOmitted) {
      setShowRequiredText(areAnyDigitsOmitted);
    } else {
      onSubmit();
    }
  };

  const ctaTextHeadingStyles = `${styles.ctaTextHeadingLightTheme} ${
    isDarkMode && styles.ctaTextHeadingDarkTheme
  }`;

  const ctaTextStyles = `${styles.ctaTextLightTheme} ${
    isDarkMode && styles.ctaTextDarkTheme
  }`;

  const verificationHeadingStyles = `${styles.verificationHeadingLightTheme} ${
    isDarkMode && styles.verificationHeadingDarkTheme
  }`;

  const attributionContentStyles = `${styles.attributionContentLightTheme} ${
    isDarkMode && styles.attributionContentDarkTheme
  }`;

  return (
    <div className={styles.mailVerificationContainer}>
      {showOpenEmail ? (
        <div className={styles.ctaContainer}>
          <Image src="/check-mail.svg" alt="#" width="118" height="117" />
          <div className={styles.ctaTextContainer}>
            <h6 className={ctaTextHeadingStyles}>Check your mail</h6>
            <p className={ctaTextStyles}>
              We have sent a verification code to reset your password.
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.enterVerificationContainer}>
          <h6 className={verificationHeadingStyles}>
            Enter your verification code
          </h6>
          <FourDigitInput
            handleChange={handleChange}
            digits={digits}
            inputRefs={inputRefs}
            showRequiredText={showRequiredText}
            handleBackspace={handleBackspace}
          />
        </div>
      )}

      <div className={styles.footer}>
        {showOpenEmail ? (
          <PrimaryButton onClick={openEmailHandler}>
            Open email app
          </PrimaryButton>
        ) : (
          <PrimaryButton
            onClick={submitOtpHandler}
            type="submit"
            disabled={areAnyDigitsOmitted}
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
    </div>
  );
}

export default MailVerification;
