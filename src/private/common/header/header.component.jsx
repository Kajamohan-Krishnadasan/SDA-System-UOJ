import React from "react";
import "./header.component.scss";
import logo from "../../../assets/img/logo.png";

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo__img" src={logo} alt="university logo" />
      </div>

      <div className="header__title">
        <h1 className="header__title__h1">
          Welcome to Student Document Approval System
        </h1>
      </div>
    </header>
  );
};

export default HeaderComponent;
