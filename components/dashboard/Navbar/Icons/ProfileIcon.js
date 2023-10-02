import React from "react";

function ProfileIcon({ fillColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
    >
      <path
        d="M14.5 2.625C12.2502 2.625 10.051 3.29213 8.18039 4.54203C6.30978 5.79193 4.85182 7.56847 3.99088 9.64698C3.12993 11.7255 2.90467 14.0126 3.34357 16.2192C3.78248 18.4257 4.86584 20.4525 6.45667 22.0433C8.04749 23.6342 10.0743 24.7175 12.2809 25.1564C14.4874 25.5953 16.7745 25.3701 18.853 24.5091C20.9315 23.6482 22.7081 22.1902 23.958 20.3196C25.2079 18.449 25.875 16.2498 25.875 14C25.8718 10.9841 24.6724 8.09271 22.5398 5.96018C20.4073 3.82764 17.5159 2.62818 14.5 2.625ZM8.6025 21.6016C9.2355 20.6116 10.1075 19.7969 11.1382 19.2326C12.1688 18.6682 13.325 18.3724 14.5 18.3724C15.675 18.3724 16.8312 18.6682 17.8618 19.2326C18.8925 19.7969 19.7645 20.6116 20.3975 21.6016C18.7113 22.913 16.6361 23.6249 14.5 23.6249C12.3639 23.6249 10.2887 22.913 8.6025 21.6016ZM11 13.125C11 12.4328 11.2053 11.7561 11.5899 11.1805C11.9744 10.6049 12.5211 10.1563 13.1606 9.89142C13.8002 9.62651 14.5039 9.5572 15.1828 9.69225C15.8618 9.8273 16.4854 10.1606 16.9749 10.6501C17.4644 11.1396 17.7977 11.7632 17.9328 12.4422C18.0678 13.1211 17.9985 13.8248 17.7336 14.4644C17.4687 15.1039 17.0201 15.6506 16.4445 16.0351C15.8689 16.4197 15.1922 16.625 14.5 16.625C13.5717 16.625 12.6815 16.2562 12.0251 15.5999C11.3688 14.9435 11 14.0533 11 13.125ZM21.6925 20.3886C20.7166 18.9745 19.3444 17.8804 17.7484 17.2441C18.6057 16.5688 19.2313 15.6432 19.5382 14.596C19.845 13.5487 19.8179 12.4319 19.4606 11.4008C19.1033 10.3696 18.4335 9.47547 17.5445 8.84263C16.6554 8.20979 15.5913 7.86973 14.5 7.86973C13.4087 7.86973 12.3446 8.20979 11.4555 8.84263C10.5665 9.47547 9.89671 10.3696 9.5394 11.4008C9.18209 12.4319 9.15497 13.5487 9.46183 14.596C9.76869 15.6432 10.3943 16.5688 11.2516 17.2441C9.65559 17.8804 8.28338 18.9745 7.30751 20.3886C6.07438 19.0019 5.2684 17.2883 4.98662 15.4541C4.70484 13.62 4.95927 11.7435 5.71929 10.0506C6.4793 8.35768 7.71249 6.92057 9.27035 5.91231C10.8282 4.90404 12.6443 4.36761 14.5 4.36761C16.3557 4.36761 18.1718 4.90404 19.7297 5.91231C21.2875 6.92057 22.5207 8.35768 23.2807 10.0506C24.0407 11.7435 24.2952 13.62 24.0134 15.4541C23.7316 17.2883 22.9256 19.0019 21.6925 20.3886Z"
        fill={fillColor}
      />
    </svg>
  );
}

export default ProfileIcon;