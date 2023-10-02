import React from "react";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../../store/themeSlice";
import ToggleButton from "../ToggleButton/ToggleButton";

function ThemeToggleButton() {
  const dispatch = useDispatch();

  function themeToggleHandler() {
    dispatch(toggleDarkMode());
  }

  return <ToggleButton onClick={themeToggleHandler} />;
}

export default ThemeToggleButton;
