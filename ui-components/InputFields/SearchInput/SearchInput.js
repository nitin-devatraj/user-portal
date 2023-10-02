import React from "react";
import styles from "./SearchInput.module.scss";
import { ReactComponent as SearchIcon } from "../../../assets/icons/components/input-field/search-input/search-icon.svg";
import { useSelector } from "react-redux";

function SearchInput() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const searchInputContainerStyles = `${
    styles.searchInputContainerLightTheme
  } ${isDarkMode && styles.searchInputContainerDarkTheme}`;

  return (
    <div className={searchInputContainerStyles}>
      <SearchIcon />
      <input className={styles.input} type="text" placeholder="search" />
    </div>
  );
}

export default SearchInput;
