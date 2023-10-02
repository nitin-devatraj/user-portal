import React, { useState, useRef } from "react";
import styles from "./MobileLoginForm.module.scss";
import PhoneInput from "../../../ui-components/InputFields/PhoneInput/PhoneInput";
import FourDigitInput from "../FourDigitInput/FourDigitInput";
import PrimaryButton from "../../../ui-components/Buttons/PrimaryButton/PrimaryButton";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";

function MobileLoginForm() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const [mobileNumber, setMobileNumber] = useState("");
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);
  const [showHelperText, setShowHelperText] = useState(false);
  const [isGenerateOtpBtnClicked, setIsGenerateOtpBtnClicked] = useState(false);
  const [showRequiredText, setShowRequiredText] = useState(false);
  const [digits, setDigits] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const router = useRouter();

  const countryCodes = [
    "IN",
    "US",
    "CA",
    "GB",
    "AU",
    "DE",
    "FR",
    "IT",
    "JP",
    "BR",
    "IN",
  ];

  const isGenerateOtpBtnDisabled = mobileNumber.length < 1;
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

  const mobileNumberChangeHandler = (value) => {
    setShowHelperText(false);
    setIsMobileNumberValid(true);
    setMobileNumber(value);
  };

  const isEnteredMobileNumberValid = (mobileNumber) => {
    return mobileNumber.trim() !== "" && mobileNumber.length >= 10;
  };

  const generateOtpHandler = () => {
    const isMobileNumberValid = isEnteredMobileNumberValid(mobileNumber);
    if (isMobileNumberValid === false) {
      setShowHelperText(!isMobileNumberValid);
      setIsMobileNumberValid(isMobileNumberValid);
    } else {
      setIsGenerateOtpBtnClicked(true);
    }
  };

  const submitOtpHandler = () => {
    if (areAnyDigitsOmitted) {
      setShowRequiredText(areAnyDigitsOmitted);
    } else {
      router.push("/dashboard");
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const attributionContentStyles = `${styles.attributionContentLightTheme} ${
    isDarkMode && styles.attributionContentDarkTheme
  }`;

  const formHeadingStyles = `${styles.formHeadingLightTheme} ${
    isDarkMode && styles.formHeadingDarkTheme
  }`;

  return (
    <form
      className={styles.mobileLoginFormContainer}
      onSubmit={formSubmitHandler}
    >
      <div className={styles.inputContainer}>
        <h5 className={formHeadingStyles}>
          {!isGenerateOtpBtnClicked ? "Enter your number" : "Enter your OTP"}
        </h5>
        {!isGenerateOtpBtnClicked ? (
          <PhoneInput
            value={mobileNumber}
            onChange={mobileNumberChangeHandler}
            showHelperText={showHelperText}
            helperText="minimum 10 digits required"
            invalid={!isMobileNumberValid}
            countryCodesList={countryCodes}
            type="tel"
          />
        ) : (
          <FourDigitInput
            handleChange={handleChange}
            digits={digits}
            inputRefs={inputRefs}
            showRequiredText={showRequiredText}
            handleBackspace={handleBackspace}
          />
        )}
      </div>
      <div className={styles.footer}>
        {!isGenerateOtpBtnClicked ? (
          <PrimaryButton
            onClick={generateOtpHandler}
            type="submit"
            disabled={isGenerateOtpBtnDisabled}
          >
            Generate OTP
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
    </form>
  );
}

export default MobileLoginForm;
