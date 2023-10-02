import React from "react";
import styles from "./Notifications.module.scss";
import NotificationItem from "./NotificationItem/NotificationItem";

function Notifications({ notificationItems }) {
  return (
    <div className={styles.notificationContainer}>
      {notificationItems.map((item, index) => (
        <NotificationItem item={item} key={index} />
      ))}
    </div>
  );
}

export default Notifications;
