function UploadIcon({ isDarkMode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M10.6666 10.667L7.99997 8.00031M7.99997 8.00031L5.33331 10.667M7.99997 8.00031V14.0003M13.5933 12.2603C14.2435 11.9058 14.7572 11.3449 15.0532 10.6661C15.3493 9.98723 15.4108 9.22914 15.2281 8.51144C15.0454 7.79375 14.629 7.15732 14.0444 6.70261C13.4599 6.2479 12.7406 6.0008 12 6.00031H11.16C10.9582 5.21981 10.5821 4.4952 10.0599 3.88098C9.5378 3.26675 8.8832 2.77888 8.14537 2.45405C7.40754 2.12922 6.60567 1.97589 5.80005 2.00557C4.99443 2.03525 4.20602 2.24718 3.49409 2.62543C2.78216 3.00367 2.16525 3.53838 1.68972 4.18937C1.2142 4.84036 0.892434 5.59067 0.748627 6.38391C0.60482 7.17715 0.64271 7.99267 0.859449 8.76916C1.07619 9.54564 1.46613 10.2629 1.99997 10.867"
        stroke={isDarkMode ? "#E2E3E6" : "#5E5F62"}
        stroke-width="1.23457"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default UploadIcon;
