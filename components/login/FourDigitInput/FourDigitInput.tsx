import React, { useEffect, useState } from "react";
import styles from "./FourDigitInput.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface FourDigitInputProps {
  digits: string[];
  handleChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  inputRefs: React.MutableRefObject<null | HTMLInputElement>[];
  showRequiredText: boolean;
  handleBackspace: (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => void;
}

const FourDigitInput = ({
  digits,
  handleChange,
  inputRefs,
  showRequiredText,
  handleBackspace,
}: FourDigitInputProps): React.JSX.Element => {
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);
  const [countdown, setCountdown] = useState<number>(60);
  const [isResendOtpClicked, setIsResendOtpClicked] = useState<boolean>(false);

  const timerStyles = `${styles.timerTextLightTheme}  ${
    countdown <= 0 && !isResendOtpClicked && styles.timerExpiredText
  } ${isDarkMode && styles.timerTextDarkTheme}`;

  const resendOtpBtnHandler = () => {
    setIsResendOtpClicked(true);
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevState) => prevState - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [countdown]);

  useEffect(() => {
    inputRefs[0].current?.focus();
    // eslint-disable-next-line
  }, []);

  const requiredTextStyles = `${styles.requiredTextLightTheme} ${
    isDarkMode && styles.requiredTextDarkTheme
  }`;

  return (
    <div className={styles.fourDigitInputContainer}>
      <div className={styles.fourDigitInput}>
        {digits.map((digit, index) => {
          const inputStyles = `${styles.inputLightTheme} ${
            isDarkMode && styles.inputDarkTheme
          } ${digit !== "" && !isDarkMode && styles.inputFilledLightTheme} ${
            digit !== "" && isDarkMode && styles.inputFilledDarkTheme
          }`;

          return (
            <input
              key={index}
              className={inputStyles}
              type="text"
              pattern="\d*"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(event) => handleChange(index, event)}
              ref={inputRefs[index]}
              onKeyDown={(event) => handleBackspace(index, event)}
            />
          );
        })}
      </div>
      {showRequiredText && (
        <p className={requiredTextStyles}>You have entered the wrong OTP</p>
      )}

      <span className={timerStyles} onClick={resendOtpBtnHandler}>
        {!isResendOtpClicked ? "Resend OTP" : "OTP is set"}
        {countdown > 0 && <span> in {countdown}s</span>}
      </span>
    </div>
  );
};

export default FourDigitInput;
