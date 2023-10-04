import React, { useState, useRef } from "react";
import styles from "./MobileLoginForm.module.scss";
import PhoneInput from "../../../ui-components/InputFields/PhoneInput/PhoneInput";
import FourDigitInput from "../FourDigitInput/FourDigitInput";
import PrimaryButton from "../../../ui-components/Buttons/PrimaryButton/PrimaryButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useRouter } from "next/router";
import Image from "next/image";

const MobileLoginForm = (): React.JSX.Element => {
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [isMobileNumberValid, setIsMobileNumberValid] = useState<boolean>(true);
  const [showHelperText, setShowHelperText] = useState<boolean>(false);
  const [isGenerateOtpBtnClicked, setIsGenerateOtpBtnClicked] =
    useState<boolean>(false);
  const [showRequiredText, setShowRequiredText] = useState<boolean>(false);
  const [digits, setDigits] = useState<string[]>(["", "", "", ""]);
  const inputRefs: React.MutableRefObject<null | HTMLInputElement>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const router = useRouter();

  const countryCodes: string[] = [
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

  const isGenerateOtpBtnDisabled: boolean = mobileNumber.length < 1;
  const areAnyDigitsOmitted: boolean = digits.some((digit) => digit === "");

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowRequiredText(false);

    const newDigits = [...digits];
    newDigits[index] = event.target.value;
    setDigits(newDigits);

    if (index < inputRefs.length - 1 && event.target.value !== "") {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleBackspace = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && index >= 1 && !event.currentTarget.value) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const mobileNumberChangeHandler = (value: string) => {
    setShowHelperText(false);
    setIsMobileNumberValid(true);
    setMobileNumber(value);
  };

  const isEnteredMobileNumberValid = (mobileNumber: string) => {
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

  const formSubmitHandler = (event: React.FormEvent) => {
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
            label=""
            disabled={false}
            required={false}
            placeholder=""
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
};

export default MobileLoginForm;
