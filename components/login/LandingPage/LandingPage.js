import React from "react";
import styles from "./LandingPage.module.scss";
import PrimaryButton from "../../../ui-components/Buttons/PrimaryButton/PrimaryButton";
import bannerAnimationLightTheme from "../../../public/bannerAnimation.json";
import bannerAnimationDarkTheme from "../../../public/bannerAnimationDarkTheme.json";
import Lottie from "lottie-react";
import { useSelector } from "react-redux";
import Image from "next/image";

function LandingPage({ loginMethod, onLoginBtnClick }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const loginBtnHandler = () => {
    onLoginBtnClick(true);
  };

  const ctaTextHeadingStyles = `${styles.ctaTextHeadingLightTheme} ${
    isDarkMode && styles.ctaTextHeadingDarkTheme
  }`;

  const ctaTextStyles = `${styles.ctaTextLightTheme} ${
    isDarkMode && styles.ctaTextDarkTheme
  }`;

  const attributionContentStyles = `${styles.attributionContentLightTheme} ${
    isDarkMode && styles.attributionContentDarkTheme
  }`;

  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.cta}>
        <Lottie
          animationData={
            isDarkMode ? bannerAnimationDarkTheme : bannerAnimationLightTheme
          }
          loop={false}
        />
        <div className={styles.ctaTextContainer}>
          <h5 className={ctaTextHeadingStyles}>Zippee Riders,</h5>
          <p className={ctaTextStyles}>
            Time to Learn and Grow with our Rider Training
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <PrimaryButton
          onClick={loginBtnHandler}
          className={styles.loginBtn}
          type="submit"
        >
          {loginMethod === "mobile"
            ? "Login with Mobile Number"
            : "Login with Email"}
        </PrimaryButton>

        <span className={attributionContentStyles}>
          Powered by{" "}
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

export default LandingPage;
