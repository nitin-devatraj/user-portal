import React from "react";

function ArrowIcon({ direction, isDarkMode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d={direction === "bottom" ? "M4 6L8 10L12 6" : "M6 4L10 8L6 12"}
        stroke={isDarkMode ? "#F0F1F4" : "#303134"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowIcon;
