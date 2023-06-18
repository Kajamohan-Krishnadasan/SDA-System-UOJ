import React, { useState } from "react";
import "./login.component.scss";

const LoginComponent = ({ userType, isOpen, openPopup }) => {
  const [user, setuser] = useState({
    username: "",
    password: "",
  });

  const [error, seterror] = useState({
    username: "",
    password: "",
  });

  const [isError, setIsError] = useState({
    username: false,
    password: false,
  });

  // const [loading, setloading] = useState(false);

  const closeModal = () => {
    isOpen(false);
  };

  const handleLogin = () => {
    closeModal();
  };

  const handleUser = (e) => {
    const { name, value } = e.target;

    setuser({
      ...user,
      [name]: value,
    });

    handleValidate();
  };

  const handleValidate = () => {
    let isErrorUsername = false;
    let isErrorPassword = false;

    const errors = {
      username: "",
      password: "",
    };

    if (user.username.length < 1) {
      isErrorUsername = true;
      errors.username = "Username is required";
    } else if (user.username.includes(" ")) {
      isErrorUsername = true;
      errors.username = "Username cannot contain spaces";
    }

    if (user.password.length < 1) {
      isErrorPassword = true;
      errors.password = "Password is required";
    } else if (user.password.includes(" ")) {
      isErrorPassword = true;
      errors.password = "Password cannot contain spaces";
    }

    seterror(errors);
    setIsError({
      username: isErrorUsername,
      password: isErrorPassword,
    });

    return isError;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("form submitted");
    console.log("form", e.target.value);

    const err = handleValidate();

    if (!err) {
      // setloading(true);

      setTimeout(() => {
        // setloading(false);
        handleLogin();
      }, 2000);

      setuser({
        username: "",
        password: "",
      });

      seterror({
        username: "",
        password: "",
      });
    }
  };

  const handleForgotPassword = () => {
    console.log("forgot password");
    openPopup(true);
    closeModal();
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container__close">
          <span className="fas fa-times" onClick={closeModal}></span>
        </div>

        <div className="login__container__header">
          <h1 className="login__container__header__title">
            Login as {userType || "user"}
          </h1>
        </div>

        <form className="login__container__body">
          <div className="login__container__body__form">
            <div className="login__container__body__form__input">
              <input
                type="text"
                name="username"
                id="username"
                placeholder=" "
                onChange={handleUser}
              />
              <label htmlFor="username">Username</label>

              {!isError.username ? (
                <div className="hint">(use you university credentials)</div>
              ) : (
                <div className="error">
                  <span className="fas fa-exclamation-circle error___icon"></span>
                  <span className="error__message">{error.username}</span>
                </div>
              )}
            </div>

            <div className="login__container__body__form__input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder=" "
                onChange={handleUser}
              />
              <label htmlFor="password">Password</label>

              {!isError.password ? (
                <div className="hint">(use you university credentials)</div>
              ) : (
                <div className="error">
                  <span className="fas fa-exclamation-circle error___icon"></span>
                  <span className="error__message">{error.password}</span>
                </div>
              )}
            </div>

            <div className="login__container__body__form__button">
              <button type="submit" onClick={handleFormSubmit}>
                Login
              </button>
            </div>

            <div className="login__container__body__form__forgot">
              <div
                className="login__container__body__form__forgot__label"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
