import React from "react";
import "./popup.component.scss";

const PopupComponent = ({ message, isOpen }) => {
  const closeModal = () => {
    isOpen(false);
  };

  message = `Currenty this feature is not available. Please try again later or contact the administrator.`;

  return (
    <div className="popup">
      <div className="popup__container">
        <div className="popup__container__header">
          <div className="popup__container__header__title">Forgot Password</div>

          <div className="popup__container__header__close">
            <span onClick={closeModal} className="fas fa-times "></span>
          </div>
        </div>

        <div className="popup__container__content">
          <div className="popup__container__content__message">{message}</div>
          <span className="popup__container__content__thankyou">
            Thank you.
          </span>
        </div>

        <div className="popup__container__footer">
          <button onClick={closeModal} className="btn btn__secondary">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;
