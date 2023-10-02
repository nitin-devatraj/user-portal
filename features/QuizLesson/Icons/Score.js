import React from "react";

function Score({ isDarkMode }) {
  const fillColor = isDarkMode ? "#93370D" : "#5E5F62";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M14.5 4H13V3.5C13 3.23478 12.8946 2.98043 12.7071 2.79289C12.5196 2.60536 12.2652 2.5 12 2.5H4C3.73478 2.5 3.48043 2.60536 3.29289 2.79289C3.10536 2.98043 3 3.23478 3 3.5V4H1.5C1.23478 4 0.98043 4.10536 0.792893 4.29289C0.605357 4.48043 0.5 4.73478 0.5 5V6C0.5 6.66304 0.763392 7.29893 1.23223 7.76777C1.46438 7.99991 1.73998 8.18406 2.04329 8.3097C2.34661 8.43534 2.6717 8.5 3 8.5H3.22813C3.52265 9.43338 4.08423 10.26 4.84344 10.8777C5.60265 11.4954 6.52622 11.8771 7.5 11.9756V13.5H6C5.86739 13.5 5.74021 13.5527 5.64645 13.6464C5.55268 13.7402 5.5 13.8674 5.5 14C5.5 14.1326 5.55268 14.2598 5.64645 14.3536C5.74021 14.4473 5.86739 14.5 6 14.5H10C10.1326 14.5 10.2598 14.4473 10.3536 14.3536C10.4473 14.2598 10.5 14.1326 10.5 14C10.5 13.8674 10.4473 13.7402 10.3536 13.6464C10.2598 13.5527 10.1326 13.5 10 13.5H8.5V11.9738C10.4963 11.7719 12.1525 10.3713 12.755 8.5H13C13.663 8.5 14.2989 8.23661 14.7678 7.76777C15.2366 7.29893 15.5 6.66304 15.5 6V5C15.5 4.73478 15.3946 4.48043 15.2071 4.29289C15.0196 4.10536 14.7652 4 14.5 4ZM3 7.5C2.60218 7.5 2.22064 7.34196 1.93934 7.06066C1.65804 6.77936 1.5 6.39782 1.5 6V5H3V7C3 7.16667 3.00813 7.33333 3.02437 7.5H3ZM12 6.94375C12 9.16375 10.2194 10.9838 8.03063 11H8C6.93913 11 5.92172 10.5786 5.17157 9.82843C4.42143 9.07828 4 8.06087 4 7V3.5H12V6.94375ZM14.5 6C14.5 6.39782 14.342 6.77936 14.0607 7.06066C13.7794 7.34196 13.3978 7.5 13 7.5H12.9688C12.9893 7.31529 12.9997 7.1296 13 6.94375V5H14.5V6Z"
        fill={fillColor}
      />
    </svg>
  );
}

export default Score;
