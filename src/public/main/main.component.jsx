import React, { useState } from "react";
import LoginComponent from "../login/login.component";
import PopupComponent from "../popup/popup.component";
import "./main.component.scss";

const MainComponent = () => {
  const [userType, setuserType] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const popupMessage = "service is not available at the moment";

  const handleUserType = (value) => {
    if (
      value === "non-academic-staff" ||
      value === "academic-staff" ||
      value === "student"
    ) {
      if (value === "student") {
        setuserType("Student");
      } else if (value === "academic-staff") {
        setuserType("Staff");
      } else {
        setuserType("Admin");
      }

      handleLogin();
    } else {
      setuserType(null);
    }
  };

  const handleLogin = () => {
    localStorage.setItem("userType", userType);
    setOpenLogin(true);
  };

  return (
    <main className="main">
      {openLogin && (
        <LoginComponent
          userType={userType}
          isOpen={setOpenLogin}
          openPopup={setOpenPopup}
        />
      )}
      {openPopup && (
        <PopupComponent message={popupMessage} isOpen={setOpenPopup} />
      )}

      <div className="desktop-only">
        desktop
        <button
          onClick={() => {
            handleUserType("student");
          }}
          className="btn btn__primary"
        >
          login as student
        </button>
        <button
          onClick={() => {
            handleUserType("academic-staff");
          }}
          className="btn btn__primary"
        >
          login as academic staff
        </button>
        <button
          onClick={() => {
            handleUserType("non-academic-staff");
          }}
          className="btn btn__primary"
        >
          login as non-academic staff
        </button>
      </div>
      <div className="mobile-only">mobile</div>
    </main>
  );
};

export default MainComponent;
