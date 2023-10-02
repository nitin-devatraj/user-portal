import React, { useReducer } from "react";
import styles from "./Navbar.module.scss";
import HomeIcon from "./Icons/HomeIcon";
import ProfileIcon from "./Icons/ProfileIcon";
import TaskIcon from "./Icons/TaskIcon";
import TrainingIcon from "./Icons/TrainingIcon";
import { useSelector } from "react-redux";

const selectedBtnreducer = (prevState, action) => {
  switch (action) {
    case action === "Home":
      return "Home";
    case action === "Training":
      return "Training";
    case action === "Task":
      return "Task";
    case action === "Profile":
      return "Profile";
    default:
      return action;
  }
};

const iconMapping = {
  Home: HomeIcon,
  Training: TrainingIcon,
  Task: TaskIcon,
  Profile: ProfileIcon,
};

function Navbar() {
  const [selectedBtn, dispatchSelectedBtn] = useReducer(
    selectedBtnreducer,
    "Home"
  );
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const buttonClickHandler = (event) => {
    dispatchSelectedBtn(event.target.id);
  };

  const navBarContainerStyles = `${styles.navBarContainerLightTheme} ${
    isDarkMode && styles.navBarContainerDarkTheme
  }`;

  return (
    <nav className={navBarContainerStyles}>
      {Object.keys(iconMapping).map((buttonName) => {
        const IconComponent = iconMapping[buttonName];
        const fillColor =
          isDarkMode && selectedBtn === buttonName
            ? "#8CB4FF"
            : isDarkMode
            ? "#C6C7CA"
            : selectedBtn === buttonName
            ? "#004DDD"
            : "#909194";

        const isButtonSelected = selectedBtn === buttonName;
        const btnStyles = `${styles.navItemLightTheme} ${
          isButtonSelected && styles.selectedLightTheme
        } ${isDarkMode && styles.navItemDarkTheme} ${
          isDarkMode && isButtonSelected && styles.selectedDarkTheme
        }`;

        return (
          <button
            key={buttonName}
            className={btnStyles}
            onClick={buttonClickHandler}
            id={buttonName}
          >
            <IconComponent fillColor={fillColor} />
            {buttonName}
          </button>
        );
      })}
    </nav>
  );
}

export default Navbar;
