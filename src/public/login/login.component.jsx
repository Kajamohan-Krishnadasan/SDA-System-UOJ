import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigate from "../../shared/AutoNavigate/navigation";
import NotificationComponent from "../../shared/notification/notification.component";
import "./login.component.scss";

const LoginComponent = ({ userType, isOpen, openPopup }) => {
  const nav = useNavigate();

  const [isDisabled, setIsDisabled] = useState(true);
  const [isNotification, setIsNotification] = useState(false);
  // const [loading, setloading] = useState(false);

  const [user, setuser] = useState({
    username: "",
    password: "",
  });

  const [error, seterror] = useState({
    username: "",
    password: "",
  });

  const [isError, setIsError] = useState({
    username: true,
    password: true,
  });

  const [isTouch, setIsTouch] = useState({
    username: false,
    password: false,
  });

  const setUserDetails = () => {
    localStorage.setItem("authenticated", "true");

    if (userType === "Staff") {
      localStorage.setItem("user-role", "staff");

      // nav("/sda-uoj-system/academic-staff");
    }

    if (userType === "Student") {
      localStorage.setItem("user-role", "student");

      // nav("/sda-uoj-system/student");
    }

    if (userType === "Admin") {
      localStorage.setItem("user-role", "admin");

      // nav("/sda-uoj-system/non-academic-staff");
    }
    Navigate(nav);
  };

  useEffect(() => {
    if (!isError.username && !isError.password) {
      setIsDisabled(false);
      setIsNotification(false);
    } else {
      setIsDisabled(true);
      if (isTouch.username && isError.username) {
        setIsNotification(true);
      }
      if (isTouch.password && isError.password) {
        setIsNotification(true);
      }
    }
  }, [isError, isTouch]);

  const closeModal = () => {
    isOpen(false);
  };

  const handleLogin = () => {
    closeModal();

    setUserDetails();

    // setloading(true);
    // setTimeout(() => {
    //   setloading(false);
    //   closeModal();
    // }, 2000);
  };

  const handleUser = (e) => {
    const { name, value } = e.target;

    setuser({
      ...user,
      [name]: value,
    });

    if (name === "username") handleValidate(true, false, value);
    if (name === "password") handleValidate(false, true, value);
  };

  const handleValidate = (isUserame, isPassword, value) => {
    if (isUserame) {
      handleValidateUsername(value);
    }

    if (isPassword) {
      handleValidatePassword(value);
    }
  };

  const handleValidateUsername = (value) => {
    let isErrorUsername = true;

    const errors = {
      username: "",
    };

    setIsTouch({
      ...isTouch,
      username: true,
    });

    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    if (value.length < 1) {
      isErrorUsername = true;
      errors.username =
        "Username is required. Please use university email address.";
    } else if (value.includes(" ")) {
      isErrorUsername = true;
      errors.username =
        "Username can't contain spaces. Please use university email address.";
    } else if (!emailRegex.test(value)) {
      isErrorUsername = true;
      errors.username =
        "Username is invalid. Please use university email address.";
    } else {
      isErrorUsername = false;
    }

    seterror(errors);
    setIsError({
      ...isError,
      username: isErrorUsername,
    });

    return isError;
  };

  const handleValidatePassword = (value) => {
    let isErrorPassword = true;
    const errors = {
      password: "",
    };

    setIsTouch({
      ...isTouch,
      password: true,
    });

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

    if (value.length < 1) {
      isErrorPassword = true;
      errors.password =
        "Password is required. Please use university email address.";
    } else if (value.includes(" ")) {
      isErrorPassword = true;
      errors.password =
        "Password can't contain spaces. Please use university email address.";
    } else if (!passwordRegex.test(value)) {
      isErrorPassword = true;
      errors.password =
        "Password is invalid. Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.";
    } else {
      isErrorPassword = false;
    }

    seterror(errors);
    setIsError({
      ...isError,
      password: isErrorPassword,
    });

    return isError;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const err = isError.username || isError.password;

    if (!err) {
      // setloading(true);

      // setTimeout(() => {
      //   // setloading(false);
      handleLogin();
      // }, 2000);

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
    openPopup(true);
    closeModal();
  };

  return (
    <div className="login">
      {isNotification && (
        <NotificationComponent
          message={error.username || error.password}
          type="error"
          isOpen={setIsNotification}
        />
      )}

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

              <div className="hint">(use you university credentials)</div>
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

              <div className="hint">(use you university credentials)</div>
            </div>

            <div className="login__container__body__form__button">
              <button
                type="submit"
                disabled={isDisabled}
                onClick={handleFormSubmit}
              >
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
