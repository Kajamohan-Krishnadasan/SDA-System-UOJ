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

  const studentRequests = [
    "Request Exam Reschedule",
    "Request Exam Re-attempt",
    "Request Lab Reschedule",
    "Request Studentship Confirm Letter",
    "Request Progress Report",
    "Request New University Student Record Book",
    "Request New University Student Identity Card",
  ];

  const staffRequests = [
    "Approve/Reject Exam Reschedule",
    "Approve/Reject Exam Re-attempt",
    "Approve/Reject Lab Reschedule",
  ];

  const adminRequests = [
    "Approve/Reject Exam Reschedule",
    "Approve/Reject Exam Re-attempt",
    "Sent Studentship Confirm Letter",
    "Sent Progress Report",
    "Provide New University Student Record Book",
    "Provide New University Student Identity Card",
  ];

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

      <div className="mobile-only">
        <div className="mobile-only__login">
          <div className="mobile-only__login__description">
            Please select your user type
          </div>

          <div className="mobile-only__login__users">
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
        </div>

        <div className="mobile-only__Request_Details">
          <div className="mobile-only__Requester">
            <div className="mobile-only__Requester__title">Student</div>

            {studentRequests.map((request, index) => (
              <div key={index} className="mobile-only__Request__name">
                {index + 1}. {request}
              </div>
            ))}
          </div>

          <div className="mobile-only__Requester">
            <div className="mobile-only__Requester__title">Academic Staff</div>
            {staffRequests.map((request, index) => (
              <div key={index} className="mobile-only__Request__name">
                {index + 1}. {request}
              </div>
            ))}
          </div>

          <div className="mobile-only__Requester">
            <div className="mobile-only__Requester__title">
              Non-Academic Staff
            </div>
            {adminRequests.map((request, index) => (
              <div key={index} className="mobile-only__Request__name">
                {index + 1}. {request}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
