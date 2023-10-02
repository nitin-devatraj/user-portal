import React from "react";

function ArrowRight({ isDarkMode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 11.9995H19M19 11.9995L14.5005 16.499M19 11.9995L14.5005 7.5"
        stroke={isDarkMode ? "#F0F1F4" : "#46474A"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ArrowRight;
