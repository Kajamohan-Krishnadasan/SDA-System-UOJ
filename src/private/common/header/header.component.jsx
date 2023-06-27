import React from "react";
import "./header.component.scss";
import logo from "../../../assets/img/logo.png";

const HeaderComponent = () => {
  const username = localStorage.getItem("username");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  window.addEventListener("click", (e) => {
    const arrow = document.querySelector(".user__dropdown__arrow");
    const icon = document.querySelector(".user__dropdown__arrow__icon");
    const name = document.querySelector(".user__dropdown__arrow__name");

    const content = document.querySelector(".user__dropdown__content");

    if (e.target !== arrow && (e.target !== icon) & (e.target !== name)) {
      icon.classList.remove("rotate");
      content.classList.remove("show");
    }
  });

  const showDown = () => {
    const icon = document.querySelector(".user__dropdown__arrow__icon");
    const content = document.querySelector(".user__dropdown__content");

    icon.classList.toggle("rotate");
    content.classList.toggle("show");
  };

  return (
    <div className="private">
      <div className="header">
        <div className="top">
          <div className="header__logo">
            <img
              className="header__logo__img"
              src={logo}
              alt="university logo"
            />
          </div>

          <div className="header__title">
            <h1 className="header__title__h1">
              Welcome to Student Document Approval System
            </h1>
          </div>
        </div>

        <div className="user">
          <div className="user__avatar">
            <img
              className="user__avatar__img"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="user avatar"
            />
          </div>

          <div onClick={showDown} className="user__dropdown">
            <div className="user__dropdown__arrow">
              <div className="user__dropdown__arrow__name">{username}</div>
              <i className="fas fa-caret-down user__dropdown__arrow__icon"></i>
            </div>

            <div className="user__dropdown__content">
              <div className="user__dropdown__content__setting">
                <i className="fas fa-cog user__dropdown__content__setting__icon"></i>
                Settings
              </div>

              <div onClick={logout} className="user__dropdown__content__logout">
                <i className="fas fa-sign-out-alt user__dropdown__content__logout__icon"></i>
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
