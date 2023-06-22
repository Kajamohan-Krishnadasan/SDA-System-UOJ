import React, { useEffect, useState } from "react";
import "./notification.component.scss";

const NotificationComponent = ({ type, message, isOpen }) => {
  // type = type || "error";
  message = message || "please try again later or contact the administrator";
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTimeout(() => {
      closeNotification();
    }, 3000);
  });

  useEffect(() => {
    const notification = document.querySelector(".Notification__container");

    if (type === "success") {
      setTitle("Successfull!");
      notification.classList.add("Notification__container--success");
    } else if (type === "error") {
      setTitle("Error occurred!");
      notification.classList.add("Notification__container--error");
    } else if (type === "warning") {
      setTitle("Warning!");
      notification.classList.add("Notification__container--warning");
    } else {
      setTitle("Info!");
      notification.classList.add("Notification__container--info");
    }
  }, [type]);

  const closeNotification = () => {
    isOpen(false);
  };

  return (
    <div className="Notification">
      <div className="Notification__container">
        <div className="Notification__container__header">
          <h1 className="Notification__container__header__title">{title}</h1>

          <div
            onClick={closeNotification}
            className="Notification__container__close"
          >
            <span className="fas fa-times"></span>
          </div>
        </div>

        <div className="Notification__container__text">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;
