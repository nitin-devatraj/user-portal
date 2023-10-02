import React from "react";

function StatusIcon({ isDarkMode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12.6663 7.9987L7.99967 12.6654L3.33301 7.9987"
        fill={isDarkMode ? "#E2E3E6" : "#46474A"}
      />
    </svg>
  );
}

export default StatusIcon;
